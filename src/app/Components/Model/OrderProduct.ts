import { IProduct } from "./Product";

export interface IOrderProduct{
        id:number
    ,amount:number
    ,price:number
    ,productId:number
    ,product:IProduct
,orderId:number}