// import styles from "@/components/Footer.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <Link href="/">Index</Link>
      <Link href="/about">About</Link>
    </header>
  )
}
