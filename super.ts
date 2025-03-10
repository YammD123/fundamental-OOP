class NamaOrang{
    nama:string
    constructor(nama:string){
        this.nama = nama
    }
}

class Peliharaan extends NamaOrang{
    petName:string
    constructor(name:string,petName:string){
        super(name)
        this.petName = petName
    }
    Berjalanbersama(){
        console.log(`${this.nama} berjalan bersama dengan pet/peliharaan yang bernama ${this.petName}`)
    }
}

const patner = new Peliharaan("siam","fikyy")
console.log(typeof patner.Berjalanbersama)
// console.log(patner)
// patner.Berjalanbersama()




class PPLG extends NamaOrang{
    absen:number
    constructor(nama:string,absen:number){
        super(nama)
        this.absen = absen
    }
    absensi(){
        console.log(`${this.nama} absen ke ${this.absen}`)
    }
}

const pplg = new PPLG('Fikyy',12)

pplg.absensi()


console.log(pplg.nama)