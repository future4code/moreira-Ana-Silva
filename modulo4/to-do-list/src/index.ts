import express, { Express, Request, Response } from "express";
import connection from "./connection";
import cors from "cors";
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());

// 1. CRIAR USUÁRIO
const createUser = async (name: string, nickname: string, email: string): Promise<any> => {
  await connection("User")
    .insert({
      id: Date.now(),
      name: name,
      nickname: nickname,
      email: email
    })
};

app.post("/user", async (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const { name, nickname, email } = req.body

    if (!name || !nickname || !email) {
      errorCode = 422
      throw new Error("All fields must be filled!")

    } else {
      await createUser(name, nickname, email);
      res.status(201).send("User created successfully!")
    }

  } catch (error: any) {
    if (res.status(errorCode).send({ message: error.message })) {
      res.status(errorCode).send({ message: error.message })
    } else {
      res.status(500).send("A server error has occurred!")
    }
  }
})

// 2. PEGAR USUÁRIO PELO ID
app.get("/user/:id", async (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const id = req.params.id
    const user = await connection("User").where({ id: id });

    const nameById = user.map((user) => {
      return { id: user.id, name: user.name };
    });

    if (user.length === 0) {
      errorCode = 404
      throw new Error("User not found!")

    } else {
      res.status(200).send(nameById)

    };

  } catch (error: any) {
    if (res.status(errorCode).send({ message: error.message })) {
      res.status(errorCode).send({ message: error.message })
    } else {
      res.status(500).send("A server error has occurred!")
    }
  }
});

// 3. EDITAR USUÁRIO
const editeUser = async (id: string, name: string, nickname: string): Promise<any> => {
  await connection("User")
    .update({
      name,
      nickname
    })
    .where({ id: id })
};

app.put("/user/edit/:id", async (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const id = req.params.id
    const { name, nickname } = req.body

    if (!id || !name || !nickname) {
      errorCode = 422
      throw new Error("All fields must be filled!")

    } else {
      await editeUser(id, name, nickname)
      res.status(200).send("User successfully edited!")
    }

  } catch (error: any) {
    if (res.status(errorCode).send({ message: error.message })) {
      res.status(errorCode).send({ message: error.message })
    } else {
      res.status(500).send("A server error has occurred!")
    }
  }
});

// 4. CRIAR TAREFA
const createTask = async (title: string, description: string, limitDate: Date, creatorUserId: string): Promise<any> => {
  await connection("User")
    .insert({
      id: Date.now().toString(),
      title: title,
      description: description,
      limit_date: limitDate,
      creator_id: creatorUserId
    });
};

app.post("/task", async (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const { title, description, limitDate, creatorUserId } = req.body
    console.log(new Date(limitDate))
    const date = new Date(limitDate);

    if (!title || !description || !limitDate || !creatorUserId) {
      errorCode = 422
      throw new Error("All fields must be filled!")

    } else {
      await createTask(title, description, date, creatorUserId)
      res.status(201).send("Task created successfully!")
    }

  } catch (error: any) {
    if (res.status(errorCode).send({ message: error.message })) {
      res.status(errorCode).send({ message: error.message })
    } else {
      res.status(500).send("A server error has occurred!")
    }
  }
});

// 5. PEGAR TAREFA PELO ID
app.get("/task/:id", async (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const id = req.params.id
    const task = await connection("Task").join('User', 'Task.creator_id', '=', 'User.id').where({ 'Task.id': id });

    if (task.length === 0) {
      errorCode = 404
      throw new Error("User not found!")

    } else {
      const surveyTask = task.map((task) => {
        return {
          taskId: task.id,
          title: task.title,
          description: task.description,
          limitDate: task.limit_date.toLocaleDateString('pt-br'),
          status: task.status,
          creatorUserId: task.creator_id,
          creatorUserNickname: task.nickname
        }
      });

      res.status(200).send(surveyTask);
    }

  } catch (error: any) {
    if (res.status(errorCode).send({ message: error.message })) {
      res.status(errorCode).send({ message: error.message })
    } else {
      res.status(500).send("A server error has occurred!")
    }
  }
});

// 6. PEGAR TODOS OS USUÁRIOS
app.get("/users", async (req: Request, res: Response): Promise<any> => {
  try {
    const allTasks = await connection("User")

    res.status(200).send(allTasks)

  } catch (error: any) {
    res.status(500).send("A server error has occurred!")
  }
});

// 7. PEGAR TAREFAS CRIADAS POR UM USUÁRIO
app.get("/task", async (req: Request, res: Response): Promise<any> => {
  let errorCode: number = 400
  try {
    const UserId = req.query.creatorUserId

    const task = await connection("Task")
      .select("Task.*", "User.nickname")
      .join('User', 'Task.creator_id', 'User.id')
      .where({ 'User.id': UserId });

    if (!UserId) {
      throw new Error("It is necessary to inform the user!")

    } else {
      const surveyTask = task.map((task) => {
        return {
          taskId: task.id,
          title: task.title,
          description: task.description,
          limitDate: task.limit_date.toLocaleDateString('pt-br'),
          creatorUserId: task.creator_id,
          status: task.status,
          creatorUserNickname: task.nickname
        }
      })
      res.status(200).send(surveyTask);
    }

  } catch (error: any) {
    if (res.status(errorCode).send({ message: error.message })) {
      res.status(errorCode).send({ message: error.message })
    } else {
      res.status(500).send("A server error has occurred!")
    }
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app