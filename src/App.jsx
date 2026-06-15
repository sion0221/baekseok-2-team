import { useState } from "react";
import InfoInputPage from "./pages/InfoInputPage";
import MainPage from "./pages/MainPage";
import TrainingPage from "./pages/TrainingPage";

export default function App() {
  const [page, setPage] = useState("info");
  const [user, setUser] = useState(null);

  const goHome = () => setPage("main");

  return (
    <>
      {page === "info" && (
        <InfoInputPage
          onNext={(userData) => {
            setUser(userData);
            setPage("main");
          }}
        />
      )}

      {page === "main" && (
        <MainPage user={user} onTraining={() => setPage("training")} />
      )}

      {page === "training" && <TrainingPage onHome={goHome} />}
    </>
  );
}
