import {Province} from "./province";

export interface City {
  id?: number;
  name?: string;
  provinces?: Province;
}
