export interface DaoInterface{
    tabName: string;

    insert(object:any):boolean;
    update(object:any):boolean;
    delete(id:number):boolean;
    find(id:number):any;
    findAll():[any];
}