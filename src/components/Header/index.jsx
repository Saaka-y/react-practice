import Link from "next/link";
import styles from "@/components/Header/Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.link} href="/">Index</Link>
      <Link className={styles.link} href="/about">About</Link>
    </header>
  )
}
