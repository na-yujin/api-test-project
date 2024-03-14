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
    await networkRequest();
    return "유진";
  }

  async function getTodo() {
    await networkRequest();
    return ["청소하기", "밥먹기"];
  }

  async function getData() {
    const user = await getUser();
    console.log(user);
    const todo = await getTodo();
    console.log(todo);
  }
  getData();
}
