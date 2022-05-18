import { GetProduct } from '../api/models/get-product';


export interface CountedProduct {
    product: GetProduct
    count: number
}
