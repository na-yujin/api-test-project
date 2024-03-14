// todo - Async
export default function AsyncAwait2Page() {
  function networkRequest() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }
  async function getUser() {
    throw new Error("에러가 발생했어요!");
    await networkRequest();
    return "유진";
  }

  async function getTodo() {
    await networkRequest();
    return ["청소하기", "밥먹기"];
  }

  async function getData() {
    let user;
    try {
      user = await getUser();
    } catch (error) {
      console.log(error.message);
      user = "익명";
    }
    const todo = await getTodo();
    console.log(`${user}님 ${todo}를 하세요`);
  }

  getData();
}
