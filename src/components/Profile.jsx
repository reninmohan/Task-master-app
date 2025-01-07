import guestimage from "../assets/guest.jpg";
function Profile({ profileName, quote, profileImage }) {
  return (
    <div className="d-flex align-items-center gap-3">
      <div style={{ width: "5rem" }} className="rounded-circle">
        <img
          src={profileImage ? profileImage : guestimage}
          alt="Profile Pic"
          className="rounded-circle"
          style={{ width: "5rem" }}
        />
      </div>
      <div>
        <p className="fw-bold mb-1">
          Hi, {profileName ? profileName : "Guest"} <span className="fs-4">👋</span>
        </p>
        <p className="text-muted  mb-1 ">{quote ? quote : "Your daily adventure starts now"}</p>
      </div>
    </div>
  );
}

export default Profile;
