import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventForm from "./EventForm";

const EditEventPage = () => {

  // const data = useLoaderData();
  const data = useRouteLoaderData('event-detail');
  console.log(data.event)
  return(

    <EventForm event={data.event}/>

  )
};

export default EditEventPage
