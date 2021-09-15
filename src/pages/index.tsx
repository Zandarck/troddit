import axios from "axios";
import Head from "next/head";

import Feed from "../components/Feed";
import NavBar from "../components/NavBar";

export const index = ({ query }) => {
  return (
    <div>
      <Head>
        <title>Next-Reddit</title>
      </Head>
      <NavBar />
      <Feed query={query} />
    </div>
  );
};
index.getInitialProps = ({ query }) => {
  if (Object.keys(query).length === 0) {
    query = {
      frontsort: "hot",
    };
  }
  return { query };
};

export default index;
