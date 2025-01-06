function SettingButton({ children }) {
  return (
    <button className="btn d-flex align-items-center justify-content-between gap-1" style={{ backgroundColor: "#D9D9D9", fontWeight: "bold" }}>
      {children}
    </button>
  );
}

export default SettingButton;
