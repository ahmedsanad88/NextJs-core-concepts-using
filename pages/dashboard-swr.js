import useSWR from "swr";

// Fetcher function that gone handle the data fetching and pass it to the hook.
const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};

function DashboardSWR() {
  // Using the SWR hook to handle data.
  const { data, error } = useSWR("dashboard", fetcher);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  return (
    <div>
      <h2>SWR Dashboard</h2>
      <h2>Posts - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following - {data.following}</h2>
    </div>
  );
}

export default DashboardSWR;
