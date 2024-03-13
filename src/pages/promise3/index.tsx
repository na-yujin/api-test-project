// todo - promise를 반환하는 비동기 함수 사용하기
export default function Promise3Page() {
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
  // then(), catch(), finally()
  getData()
    .then((data) => {
      const name = data.name;
      console.log(`${name}님 안녕하세요`);
    })
    .catch((error) => {
      console.log("멋지게 에러처리를 했어요");
    })
    .finally(() => {
      console.log("마무리작업");
    });

  return (
    <div>
      <div>asd</div>
    </div>
  );
}
