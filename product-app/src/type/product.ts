export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface BasketItem extends Product {
  quantity: number;
}
