import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

// import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly Reactive meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://seanypee24:UgKezCSsRGLGcRuk@cluster0.idkghhp.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  // need to return an object, with a props property that holds an object
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    // below revalidate will re pregenerate the page every ten seconds
    // updates the page after deployment
    revalidate: 1,
  };
}

// export async function getServerSideProps(context) {
//   // context gives you access to the request and response object
//   // with .req and .res
//   const req = context.req
//   const res  = context.res
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     },
//   }
// }

// Below function needs to be called 'getStaticProps'
// NextJs looks for this name, and executes it during the pre-rendering process
// Can be an async function
// This code will only execute during the build, never executes client side

export default HomePage;
