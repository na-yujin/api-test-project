// fetch
// axios

import { useEffect, useState } from "react";
import axios from "axios";

interface Todo {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const SERVER_URL = "https://koreanjson.com/users";
export default function ApiTest5_1Page() {
  const [todoList1, setTodoList1] = useState<Todo[]>([]);

  const fetchData = async () => {
    const response = await axios.get(SERVER_URL);
    setTodoList1(response.data);
    // axios.get("https://koreanjson.com/users").then((response) => setTodoList1(response.data))
    // fetch("https://koreanjson.com/users")
    //   .then((response) => response.json())
    //   .then((data) => setTodoList1(data))
    //   .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    await axios.post(SERVER_URL, { text, done });
    fetchData();
    // fetch("https://koreanjson.com/users", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     text,
    //     done,
    //   }),
    // }).then(() => fetchData());
  };

  return (
    <div>
      <h1>todo list</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="text" className="text-black" />
        <input name="done" type="checkbox" />
        <input type="submit" value="추가" />
      </form>
      {todoList1?.map((todo) => (
        <div key={todo.id} className="flex gap-[10px]">
          <div>{todo.id}</div>
          <div>{todo.name}</div>
          <div>{todo.email}</div>
          <div>{todo.phone}</div>
        </div>
      ))}
    </div>
  );
}
