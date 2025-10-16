import Image from "next/image";
import styles from "@/styles/Home.module.css";


export function Headline(props) {
  function capitalizeFirstLetter(string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className={styles.headlineContainer}>
      <div>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </div>
      <ol>
        <li>
          Try by editing {capitalizeFirstLetter(props.page)} Page <code>src/pages/{props.page}.js</code>.
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>

    </div>
  );
}
