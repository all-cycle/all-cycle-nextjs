/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <Link href="/" passHref>
        <a>HOME</a>
      </Link>
      <Link href="/product" passHref>
        <a>PRODUCT</a>
      </Link>
      <Link href="/myPage" passHref>
        <a>MY PAGE</a>
      </Link>
      <Link href="/manager" passHref>
        <a>MANAGER</a>
      </Link>
      <Link href="/webLetter" passHref>
        <a>LETTER</a>
      </Link>
    </div>
  );
}

export default Header;
