import React, { useMemo, useState } from "react";
import styles from "./EmodelInline.module.scss";

const MODEL_ITEMS = [
  {
    title: "84A",
    key: "84A",
    url: "https://sales.g-well.co.kr/hy9-1/vr0531_2/84a/tour.html",
    description:
      "평택화양 신영지웰 84A 타입 유니트를 VR로 확인할 수 있는 사이버 모델하우스입니다.",
  },
  {
    title: "84D",
    key: "84D",
    url: "https://sales.g-well.co.kr/hy9-1/vr0531_2/84a/tour.html",
    description:
      "평택화양 신영지웰 84D 타입 유니트를 VR로 확인할 수 있는 사이버 모델하우스입니다.",
  },
];

export default function EmodelInline() {
  const [selectedType, setSelectedType] = useState(MODEL_ITEMS[0].key);

  const selectedItem = useMemo(() => {
    return MODEL_ITEMS.find((item) => item.key === selectedType) || MODEL_ITEMS[0];
  }, [selectedType]);

  return (
    <section
      className={styles.inlineWrapper}
      aria-labelledby="emodel-inline-title"
    >
      <header className={styles.header}>
        <h2 id="emodel-inline-title" className={styles.title}>
          사이버 모델하우스
        </h2>
        <p className={styles.description}>
          평택화양 신영지웰의 타입별 유니트를 VR로 살펴보고 공간 구성과 평면 특징을 확인해보세요.
        </p>
      </header>

      <div
        className={styles.tabMenu}
        role="tablist"
        aria-label="사이버 모델하우스 타입 선택"
      >
        {MODEL_ITEMS.map((tab) => {
          const isSelected = selectedType === tab.key;

          return (
            <button
              key={tab.key}
              id={`emodel-tab-${tab.key}`}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`emodel-panel-${tab.key}`}
              onClick={() => setSelectedType(tab.key)}
              className={`${styles.tabButton} ${
                isSelected ? styles.activeTab : ""
              }`}
            >
              {tab.title}
            </button>
          );
        })}
      </div>

      <div
        id={`emodel-panel-${selectedItem.key}`}
        className={styles.vrSection}
        role="tabpanel"
        aria-labelledby={`emodel-tab-${selectedItem.key}`}
      >
        <h3 className={styles.viewerTitle}>
          {selectedItem.title} 타입 VR
        </h3>
        <p className={styles.viewerDescription}>
          {selectedItem.description}
        </p>

        <iframe
          className={styles.vrIframe}
          src={selectedItem.url}
          title={`평택화양 신영지웰 ${selectedItem.title} 타입 VR 사이버 모델하우스`}
          loading="lazy"
          allowFullScreen
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
        />

        <p className={styles.helperText}>
          사이버 모델하우스를 통해 평면 구성과 공간 활용을 직접 확인하실 수 있습니다.
        </p>
      </div>
    </section>
  );
}