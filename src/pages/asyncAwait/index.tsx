// todo - Async
export default function AsyncAwaitPage() {
  function networkRequest() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("데이터를 받아왔습니다");
        // resolve("서버 1");
        resolve();
      }, 2000);
    });
  }
  async function getUser() {
    // const result = await networkRequest();
    // console.log(result);
    await networkRequest();
    await networkRequest();
    return "유진";
  }

  // function getUserPromise() {
  //   return networkRequest()
  //     .then(() => {
  //       return networkRequest();
  //     })
  //     .then(() => {
  //       return "유진";
  //     });
  // }

  const user = getUser();
  // const user = getUserPromise();
  user.then((name) => console.log(name));

  // async -> Promise 반환하는 비동기 함수로 변신한다!
}
