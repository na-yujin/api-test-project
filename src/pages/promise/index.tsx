import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;

export default function PromisePage() {
  const promise = new Promise((resolve, reject) => {
    console.log("비동기작업");
    setTimeout(() => {
      // const data = { name: "철수" };
      const data = null;
      if (data) {
        console.log("네트워크 요청 성공");
        resolve(data);
      } else {
        reject(new Error("네트워크 문제!"));
      }
    }, 1000);
  });
  setTimeout(() => {
    console.log(promise);
  }, 2000);

  return (
    <div>
      <div>ㅁㄴㅇ</div>
    </div>
  );
}
