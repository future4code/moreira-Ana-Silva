
//EXERCÍCIO 02
type Affair = {
    userId: number | string,
    id: number | string,
    title: string,
    completed: boolean
}

//EXERCÍCIO 03
export const affair: Affair[] = [
    {
        userId: 1,
        id: 1,
        title: "Assistir aula",
        completed: true
      },
      {
        userId: 1,
        id: 2,
        title: "Limpar a casa",
        completed: false
      },
      {
        userId: 2,
        id: 3,
        title: "Dar banho no cachorro",
        completed: true
      },
      {
        userId: 2,
        id: 4,
        title: "Praticar atividade física",
        completed: false
      },
      {
        userId: 3,
        id: 5,
        title: "Lavar roupa",
        completed: false
      },
      {
        userId: 3,
        id: 6,
        title: "Assistir TV",
        completed: true
      },
      {
        userId: 4,
        id: 7,
        title: "Colocar roupas no varal",
        completed: false
      },
      {
        userId: 4,
        id: 8,
        title: "Assistir série",
        completed: false
      },
      {
        userId: 5,
        id: 9,
        title: "Ir para o trabalho",
        completed: true
      },
      {
        userId: 5,
        id: 10,
        title: "Organizar o guarda-roupa",
        completed: false
      },
]