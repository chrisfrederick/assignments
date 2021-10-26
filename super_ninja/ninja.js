class Ninja{
    constructor(name, health, speed = 3, strength = 3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }

    sayName(){
        console.log(`Ninja Name: ${this.name}`)
    }

    showStats(){
        console.log(`Name: ${this.name}`)
        console.log(`Health: ${this.health}`)
        console.log(`Speed: ${this.speed}`)
        console.log(`Strength: ${this.strength}`)
    }

    drinkSake(){
        this.health+=10
        console.log("Your Drank Some Sake!")
        console.log(`Health Increased to ${this.health}`)
    }

    

}
module.exports = {
    Ninja: Ninja
 }


var chris = new Ninja("Chris", 100);

console.log(chris);
console.log(chris.sayName());
console.log(chris.showStats());
console.log(chris.drinkSake());