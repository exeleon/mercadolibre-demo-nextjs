import axios from 'axios';

import {
  SearchItem,
  SearchResult
} from '@mercadolibre-demo-nextjs/api-interfaces';
import {
  AUTHOR_INFO,
  ML_API_URL
} from '../../../core/constants';
import { getDecimals } from '../../../core/utils';
import {
  MLSearch,
  MLCategory
} from '../interfaces';

export class SearchItemsRepository {

  async execute(query: string): Promise<SearchResult> {
    const searchData = await this.searchItems(query);

    const categories = await this.getCategories(searchData);

    const items = this.mapResponse(searchData);

    return {
      items,
      categories,
      author: AUTHOR_INFO,
    };
  }

  private async searchItems(query: string): Promise<MLSearch> {
    try {
      const response = await axios.get<MLSearch>(`${ML_API_URL}/sites/MLA/search?q=${query}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  private async getCategories(searchData: MLSearch): Promise<string[]> {
    const categoriesFilter = searchData.available_filters.find(filter => filter.id === 'category');
    const sortedCategoriesByResults = categoriesFilter ? categoriesFilter.values.sort((a, b) => b.results - a.results) : [];
    const mostResultsCategoryId = sortedCategoriesByResults[0]?.id;

    if (mostResultsCategoryId) {
      try {
        const response = await axios.get<MLCategory>(`${ML_API_URL}/categories/${mostResultsCategoryId}`);
        return response.data.path_from_root.map(e => e.name);
      } catch (error) {
      }
    }

    const filters = searchData.filters.filter(filter => filter.id === 'category');
    return filters.length
      ? filters.map(filter =>
          filter.values.map(
            value => value.path_from_root.map(e => e.name).join()
          ).join()
        )
        .join()
        .split(',')
      : [];
  }

  private mapResponse(searchData: MLSearch): SearchItem[] {
    return searchData.results
      .slice(0, 4)
      .map(result => ({
        id: result.id,
        title: result.title,
        price: {
          currency: result.currency_id,
          amount: Math.trunc(result.price),
          decimals: getDecimals(result.price),
        },
        picture: result.thumbnail,
        condition: result.condition,
        free_shipping: result.shipping.free_shipping,
        city: result.seller_address.city.name,
      }));
  }
}
