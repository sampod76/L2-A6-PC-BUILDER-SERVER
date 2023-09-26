import { Model, Types } from "mongoose"
import { IPC } from "../pc/pc.interface"



export type ICart = {
    user:string,
    category:string,
    productName:Types.ObjectId | IPC,
    quantity?:number,
}


export type CartModel =Model<ICart,Record<string,unknown>>