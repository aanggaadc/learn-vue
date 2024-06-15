interface List {
  brand: string;
  expiration_date: string;
  id: number;
  name: string;
  price_usd: number;
  production_date: string;
  model?: boolean;
  image_url?: string;
  origin?: string;
  ingredients?: string[];
  volume?: string;
  description?: string;
}

interface ListsResponse {
  message: string;
  data?: List[];
}

interface ListResponse {
  message: string;
  data?: List;
}

export { List, ListsResponse, ListResponse };
