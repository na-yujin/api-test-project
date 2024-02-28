// fetch
// axios

import { useEffect, useState } from "react";

interface Todo {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function ApiTest5Page() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const fetchData = () => {
    fetch("https://koreanjson.com/users")
      .then((response) => response.json())
      .then((data) => setTodoList(data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    fetch("https://koreanjson.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        done,
      }),
    }).then(() => fetchData());
  };

  return (
    <div>
      <h1>todo list</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="text" className="text-black" />
        <input name="done" type="checkbox" />
        <input type="submit" value="추가" />
      </form>
      {todoList?.map((todo) => (
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
