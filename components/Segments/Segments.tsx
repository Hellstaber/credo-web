import styles from "./Segments.module.css";

type Segment = {
  title: string;
  description: string;
  icon: string;
  tone: "secondary" | "positive" | "notice";
  href: string;
};

const SEGMENTS: Segment[] = [
  {
    title: "რჩეული",
    description: "მეტი კომფორტი და ფინანსური სტაბილურობა",
    icon: "/icons/star.svg",
    tone: "secondary",
    href: "/rcheuli",
  },
  {
    title: "ემიგრანტებისთვის",
    description: "ბანკი მსოფლიოს ნებისმიერი წერტილიდან",
    icon: "/icons/globe-emigrants.svg",
    tone: "positive",
    href: "/emigrants",
  },
  {
    title: "ექსპატებისთვის",
    description: "სპეციალური პროდუქტები და სერვისები",
    icon: "/icons/plane.svg",
    tone: "notice",
    href: "/expats",
  },
];

export default function Segments() {
  return (
    <section className={styles.section} aria-label="სეგმენტები">
      <div className={styles.row}>
        {SEGMENTS.map((segment) => (
          <a key={segment.title} href={segment.href} className={`${styles.card} ${styles[segment.tone]}`}>
            <span className={styles.iconBox}>
              <img src={segment.icon} width={24} height={24} alt="" />
            </span>
            <span className={styles.text}>
              <span className={styles.title}>{segment.title}</span>
              <span className={styles.description}>{segment.description}</span>
            </span>
            <img className={styles.arrow} src="/icons/arrow-right.svg" width={16} height={16} alt="" />
          </a>
        ))}
      </div>
    </section>
  );
}
