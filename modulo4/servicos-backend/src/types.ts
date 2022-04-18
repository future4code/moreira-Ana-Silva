export type NewAddress = {
   id: string | number,
   cep: string,
   street: string | undefined,
   number: string,
   complement: string,
   district: string | undefined,
   city: string | undefined,
   state: string | undefined,
}

export type Address = {
   street: string,
   district: string,
   city: string,
   state: string,
}