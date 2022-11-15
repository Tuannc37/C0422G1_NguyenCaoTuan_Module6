import {AppUser} from "./app-user";
import {AppRole} from "./app-role";

export interface Account {
  id?: number;
  userName?: string;
  password?: string;
  appUser?: AppUser;
  appRoles?: AppRole;

}
