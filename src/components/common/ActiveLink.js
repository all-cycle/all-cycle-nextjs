import { useRouter } from "next/router";

function ActiveLink({ children, route }) {
  const router = useRouter();
  const style = {
    width: "5vw",
    height: "5vw",
    marginRight: 10,
    color: router.asPath === route ? "#3DD97E" : "#A69E9E",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(route);
  };

  return (
    <a href={route} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

export default ActiveLink;
