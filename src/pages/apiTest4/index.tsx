import { useState } from "react";
import axios from "axios";

export default function ApiTest4Page() {
  const [catUrl, setCatUrl] = useState("");

  const handleClick = async () => {
    try {
      const result = await axios.get("https://cataas.com/cat");
      console.log(result);
      console.log(result.data);
      if (result.data && result.data.id) {
        const imageUrl = `https://cataas.com/cat/${result.data.id}`;
        setCatUrl(imageUrl);
      } else {
        console.error("Invalid API response format");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>버튼</button>
      {catUrl && <img src={catUrl} alt="Cat" className="w-[500px] h-[200px]" />}
    </div>
  );
}
