export interface Author {
  name: string;
  lastname: string;
}

export interface SearchItem {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
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

export interface ItemResult {
  author: Author;
  categories: string[];
  item: SearchItem & { sold_quantity: number, description: string };
}
