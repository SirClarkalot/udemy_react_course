import { useRouter } from "next/router";

function SomethingImportantPage() {
  const router = useRouter();
  const newsId = router.query.newsId;
  return <h1>Something Important Page</h1>;
}

export default SomethingImportantPage;
