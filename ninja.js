class Ninja{
    constructor(name,health,speed=3,strength=3){
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.strength=strength;
    }
    sayName(){
        console.log(`Ninja's name is ${this.name}`);


    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }
    drinkSake(){
        this.health +=10;
       console.log(`Health increased by 10 points! Current health: ${this.health}`);

    }
    



}
class Sensei extends Ninja{
    constructor(name){
        super(name,200,10,10);
        this.wisdom=10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Wisdom is the key to success.");

    }
}
console.log("Ninja class loaded successfully.");
let ninja1 = new Ninja("Naruto", 100);
ninja1.sayName();       
ninja1.showStats();    
ninja1.drinkSake();     
ninja1.showStats();     
let sensi1= new Sensei("coockie");
sensi1.speakWisdom();
sensi1.showStats();
console.log("Sensei class loaded successfully.");