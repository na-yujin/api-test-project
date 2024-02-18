import axios from "axios";
import { useState } from "react";

export default function ApiTestPage() {
  const [testTitle, setTitle] = useState<string>("title");
  const handleClickAsync = () => {
    fetch("https://koreanjson.com/posts/1")
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  };
  const handleClickSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result); // 제대로된 결과
    console.log(result.data.title);
    setTitle(result.data.title);
  };
  return (
    <div className="flex flex-col">
      <button onClick={handleClickAsync}>REST-API(비동기) 요청하기</button>
      <button onClick={handleClickSync}>REST-API(동기) 요청하기</button>
      <div className="mx-auto">{testTitle}</div>
    </div>
  );
}
