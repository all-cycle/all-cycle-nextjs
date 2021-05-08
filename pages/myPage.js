import PropTypes from "prop-types";

import Layout from "../components/Layout/Layout";

// import connectDB from "../middleware/mongodb";

export default function MyPage({ user }) {
  console.log(user);

  return (
    <Layout>
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
