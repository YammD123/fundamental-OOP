class Hewan3{
    nama:string = "";
    kaki:number = 0;
    mamalia:boolean = false;

    bernafas(){
        console.log(`${this.nama} bernafas`);
    }
}

const hewan3 = new Hewan3();
console.log(typeof hewan3.bernafas)
hewan3.nama = "Kodok";
hewan3.kaki = 4;
console.log(hewan3)
hewan3.bernafas();