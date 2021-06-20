export interface Author {
  name: string;
  lastname: string;
}

export interface Currency {
  currency: string;
  amount: number;
  decimals: number;
}

export interface SearchItem {
  id: string;
  title: string;
  price: Currency;
  picture: string;
  condition: string;
  free_shipping: boolean;
  city: string;
}

export interface SearchResult {
  author: Author;
  categories: string[];
  items: SearchItem[];
}

export type ItemDetail = SearchItem & {
  sold_quantity: number,
  description: string
};

export interface ItemResult {
  author: Author;
  categories: string[];
  item: ItemDetail;
}
