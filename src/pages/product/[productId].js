import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { productId } = router.query;

  return <p>Product: {productId}</p>;
};

export default Post;
