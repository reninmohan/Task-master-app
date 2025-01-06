function CreateTaskBtn({ modalid }) {
  return (
    <>
      <button
        className="btn btn-primary create-task-btn"
        type="button"
        data-bs-toggle="modal"
        data-bs-target={`#${modalid}`}
        style={{
          minWidth: "10rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          fontWeight: "500",
          borderRadius: "1rem",
          fontSize: "1.1rem",
        }}
      >
        + Create New
      </button>
    </>
  );
}

export default CreateTaskBtn;
