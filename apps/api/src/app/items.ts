import { Express } from 'express';
import axios from 'axios';

import { ItemResult, SearchItem, SearchResult } from '@mercadolibre-demo-nextjs/api-interfaces';
import { MLItemResponse, MLItemDescriptionResponse, MLSearchResponse, MLCategory } from './interfaces';

export function addTodoRoutes(app: Express) {
  app.get('/api/items', async (req, resp) => {
    try {
      const response = await axios.get<MLSearchResponse>(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`);
  
      let categories: string[];
      const categoryFilter = response.data.available_filters.find(filter => filter.id === 'category');
      const sortedCategories = categoryFilter ? categoryFilter.values.sort((a, b) => b.results - a.results) : [];
  
      if (sortedCategories[0]?.id) {
        const responseCat = await axios.get<MLCategory>(`https://api.mercadolibre.com/categories/${sortedCategories[0]?.id}`);
        categories = responseCat.data.path_from_root.map(e => e.name);
      } else {
        const filters = response.data.filters.filter(filter => filter.id === 'category');
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
  
      const items: SearchItem[] = response.data.results
        .slice(0, 4)
        .map(result => ({
          id: result.id,
          title: result.title,
          price: {
            currency: result.currency_id,
            amount: result.price,
            decimals: 0,
          },
          picture: result.thumbnail,
          condition: result.condition,
          free_shipping: result.shipping.free_shipping,
          city: result.seller_address.city.name,
        }));
  
      const result: SearchResult = {
        author: {
          name: 'Manuel',
          lastname: 'Lopera'
        },
        categories,
        items
      };
  
      resp.send(result);
    } catch (error) {
      console.error(error);
    }
  });

  app.get('/api/items/:id', async (req, resp) => {
    try {
      const response = await axios.get<MLItemResponse>(`https://api.mercadolibre.com/items/${req.params.id}`);
      const responseDesc = await axios.get<MLItemDescriptionResponse>(`https://api.mercadolibre.com/items/${req.params.id}/description`);
  
      const item = response.data;
      
      const responseCat = await axios.get<MLCategory>(`https://api.mercadolibre.com/categories/${item.category_id}`);
      const categories: string[] = responseCat.data.path_from_root.map(e => e.name);
  
      const result: ItemResult = {
        author: {
          name: 'Manuel',
          lastname: 'Lopera'
        },
        categories,
        item: {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: 0,
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          sold_quantity: item.sold_quantity,
          city: item.seller_address.city.name,
          description: responseDesc.data.plain_text,
        }
      };
  
      resp.send(result);
    } catch (error) {
      console.error(error);
    }
  });
}
