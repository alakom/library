export interface BookProps{
    book: IBook,
};
export interface IClose{
    close: ()=>void,
};
export interface IBook{
    "id"?:number,
    "title":string,
    "author":string,
    "genre":string,
    "description":string,
    "image":string,
    "rating":
    {
        "avgRate":number,
        "count":number,
    }
};
export interface IGenre{
    "title":string,
};
export interface IUser{
        "id"?:number,
        "email": string,
        "username": string,
        "password": string,
        "name":{
            "firstname":string,
            "lastname":string,
        },
        "address":{
            "city":string,
            "street":string,
            "number":number,
            "zipcode":string,
            "geolocation":{
                "lat":string,
                "long":string,
            }
        },
        "phone":string,
};