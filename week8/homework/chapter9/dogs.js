export class Dog{
    constructor(name, species, size){
        this.name = name;
        this.species = species;
        this.size = size;
    }

    bark(){
        if(this.size > 60){
            return "Grrr! Grrr!";
        } else {
            return "Woof! Woof!";
        }
    }
}