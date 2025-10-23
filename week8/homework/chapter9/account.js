export class Account{
    constructor(name, balance=0){
        this.name = name;
        this.balance = balance;
    }
    credit(amount) {
        this.balance += amount;
    }
    describe() {
        return `owner: ${this.name}, balance: ${this.balance}`;
    }
}