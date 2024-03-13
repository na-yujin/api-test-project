// todo - promise를 사용하는 web API  (-Fetch API-)

export default function Promise5Page() {
  //URL: http://jsonplaceholder.typicode.com/users
  fetch("http://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("에러가 발생했습니다");
    })
    .finally(() => {
      console.log("마무리 작업");
    });

  return (
    <div>
      <div>asd</div>
    </div>
  );
}
