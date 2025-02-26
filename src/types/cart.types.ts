export interface ICart {
    id: string;
    createdAt: string;
    updatedAt: string;

    items: ICartItem[];
}

export interface ICartItem {
    id: string;
    productId: string;
    quantity: number;
}

export interface ISimpleCartItem {

}