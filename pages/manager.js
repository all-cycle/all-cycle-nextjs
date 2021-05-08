import { useSelector } from "react-redux";

export default function Manager() {
  const state = useSelector((state) => state);

  return (
    <div>{JSON.stringify(state, null, 4)}</div>
  );
}
