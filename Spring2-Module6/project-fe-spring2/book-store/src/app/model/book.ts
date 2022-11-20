import {Publisher} from "./publisher";
import {Author} from "./author";
import {Category} from "./category";

export interface Book {
  id?: number;
  title?: string;
  publisher?: Publisher;
  totalPages?: number;
  width?: number;
  height?: number;
  imageUrl?: string;
  summary?: string;
  quantity?: string;
  price?: string;
  releaseDate?: string;
  author?: Author;
  categories?:Category;
}
