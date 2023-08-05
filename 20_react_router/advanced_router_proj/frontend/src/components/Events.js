import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {

  const data = useLoaderData();
  const events = data.events;
  // console.log(data)
  // if (data.isError) {
  //   return <p>{data.message}</p>
  // }

  return (
    < EventsList events={events} />
  );
}

export default EventsPage;

export async function loader() {
  // cant use hooks like useState in a loader function because they are only available inside the component function
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'could not fetch events' }), {
      status: 500,
    });
    // return json(
    //   { message: 'Could not fetch events.' },
    //   {
    //     status: 500,
    //   }
    // );
  } else {
    return response;
  }
}
