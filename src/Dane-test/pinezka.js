class Pinezka{
    id;
    pozycja = [];
    text;
    zalacznik;

    constructor(id, pozycja = [], text, zalacznik){
        this.id = id;
        this.pozycja = pozycja;
        this.text = text;
        this.zalacznik = zalacznik;
    }
}