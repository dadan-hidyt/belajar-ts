import connect from "./mysql_lib";

function getAgenda(){
    return new Promise((resolve : any,rejected : any)=>{
        connect.query("SELECT * FROM agenda",function(err : any,result : Object,fields : Object){
            if(err) {
                rejected(err);
            }else{
                resolve(result);
            }
        });
    })
}

getAgenda().then(function(value : unknown){
    console.table(value);
}).catch(function(error){
console.error(error.message);

})
class Golder{

}

class Gabriel {


}

const golder : Golder = new Gabriel;
console.log(golder)
let menu: readonly String[] = [
    "HOME",
    "USER",
    "LOG"
];

let tupel: [nama: String, nikah: Boolean, anak: Number, kb: Number] = ["dadna", true, 10, 20];
let [nama, nikah, anak, kb] = tupel;
console.log(nama);










const biodata : {
    nama : String,
    umur : Number,
    menikah : Boolean,
} = {
    nama : "DADAB",
    umur : 10,
    menikah : false,
}

console.table(biodata);

enum UserType{
    Premium,
    Basic,
    Free,
};






