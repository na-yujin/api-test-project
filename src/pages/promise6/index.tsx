// todo - 온라인 쇼핑몰 시나리오 비동기 콜백
export default function Promise6Page() {
  // 1. 로그인
  // function login(username, callback) {
  //   setTimeout(() => {
  //     callback(username);
  //   }, 1000);
  // }
  function login(username: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username) {
          resolve(username);
        } else {
          reject(new Error("아이디를 입력해주세요"));
        }
      }, 1000);
    });
  }

  // login("유진")
  //   .then((username) => {
  //     console.log(`${username}님 안녕하세요`);
  //   })
  //   .catch((error) => console.log(error));

  // 2. 장바구니에 넣기
  // function addToCart(product, callback) {
  //   setTimeout(() => {
  //     callback(product);
  //   }, 1000);
  // }
  function addToCart(product: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (product) {
          resolve(product);
        } else {
          reject(new Error("장바구니에 넣을 상품이 없어요"));
        }
      }, 1000);
    });
  }

  // addToCart("감자").then((product) => {
  //   console.log(`${product}를 장바구니에 넣었습니다`);
  // });

  // 3. 결제하기
  // function makePayment(cardNumber, product, callback) {
  //   setTimeout(() => {
  //     callback(cardNumber, product);
  //   }, 1000);
  // }
  function makePayment(cardNumber: string, product: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (cardNumber.length !== 16) {
          reject(new Error("잘못된카드번호입니다"));
          return;
        }

        if (!product) {
          reject(new Error("결제할 상품을 넣어주세요"));
          return;
        }
        resolve(product);
      }, 1000);
    });
  }

  // makePayment("1234123412341234", "감자")
  //   .then((product) => {
  //     console.log(`${product}를 결제했습니다`);
  //   })
  //   .catch((error) => console.log(error));

  login("유진")
    .catch(() => "익명")
    .then((username) => addToCart(""))
    .catch(() => "옥수수")
    .then((product) => makePayment("1234123412341234", product))
    .then(console.log)
    .catch((error) => console.log(error.message))
    .finally(() => console.log("마무리 작업"));

  return <div>asd</div>;
}
