import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.appbar}>
        <h1 className={styles.h1}>무단맛 로고</h1>
        <h1 className={styles.h1}>유저 아이콘</h1>
      </div>
      <div className={styles.carousel}>
        이미지 여기
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className={styles.gird_menu}>그리드view로 다양한 메뉴</div>
      <div className={styles.review_menu}>지금 뜨는 후기</div>
      <div className={styles.review_pic}>후기 사진</div>
    </main>
  );
}
