// todo - Promise Chaining
export default function Promise4Page() {
  function getData() {
    const promise = new Promise((resolve, reject) => {
      console.log("비동기작업");
      setTimeout(() => {
        const data = { name: "철수" };
        // const data = null;
        if (data) {
          console.log("네트워크 요청 성공");
          resolve(data);
        } else {
          reject(new Error("네트워크 문제!"));
        }
      }, 1000);
    });
    return promise;
  }

  // Promise chaining
  const promise = getData();
  promise
    .then((data) => {
      console.log(data);
      return "hello";
    })
    .then((data) => {
      console.log(data);
    });

  return (
    <div>
      <div>asd</div>
    </div>
  );
}
