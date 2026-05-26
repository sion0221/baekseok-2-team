import { useState } from "react";
import InputField from "../components/InputField";
import GenderSelect from "../components/GenderSelect";
import { ChevronDown } from "lucide-react";

export default function InfoInputPage({ onNext }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const [errorTexts, setErrorTexts] = useState({
    name: "",
    age: "",
    gender: "",
  });

  const [ageFocused, setAgeFocused] = useState(false);

  const AGE_OPTIONS = [
    "90대",
    "80대",
    "70대",
    "60대",
    "50대",
    "40대",
    "30대",
    "20대",
    "10대",
  ];

  const handleStart = () => {
    const newErrors = {
      name: !name.trim() ? "이름 내용을 입력해주세요" : "",
      age: !age ? "나이를 선택해주세요" : "",
      gender: !gender ? "성별 내용을 선택해주세요" : "",
    };

    setErrorTexts(newErrors);

    if (newErrors.name || newErrors.age || newErrors.gender) {
      return;
    }

    onNext({ name, age, gender });
  };

  return (
    <div
      style={{
        width: 390,
        minHeight: "100vh",
        background: "#CBF9DE",
        color: "#1C3D2E",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: "#B2F5CF",
          padding: "18px 20px",
          fontSize: 30,
          fontWeight: 700,
          borderBottom: "2px solid #A8E6C0",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          gap: 8,
          justifyContent: "center",
        }}
      >
        정보 입력해주세요
      </div>

      <div
        style={{
          padding: "22px 20px 100px",
        }}
      >
        <InputField
          label="이름"
          value={name}
          onChange={(val) => {
            setName(val);
            setErrorTexts((prev) => ({ ...prev, name: "" }));
          }}
          placeholder="홍길동"
          errorMessage={errorTexts.name}
        />

        <div style={{ marginBottom: 20 }}>
          <label
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "#1C3D2E",
              marginBottom: 7,
              display: "block",
            }}
          >
            나이
          </label>
          <div
            style={{
              position: "relative",
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <select
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                setErrorTexts((prev) => ({ ...prev, age: "" }));
              }}
              onFocus={() => setAgeFocused(true)}
              onBlur={() => setAgeFocused(false)}
              style={{
                width: "100%",
                borderRadius: 12,
                padding: "13px 15px",
                fontSize: 16,
                background: "#FFFFFF",
                color: "#1C3D2E",
                outline: "none",
                border: `2px solid ${ageFocused ? "#F4927A" : "#A8E6C0"}`,
                appearance: "none",
                WebkitAppearance: "none",
                cursor: "pointer",
                paddingRight: 40,
                marginBottom: errorTexts.age ? 6 : 20,
              }}
            >
              <option value="">선택해주세요</option>
              {AGE_OPTIONS.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
            <div
              style={{
                position: "absolute",
                right: 14,
                top: errorTexts.age ? "22px" : "25px",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ChevronDown size={20} color="#4A7A5A" />
            </div>
          </div>
          {errorTexts.age && (
            <div
              style={{
                color: "#E53935",
                fontSize: 16,
                fontWeight: 700,
                paddingLeft: 4,
              }}
            >
              ⚠️ {errorTexts.age}
            </div>
          )}
        </div>

        <div style={{ marginBottom: 20 }}>
          <GenderSelect
            value={gender}
            onChange={(val) => {
              setGender(val);
              setErrorTexts((prev) => ({ ...prev, gender: "" }));
            }}
          />
          {errorTexts.gender && (
            <div
              style={{
                color: "#E53935",
                fontSize: 16,
                fontWeight: 700,
                marginTop: -14,
                paddingLeft: 4,
              }}
            >
              ⚠️ {errorTexts.gender}
            </div>
          )}
        </div>

        <div style={{ height: 20 }} />

        <button
          style={{
            width: "100%",
            background: "#F4927A",
            color: "#FFFFFF",
            border: "none",
            borderRadius: 14,
            padding: "16px 0",
            fontSize: 18,
            fontWeight: 800,
            cursor: "pointer",
          }}
          onClick={handleStart}
        >
          시작하기
        </button>
      </div>
    </div>
  );
}
