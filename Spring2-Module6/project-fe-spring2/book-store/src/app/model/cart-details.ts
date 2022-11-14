import {Book} from "./book";
import {Cart} from "./cart";

export interface CartDetails {
  id?: number;
  quantity?: number;
  book?: Book;
  cart?:Cart
}
