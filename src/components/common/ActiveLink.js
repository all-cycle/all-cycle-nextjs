import { useRouter } from "next/router";

function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = {
    width: "5vw",
    height: "5vw",
    marginRight: 10,
    color: router.asPath === href ? "#3DD97E" : "#A69E9E",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

export default ActiveLink;
