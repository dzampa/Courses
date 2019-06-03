export class Person {

    private name: string

    constructor(name: string){
        this.name = name
    }

    public Show(age: number): void{
        console.log(`${this.name} have ${age}`)
    }

    public toString():string{
        return `..... ${this.name}`;
    }
}