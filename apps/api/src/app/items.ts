import { Express } from 'express';
import axios from 'axios';

import { ItemResult, SearchItem, SearchResult } from '@mercadolibre-demo-nextjs/api-interfaces';
import { MLItem, MLItemDescription, MLSearch, MLCategory } from './common/interfaces';
import { AUTHOR_INFO, EMPTY_DESCRIPTION_TEXT, getDecimals } from './common/utils';

export function addTodoRoutes(app: Express) {
  app.get('/api/items', async (req, resp) => {
    let categories: string[] = [];
    let searchData: MLSearch;

    try {
      const response = await axios.get<MLSearch>(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`);
      searchData = response.data;
    } catch (error) {
      return resp.status(error.response?.status ?? 404).send({
        message: error.response?.data?.message ?? error.message
      });
    }

    const categoryFilter = searchData.available_filters.find(filter => filter.id === 'category');
    const sortedCategories = categoryFilter ? categoryFilter.values.sort((a, b) => b.results - a.results) : [];

    if (sortedCategories[0]?.id) {
      try {
        const response = await axios.get<MLCategory>(`https://api.mercadolibre.com/categories/${sortedCategories[0]?.id}`);
        categories = response.data.path_from_root.map(e => e.name);
      } catch (error) {}
    } else {
      const filters = searchData.filters.filter(filter => filter.id === 'category');
      categories = filters.length
        ? filters.map(filter =>
            filter.values.map(
              value => value.path_from_root.map(e => e.name).join()
            ).join()
          )
          .join()
          .split(',')
        : [];
    }
  
    const items: SearchItem[] = searchData.results
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

    const result: SearchResult = {
      author: AUTHOR_INFO,
      categories,
      items
    };

    resp.send(result);
  });

  app.get('/api/items/:id', async (req, resp) => {
    const itemId = req.params.id;

    let item: MLItem;
    let categories: string[];
    let description: string;
    
    try {
      const response = await axios.get<MLItem>(`https://api.mercadolibre.com/items/${itemId}`);
      item = response.data;
    } catch (error) {
      return resp.status(404).send({
        message: `Item id ${itemId} not found`
      });
    }

    try {
      const response = await axios.get<MLCategory>(`https://api.mercadolibre.com/categories/${item.category_id}`);
      categories = response.data.path_from_root.map(e => e.name);
    } catch (error) {
      categories = [];
    }

    try {
      const response = await axios.get<MLItemDescription>(`https://api.mercadolibre.com/items/${itemId}/description`);
      description = response.data.plain_text ?? '';
    } catch (error) {}

    const result: ItemResult = {
      author: AUTHOR_INFO,
      categories,
      item: {
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
      }
    };

    resp.send(result);
  });
}
