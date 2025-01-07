import Profile from "../components/Profile";
import CreateTaskBtn from "../components/CreateTaskBtn";
import CreateTaskForm from "../components/CreateTaskForm";

function Header({ onTaskAdd, profile }) {
  return (
    <header className="bg-light">
      <div
        className="container p-3 d-md-flex align-items-center justify-content-between"
        style={{ maxWidth: "100rem" }}
      >
        <Profile profileImage={profile.profileImage} profileName={profile.profileName} quote={profile.quote} />
        <CreateTaskBtn modalid="modal-create-task" />
        <CreateTaskForm onTaskAdd={onTaskAdd} modalid="modal-create-task" />
      </div>
    </header>
  );
}

export default Header;
