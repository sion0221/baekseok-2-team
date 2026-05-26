import { COLOR } from "../constants/theme";

export default function GenderSelect({ value, onChange }) {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <button
        onClick={() => onChange("남자")}
        style={{
          flex: 1,
          padding: "13px 0",
          borderRadius: 12,
          border:
            value === "남자"
              ? `2.5px solid ${COLOR.btn}`
              : `2px solid ${COLOR.border}`,
          background: value === "남자" ? "#FFF3EF" : COLOR.white,
          color: value === "남자" ? COLOR.btn : COLOR.textMid,
          fontSize: 16,
          fontWeight: value === "남자" ? 800 : 600,
          cursor: "pointer",
        }}
      >
        남자
      </button>

      <button
        onClick={() => onChange("여자")}
        style={{
          flex: 1,
          padding: "13px 0",
          borderRadius: 12,
          border:
            value === "여자"
              ? `2.5px solid ${COLOR.btn}`
              : `2px solid ${COLOR.border}`,
          background: value === "여자" ? "#FFF3EF" : COLOR.white,
          color: value === "여자" ? COLOR.btn : COLOR.textMid,
          fontSize: 16,
          fontWeight: value === "여자" ? 800 : 600,
          cursor: "pointer",
        }}
      >
        여자
      </button>
    </div>
  );
}
