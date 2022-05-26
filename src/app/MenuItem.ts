export class MenuItem {
    item: string;
    category: string;
    price: number;

    constructor(item: string, category: string, price: number){
        this.item=item;
        this.category=category;
        this.price=price;
    }
}