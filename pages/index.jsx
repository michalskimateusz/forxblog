import Head from "next/head";
import { Categories, PostCard, PostWidget } from "../components";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>ForX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostCard />
      <PostWidget />
      <Categories />
    </div>
  );
};

export default Home;
