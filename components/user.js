function User({ user }) {
  return (
    <div
      style={{
        backgroundColor: "#222",
        width: "250px",
        textAlign: "center",
        paddingBlock: "0.5em",
        marginBottom: "1em",
        borderRadius: "0.2em",
      }}
    >
      <h2>{user.name}</h2>
      <small>{user.email}</small>
    </div>
  );
}

export default User;
