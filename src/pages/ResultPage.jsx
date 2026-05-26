import { COLOR } from "../constants/theme";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import { SECTION2_QUESTION, SECTION3_QUESTION } from "../data/quizData";

export default function ResultPage({ s1Answers, s2Answer, s3Answer, onHome }) {
  const now = new Date();

  // 12시간제와 24시간제 입력을 모두 처리하기 위해 시간 계산
  const hours24 = now.getHours();
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;

  const year = String(now.getFullYear());
  const hour24Str = String(hours24);
  const hour12Str = String(hours12);
  const minute = String(now.getMinutes());

  let s1CorrectCount = 0;

  // 문제갯수의 수 만큼 i를 0부터 2까지 반복
  for (let i = 0; i < 3; i++) {
    // 사용자가 실수로 공백이나 불필요한 글자로 인해 시스템 오류가 생기지 않도록 데이터를 정제
    // 앞뒤 공백 제거, 숫자가 아닌 모든 텍스트 제거 후 순수 숫자만 추출
    // s1Answers[i]에서 값이 잘 입력되어 있으면 앞의 값을, 잘못 입력됐다면 뒤에 있는 값으로 처리
    // 잘 처리된 값은 그 뒤에 있는 trim()과 replace() 함수를 실행
    const userAnswer = (s1Answers[i] || "").trim().replace(/[^0-9]/g, "");

    if (i === 0 && userAnswer === year) s1CorrectCount++;
    if (i === 1 && (userAnswer === hour24Str || userAnswer === hour12Str))
      s1CorrectCount++;
    if (i === 2 && userAnswer === minute) s1CorrectCount++;
  }

  const s2CorrectCount = s2Answer === SECTION2_QUESTION.correctIndex ? 1 : 0;
  const s3CorrectCount = s3Answer === SECTION3_QUESTION.correctIndex ? 1 : 0;

  const totalCorrect = s1CorrectCount + s2CorrectCount + s3CorrectCount;
  const totalQuestions = 5;

  return (
    <div
      style={{
        width: 390,
        minHeight: "100vh",
        background: COLOR.bg,
        color: COLOR.textDark,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header title="훈련 결과" />

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "22px 20px 100px",
        }}
      >
        <div
          style={{
            background: COLOR.white,
            borderRadius: 16,
            border: `1.5px solid ${COLOR.border}`,
            textAlign: "center",
            padding: "40px 20px",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              marginBottom: 12,
              color: COLOR.textDark,
            }}
          >
            훈련을 모두 마쳤습니다!
          </div>

          <div
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: COLOR.btn,
              marginBottom: 16,
            }}
          >
            {totalCorrect} / {totalQuestions}
          </div>

          <div style={{ fontSize: 16, color: COLOR.textMid, lineHeight: 1.5 }}>
            수고많으셨습니다! 😊
          </div>
        </div>

        <button
          style={{
            width: "100%",
            background: COLOR.btn,
            color: COLOR.white,
            border: "none",
            borderRadius: 14,
            padding: "16px 0",
            fontSize: 18,
            fontWeight: 800,
            cursor: "pointer",
          }}
          onClick={onHome}
        >
          확인 (홈으로 가기)
        </button>
      </div>

      <NavBar onHome={onHome} />
    </div>
  );
}
