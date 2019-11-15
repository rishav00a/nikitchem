export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token?: string;
}

export class MenuItems
{

    label: String;
    icon: String;
    url: String;
     slug: String;
}
export class TileItems {
    label: String;
    icon: String;
    icon_image?:String;
    url: String;
     slug: String;
}
export class UserProfile {
    
    username: string;
    first_name: string;
    last_name: string;
    profile_pic: string;
    role: string;
}

export class UserProfileInfo {
    
    profileinfo: UserProfile;
    menu_items: MenuItems[];
    tile_items: TileItems[];
}

export class BillEntryModel {
    ref_id:String;
}

export class ShopDetailModel{
    pk:string;
    image:string;
    shop_name:string;
    address:string;
    pin:string;
    city_name:string;
    owner1:string;
    owner2:string;
    last_order:string;
    phone:string;
    email:string;
    location:string;
    order_status:number;

}

export class Item{
    pk:number;
    description: string;
    image: string;
    minimum_quantity: number;
    price: number;
    title: string;
    quantity:number;
}