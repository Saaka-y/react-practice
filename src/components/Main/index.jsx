import styles from "@/components/Main/Main.module.css";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";
import { useEffect } from "react";

export function Main(props) {
  // return前の処理はマウント時に実行される
  useEffect(() => {
    console.log("maunted");
    document.body.style.backgroundColor = "cadetblue";

    // return以降はアンマウント時の処理
    return () => {
      console.log("unmaunted");
      document.body.style.backgroundColor = "";
    }
  }, []); // 一旦第二引数は無視！

  return (
        <main className={styles.main}>
          <Headline page={props.page}>
            <code>src/pages/{props.page}.js</code>.
          </Headline>
          <Links />
        </main>
  );
}
