var {Ninja} = require("./ninja")
class Sensei extends Ninja{
    constructor(name, health, speed, strength, wisdom = 10){
        super(name, health, speed, strength)
        this.wisdom = wisdom
    }

    speakWisdom(){
        console.log(`Master ${this.name} says: "What one programmer can do in one month, two progrmaers can do in two months."`)
    }



}


const superSensi = new Sensei("Master Spliter", 100);
superSensi.speakWisdom();

superSensi.showStats();
