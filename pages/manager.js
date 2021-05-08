import { useSelector } from "react-redux";

export default function Manager() {
  const managerState = useSelector((state) => state);

  return (
    <div>{JSON.stringify(managerState, null, 4)}</div>
  );
}
