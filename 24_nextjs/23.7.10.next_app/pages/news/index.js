// our-domain.com/news

import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <Link href='/news/Nextjs-is-a-great-framework'>
          <li>NextJs is a great framework</li>
        </Link>
        <li>Another thing...</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
