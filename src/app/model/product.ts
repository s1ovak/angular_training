import {Rating} from "./rating";

export class Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  featured: boolean;
  stock: number;
  image: string;
  rating: Rating;
}
