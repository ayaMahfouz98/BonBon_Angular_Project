import { IOrderProduct } from "./OrderProduct";

export interface IOrder{
    id:number,
    orderDate:any,
    userId:string,
    user:any,
    orderProducts:IOrderProduct[],
    state:number
}
