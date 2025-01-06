import guestimage from "../assets/guest.jpg";
const name = "Renin";
const quote = "Your daily adventure starts now";
function Profile() {
  return (
    <div className="d-flex align-items-center gap-3">
      <div>
        <img src={guestimage} alt="Profile Pic" className="rounded-circle" style={{ width: "5rem" }} />
      </div>
      <div>
        <p className="fw-bold mb-1">
          Hi, {name} <span className="fs-4">👋</span>
        </p>
        <p className="text-muted  mb-1 ">{quote}</p>
      </div>
    </div>
  );
}

export default Profile;
