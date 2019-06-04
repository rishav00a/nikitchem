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