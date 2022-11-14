import {Book} from "./book";
import {Invoice} from "./invoice";

export interface InvoiceDetails {
  id?: number;
  quantity?: number;
  book?: Book;
  invoice?: Invoice;
}
