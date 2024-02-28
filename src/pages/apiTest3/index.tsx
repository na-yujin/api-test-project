import { useState } from "react";
import axios from "axios";

export default function ApiTest3Page() {
  const [testTitle, setTestTitle] = useState<object | null>(null); // 객체 타입으로 상태 변경
  const [error, setError] = useState<string | null>(null); // 에러 상태 추가

  const handleClick = async () => {
    try {
      const result = await axios.get(
        "https://ecos.bok.or.kr/api/StatisticTableList/sample/json/kr/1/10/102Y004",
      );
      console.log(result);
      console.log(result.data);
      setTestTitle(result.data);
    } catch (error) {
      setError("오류났음");
    }
  };

  return (
    <div>
      {/*상세주소/오픈API인증키/json/kr/1/10/통계표코드/주기/콩계항목1코드*/}
      <button onClick={handleClick}>금리가 궁금해?</button>
      <div>{testTitle && JSON.stringify(testTitle)}</div>
      {/* 객체를 JSON 문자열로 변환하여 표시 */}
      {error && <div>{error}</div>}
    </div>
  );
}
