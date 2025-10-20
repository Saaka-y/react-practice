import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Main page="about" />
        <Footer />
      </div>
    </>
  );
}
