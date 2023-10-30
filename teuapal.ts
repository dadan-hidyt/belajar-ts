class Data{
    constructor(private nama : String, private user : Number) {

    }

    /**
     * setUser
     */
    public setUser(user:Number) {
        this.user = user;
    }
}

let user : Data = new Data("DADAN",20);

console.log(user.setUser(10));
console.log(user);
