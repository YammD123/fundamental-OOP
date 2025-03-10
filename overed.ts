class Hewan6{
    name:string=''
    bernafas(){
        console.log(`${this.name} sedang bernafas`);
    }
}

class Kodok extends Hewan6{
    bernafas(){
        console.log(`${this.name}  sedang bernafas dengan paru`);
    }
}

const kodok = new Kodok()
kodok.name = "kodok"
kodok.bernafas()


class Kewan{
    name:string
    constructor(name:string){
        this.name=name
    }
    bernafas(){
        console.log(`${this.name} sedang bernafas`);
    }
}

class kucing extends Kewan {
    bernafas(){
        console.log(`${this.name} sedang bernafas dengan paru`);
    }
}

const kucing1 = new kucing("kucing")
kucing1.bernafas()