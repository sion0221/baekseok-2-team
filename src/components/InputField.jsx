import { COLOR } from "../constants/theme";

export default function InputField({
  label,
  value,
  onChange,
  placeholder,
  errorMessage,
}) {
  return (
    <div style={{ marginBottom: 20, display: "flex", flexDirection: "column" }}>
      <label
        style={{
          fontSize: 15,
          fontWeight: 700,
          color: COLOR.textDark,
          marginBottom: 7,
          display: "block",
        }}
      >
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          border: `2px solid ${COLOR.border}`,
          borderRadius: 12,
          padding: "13px 15px",
          fontSize: 16,
          background: COLOR.white,
          color: COLOR.textDark,
          outline: "none",
          marginBottom: errorMessage ? 6 : 0,
        }}
      />
      {errorMessage && (
        <div
          style={{
            color: COLOR.wrong,
            fontSize: 16,
            fontWeight: 700,
            paddingLeft: 4,
          }}
        >
          ⚠️ {errorMessage}
        </div>
      )}
    </div>
  );
}
