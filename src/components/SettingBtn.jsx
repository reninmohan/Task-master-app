import { FaCog } from "react-icons/fa";
function SettingBtn({ onToggleSetting }) {
  return (
    <button
      className="btn d-flex align-items-center justify-content-between gap-1"
      style={{ backgroundColor: "#D9D9D9", fontWeight: "bold" }}
      onClick={onToggleSetting}
    >
      <FaCog />
      Settings
    </button>
  );
}

export default SettingBtn;
