class hewan5{
    nama:string = ""
    kaki:number = 0

    bernafas(){
        console.log(`hewan ${this.nama} yang berkaki ${this.kaki} sedang melakukan pernafasan`)
    }
}

class Burung extends hewan5{
    warna:string = "merah"
}

const burung = new Burung()
burung.nama = "gereja"
burung.kaki = 2
burung.warna='kuning'
console.log(burung)

