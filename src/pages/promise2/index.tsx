// todo - promise를 사용하는 비동기 함수 만들기
export default function Promise2Page() {
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

  const promise = getData();

  setTimeout(() => {
    console.log(promise);
  }, 2000);

  return (
    <div>
      <div>asd</div>
    </div>
  );
}
