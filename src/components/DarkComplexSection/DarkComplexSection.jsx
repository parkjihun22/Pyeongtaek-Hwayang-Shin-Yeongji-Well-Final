import React, { useState } from "react";
import styles from "./DarkComplexSection.module.scss";

import bgImg from "../../assets/ComplexGuide/ComplexGuide1/bg-section.jpg";
import layoutImg from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import designImg from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";
import communityImg from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";
import bannerImg from "../../assets/ComplexGuide/ComplexGuide1/complex-1024x573.jpg";

const items = [
  {
    key: "layout",
    label: "단지배치도",
    img: layoutImg,
    alt: "평택화양 신영지웰 단지배치도 이미지",
    description:
      "평택화양 신영지웰의 동 배치와 단지 구성, 주요 시설 위치를 확인할 수 있는 단지배치도입니다.",
  },
  {
    key: "design",
    label: "단지특화설계",
    img: designImg,
    alt: "평택화양 신영지웰 단지특화설계 이미지",
    description:
      "평택화양 신영지웰의 특화 설계와 공간 구성 요소를 소개하는 이미지입니다.",
  },
  {
    key: "community",
    label: "커뮤니티",
    img: communityImg,
    alt: "평택화양 신영지웰 커뮤니티 시설 이미지",
    description:
      "평택화양 신영지웰 입주민을 위한 커뮤니티 시설 구성을 안내하는 이미지입니다.",
  },
];

export default function DarkComplexSection() {
  const [openKey, setOpenKey] = useState(items[0].key);

  const toggle = (key) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  return (
    <section
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
      aria-labelledby="complex-section-title"
    >
      <header className={styles.header}>
        <p className={styles.preTitle}>COMPLEX</p>
        <div className={styles.line} aria-hidden="true" />
        <h2 id="complex-section-title" className={styles.mainTitle}>
          단지안내
        </h2>
        <p className={styles.sectionDescription}>
          평택화양 신영지웰의 단지배치도, 특화설계, 커뮤니티 시설 정보를 확인해보세요.
        </p>
      </header>

      <div className={styles.banner}>
        <img
          src={bannerImg}
          alt="평택화양 신영지웰 단지안내 대표 배너 이미지"
          className={styles.bannerImg}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      <div className={styles.accordionList}>
        {items.map(({ key, label, img, alt, description }) => {
          const contentId = `complex-content-${key}`;
          const buttonId = `complex-button-${key}`;
          const isOpen = openKey === key;

          return (
            <article key={key} className={styles.accordionItem}>
              <h3 className={styles.accordionTitle}>
                <button
                  id={buttonId}
                  type="button"
                  className={`${styles.accordionHeader} ${
                    isOpen ? styles.active : ""
                  }`}
                  onClick={() => toggle(key)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span className={styles.label}>{label}</span>
                  <span
                    className={`${styles.arrow} ${
                      isOpen ? styles.up : styles.down
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </h3>

              <div
                id={contentId}
                className={styles.accordionContent}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
              >
                {isOpen && (
                  <>
                    <img
                      src={img}
                      alt={alt}
                      className={styles.contentImage}
                      loading="lazy"
                      decoding="async"
                    />
                    <p className={styles.contentDescription}>{description}</p>
                  </>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}