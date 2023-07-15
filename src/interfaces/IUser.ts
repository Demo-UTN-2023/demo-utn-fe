import { ICar } from "./ICar";

export interface IUser {
  name: string;
  lastname: string;
  car?: Array<ICar>;
}