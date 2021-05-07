/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => (
  <div className={styles.header}>
    <Link href="/" passHref>
      <a>HOME</a>
    </Link>
    <Link href="/product" passHref>
      <a>PRODUCT</a>
    </Link>
    <Link href="/tip" passHref>
      <a>TIP</a>
    </Link>
    <Link href="/myPage" passHref>
      <a>MY PAGE</a>
    </Link>
  </div>
);

export default Header;
