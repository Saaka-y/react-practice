import Image from "next/image";
import styles from "@/components/Links.module.css";

// データと処理は分離する
const ITEMS = [
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy now",
    isPrimary: true,
    imgSrc: "/vercel.svg",
    imgAlt: "Vercel logomark",
  },
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Read our docs",
    isPrimary: false,
  },
]


export function Links() {
  return (
    <div className={styles.ctas}>
      {ITEMS.map(item => {
        return (
          <a key={item.href} className={styles.primary}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.imgSrc && (<Image
              className={styles.logo}
              src={item.imgSrc}
              alt={item.imgAlt}
              width={20}
              height={20}
            />
            )}
            {item.title}  
          </a>
        )
      })}
    </div>
  );
}
