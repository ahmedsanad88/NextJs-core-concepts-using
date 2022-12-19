import { useRouter } from "next/router";
import { useState } from "react";

function Events({ events }) {
  const [sportsEvents, setSportsEvents] = useState(events);
  const router = useRouter();

  const fetchSportData = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await response.json();

    setSportsEvents(data);
    // Update the URL using the shallow routing
    router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <>
      <button onClick={fetchSportData}>ALl sport events</button>
      <h1>All Events Around</h1>
      {sportsEvents.map((event) => (
        <div key={event.id}>
          <h1>
            {event.id}. {event.title}
          </h1>
          <h2 style={{ color: "lightblue" }}>
            {event.category}/
            <span style={{ fontSize: "0.8rem", color: "#fa0" }}>
              {event.date}
            </span>
          </h2>
          <p>{event.description}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Events;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      events: data,
    },
  };
}
