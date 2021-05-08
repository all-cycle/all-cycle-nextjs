import PropTypes from "prop-types";

import { Layout, Header } from "@/components";

export default function MyPage({ user }) {
  console.log(user);

  return (
    <Layout>
      <Header />
      <div>My Page</div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const data = { name: "user5" };
  let response = await fetch("http://localhost:3000/api/user", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  response = await response.json();

  if (response.result === "ok") {
    return {
      props: { user: response.data },
    };
  }

  return {
    props: { user: response.error },
  };
}

MyPage.propTypes = {
  user: PropTypes.any.isRequired,
};
