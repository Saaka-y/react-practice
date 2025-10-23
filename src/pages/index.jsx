import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useState } from "react";

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
  const [count, setCount] = useState(1);
  // これは配列の分割代入
  // const array = useState(1);, const foo = array[0];, const setFoo = array[1];と同じ

  const handleClick = (e) => {
    setCount(count => count + 1);
    setCount(count => count + 1); //アロー関数で最新のstateを受け取る
    // setCount(foo + 1); でも動くが、複数回呼ばれた場合に古いstateを参照してしまう（1 + 1）を一生やっているのと同じ挙動
  };

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1 style={{ textAlign: "center", margin: "1rem" }}>{count}</h1>
      <button
        style={{ display: "block", margin: "1rem auto", padding: "10px", border: "none", backgroundColor: "white"}}
        onClick={handleClick}>
        Click Me
      </button>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Main page="index" />
        <Footer />
      </div>
    </>
  );
}
