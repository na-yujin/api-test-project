// todo - Fetch API

export default function AsyncAwait3() {
  async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/user");
    const data = await response.json();
    console.log(data);
  }

  fetchData();
}
