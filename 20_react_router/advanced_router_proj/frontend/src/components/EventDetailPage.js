import { useLoaderData, useRouteLoaderData, json } from "react-router-dom"
import EventItem from "./EventItem";

const EventDetailPage = () => {

  // const data = useLoaderData();
  const data = useRouteLoaderData('event-detail')
  return (
    <EventItem event={data.event}/>
  )
}

export default EventDetailPage

export async function loader({request, params}) {
  const id = params.id
  // console.log(id)
  // return fetch('http://localhost:8080/events/' + id);
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'could not fetch selected event'}), {
      status: 500
    });
    // throw json({message: 'could not fetch detail for selected event'}, {
    //   status: 500
    // })
  } else {
    return response
  }
}
