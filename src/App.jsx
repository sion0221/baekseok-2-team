import { useState } from "react";
import InfoInputPage from "./pages/InfoInputPage";
import MainPage from "./pages/MainPage";
import TrainingPage from "./pages/TrainingPage";

export default function App() {
  const [page, setPage] = useState("info");
  const [user, setUser] = useState(null);

  // 메인 홈으로 이동
  const goHome = () => setPage("main");

  return (
    <>
      {/* 초기 인적 정보 입력 화면 */}
      {page === "info" && (
        <InfoInputPage
          onNext={(userData) => {
            setUser(userData);
            setPage("main");
          }}
        />
      )}

      {/* 메인 홈 대시보드 */}
      {page === "main" && (
        <MainPage user={user} onTraining={() => setPage("training")} />
      )}

      {/* 인지 훈련 퀴즈 및 결과 화면 */}
      {page === "training" && <TrainingPage onHome={goHome} />}
    </>
  );
}
