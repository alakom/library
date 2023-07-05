export interface BookProps{
    book: IBook,
};
export interface IClose{
    close: ()=>void,
};
export interface IBook{
    "id":number,
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