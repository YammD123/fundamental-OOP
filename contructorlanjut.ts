class Hewan4{
    nama:string;
    kaki:number;
    constructor(nama:string,kaki:number){
        this.nama=nama
        this.kaki=kaki
    }
    bernafas(){
        console.log(`hewan ${this.nama} yang berkaki ${this.kaki} sedang melakukan pernafasan`)
    }
    
}

class Sapi extends Hewan4{
    jenis:string
    constructor(jenis:string,kaki:number,nama:string){
        super(nama,kaki)
        this.jenis=jenis
    }
}

const sapi = new Sapi("sapi",4,"ayam")
console.log(sapi)
sapi.bernafas()




// const Katak = new Hewan4("kodok",4)
// console.log(typeof Hewan4)
// console.log(typeof Katak.bernafas)
// console.log(Katak)
// Katak.bernafas()


// class Perjumlahan{
//     angka1:number

//     constructor(angka1:number){
//         this.angka1=angka1
//     }
//     forloop(){
//         for(let i = this.angka1; i <= 10; i++){
//             console.log(i)
//         }
//     }
// }

// const jumlah = new Perjumlahan(1)
// const jumlah2 = new Perjumlahan(5)
// jumlah.forloop()
// jumlah2.forloop()



// class Hewan41{
//     constructor(public nama:string,public kaki:number){}
// }

// const katak = new Hewan41("ayam",2)
// console.log(katak)
