import { Transaction } from './Transaction'

//EXERCÍCIO 01

//A) Para determinar as ações que devem ser executadas ao criar 
//uma classe o mesmo deve ser chamado com a função constructor.

//B) A mensagem aparece apenas uma vez, pois depende da quantidade 
//de vezes que o construtor for chamado, no caso, apenas uma.

//C) Através de um método público utilizando a keywords "public" que  
//precisa retornar as propriedades que iremos acessar.

export class UserAccount {
   private cpf: string;
   private name: string;
   private age: number;
   private balance: number = 0;
   private transactions: Transaction[] = [];

   constructor(
      cpf: string,
      name: string,
      age: number,
   ) {
      console.log("Chamando o construtor da classe UserAccount")
      this.cpf = cpf;
      this.name = name;
      this.age = age;
   }

   public getCpf(): string {
      return this.cpf
   }

   public getName(): string {
      return this.name
   }

   public getAge(): number {
      return this.age
   }

   public getBalance(): number {
      return this.balance
   }

   public getTransactions(): Transaction[] {
      return this.transactions
   }

   public setTransaction(transaction: Transaction) {
      (this.transactions).push(transaction)
   }
}