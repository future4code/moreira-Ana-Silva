//EXERCÍCIO 2
type Users = {
   id: number
   nome: string,
   phone: number,
   email: string,
   website: string,
}

//EXERCÍCIO 5
type Posts = {
   id: number,
   title: string,
   body: string,
   userId: number,
}

//EXERCÍCIO 3
export const users: Users[] = [
   {
      id: 1,
      nome: "Leanne Graham",
      phone: 900000000,
      email: "sincere@gmail.com",
      website: "leanegraham.com.br"
   },
   {
      id: 2,
      nome: "Luana Santos",
      phone: 911111111,
      email: "lulu@gmail.com",
      website: "lusantos.com.br"
   },
   {
      id: 3,
      nome: "Jose Araujo",
      phone: 922222222,
      email: "zearaj@gmail.com",
      website: "araujosj.com.br"
   },
   {
      id: 4,
      nome: "Camilla Limao",
      phone: 933333333,
      email: "limaocami@gmail.com",
      website: "camilimao.com.br"
   },
   {
      id: 5,
      nome: "Pedro Martines",
      phone: 944444444,
      email: "martines@gmail.com",
      website: "opedromar.com.br"
   }
]

//EXERCÍCIO 6
//O array de posts foi criado fora do array de users por questão de legibilidade e organização.
export const posts: Posts[] = [
      {
         id: 1,
         title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
         body: 'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto',
         userId: 1,
      },
      {
         id: 2,
         title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
         body: 'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto',
         userId: 1,
      },
      {
         id: 3,
         title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
         body: 'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto',
         userId: 1,
      },
      {
         id: 4,
         title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
         body: 'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto',
         userId: 2,
      },
      {
         id: 5,
         title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
         body: 'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto',
         userId: 2,
      },
      {
         id: 6,
         title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
         body: 'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto',
         userId: 2,
      },
      {
         id: 7,
         title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
         body: 'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto',
         userId: 3,
      },      {
         id: 8,
         title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
         body: 'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto',
         userId: 3,
      },      {
         id: 9,
         title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
         body: 'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto',
         userId: 3,
      },
      {
         id: 10,
         title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
         body: 'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto',
         userId: 4,
      },      {
         id: 11,
         title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
         body: 'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto',
         userId: 4,
      },      {
         id: 12,
         title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
         body: 'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto',
         userId: 4,
      },
      {
         id: 13,
         title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
         body: 'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto',
         userId: 5,
      },      {
         id: 14,
         title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
         body: 'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto',
         userId: 5,
      },      {
         id: 15,
         title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
         body: 'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto',
         userId: 5,
      },

]