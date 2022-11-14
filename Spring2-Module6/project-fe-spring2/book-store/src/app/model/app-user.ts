import {Address} from "./address";

export interface AppUser {
  id?: number;
  name?: string;
  phone?: string;
  email?: string;
  address?: Address;
}
