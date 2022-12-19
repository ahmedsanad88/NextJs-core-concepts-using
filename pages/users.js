import User from "../components/user";

function UserList({ users }) {
  return (
    <>
      <h1>List of Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))}
    </>
  );
}

export default UserList;

// Passing the async function to fetch the data and send it back as a props.

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  // console.log(data);
  // we must return an object which contain props key that accept an object that can have any key value like below.

  return {
    props: {
      users: data,
    },
  };
}
