import { useSelector } from "react-redux";
import Link from "next/link";

export default function Manager() {
  // const managerState = useSelector((state) => state);

  return (
    // <div>{JSON.stringify(managerState, null, 4)}</div>
    <Link href="/product" passHref>
      <a href="replace">제품 업데이트</a>
    </Link>
  );
}
