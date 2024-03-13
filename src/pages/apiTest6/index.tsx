import { useEffect, useState } from "react";
import axios from "axios";

interface posts {
  id: number;
  title: string;
  thumbnailUrl: string;
}

export default function ApiTest6Page() {
  const [posts, setPosts] = useState<posts[]>([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/photos",
    }).then((response) => setPosts(response.data));
  }, []);

  return (
    <ul>
      {posts.map((item) => (
        <li key={item.id}>
          <div>{item.title}</div>
          <div>
            <img src={item.thumbnailUrl} alt="" />
          </div>
        </li>
      ))}
    </ul>
  );
}
