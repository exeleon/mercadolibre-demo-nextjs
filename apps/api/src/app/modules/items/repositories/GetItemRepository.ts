import axios from 'axios';

import {
  ItemDetail,
  ItemResult
} from '@mercadolibre-demo-nextjs/api-interfaces';
import {
  AUTHOR_INFO,
  EMPTY_DESCRIPTION_TEXT,
  ML_API_URL
} from '../../../core/constants';
import { getDecimals } from '../../../core/utils';
import {
  MLItem,
  MLItemDescription,
  MLCategory
} from '../interfaces';

export class GetItemRepository {

  async execute(id: string): Promise<ItemResult> {
    const item = await this.getItem(id);
  
    const categories = await this.getCategories(item.category_id);
  
    const description = await this.getDescription(id);
  
    return {
      categories,
      author: AUTHOR_INFO,
      item: this.mapResponse(item, description),
    };
  }

  private async getItem(id: string): Promise<MLItem> {
    try {
      const response = await axios.get<MLItem>(`${ML_API_URL}/items/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  private async getCategories(categoryId: string): Promise<string[]> {
    try {
      const response = await axios.get<MLCategory>(`${ML_API_URL}/categories/${categoryId}`);
      return response.data.path_from_root.map(e => e.name);
    } catch (error) {
      return [];
    }
  }

  private async getDescription(itemId: string): Promise<string> {
    try {
      const response = await axios.get<MLItemDescription>(`${ML_API_URL}/items/${itemId}/description`);
      return response.data.plain_text ?? '';
    } catch (error) {
      return '';
    }
  }

  private mapResponse(item: MLItem, description: string): ItemDetail {
    return {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: Math.trunc(item.price),
        decimals: getDecimals(item.price),
      },
      picture: item.pictures[0]?.url ?? item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      sold_quantity: item.sold_quantity,
      city: item.seller_address.city.name,
      description: description.trim().length ? description : EMPTY_DESCRIPTION_TEXT
    };
  }
}
