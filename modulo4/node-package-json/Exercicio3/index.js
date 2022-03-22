let listaDeTarefas = ["Assistir aula", "Arrumar a casa", "Lavar louças", "Praticar exercícios"]
const tarefa = process.argv[2]

const adicionarTarefa = () => {
    const novaTarefa = [...listaDeTarefas, tarefa]
    console.log("Lista de tarefas: ", novaTarefa)
}

adicionarTarefa()