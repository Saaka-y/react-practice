import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCallback } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// コンポーネントは中にある関数もまとめて全て再レンダリングされる
export default function Home() {
  const handleClick = useCallback((e) => { // useCallbackは関数の再レンダリングを防ぐ
    console.log(e.target);
    e.preventDefault();
  }, []);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a
        href="/about"
        onClick={handleClick}
      >
        Test
      </a>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Main page="index" />
        <Footer />
      </div>
    </>
  );
}
