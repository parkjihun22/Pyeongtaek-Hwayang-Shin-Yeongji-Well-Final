import React, { useEffect, useMemo, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const PAGE_COPY = {
  brand: [
    "하루의 무게를 내려놓는 순간, 화양지구 중심에서 누리는 프리미엄 라이프.",
    "서해선 안중역과 광역 교통망 개발 수혜로 더 편리한 이동 환경.",
    "평택화양 신영지웰에서 균형 잡힌 일상과 미래가치를 함께 만나보세요.",
  ],
  business: [
    "평택 화양지구 9-1블록, 전용 84㎡ 단일 구성의 999세대 대단지.",
    "지하 2층부터 지상 29층까지, 총 10개 동 규모의 브랜드 아파트.",
    "남향 위주 배치와 특화 설계로 채광과 통풍을 높인 주거 공간.",
    "중도금 무이자 등 금융 혜택으로 초기 자금 부담을 낮춘 분양 조건.",
  ],
  location: [
    "중심상업지구와 생활 인프라를 가까이 누리는 화양지구 중심 입지.",
    "서해선 안중역, 국도 38호선, 서해안고속도로와 연결되는 광역 교통 환경.",
    "평택항과 산업벨트, 개발 호재를 바탕으로 기대되는 미래가치.",
  ],
  complex: [
    "남향 위주 단지 배치와 넓은 동간거리로 쾌적함을 높인 설계.",
    "84㎡ A·B·C·D 타입 구성으로 라이프스타일에 맞춘 평면 선택.",
    "피트니스, 실내골프연습장, 사우나, 풋살장 등 다양한 커뮤니티 시설 제공.",
  ],
  default: [
    "평택화양 신영지웰에서 시작하는 새로운 주거 기준.",
    "화양지구 중심 프리미엄 라이프를 직접 확인해보세요.",
  ],
};

const getCategoryByTitle = (title = "") => {
  const brandTitles = ["신영지웰", "홍보영상", "체크포인트", "당첨자서류안내", "평택화양 신영지웰"];
  const businessTitles = ["사업개요", "세대안내", "인테리어", "청약안내", "모집공고안내", "인지세납부안내"];
  const locationTitles = ["입지환경", "프리미엄"];
  const complexTitles = ["단지안내"];

  if (brandTitles.includes(title)) return "brand";
  if (businessTitles.includes(title)) return "business";
  if (locationTitles.includes(title)) return "location";
  if (complexTitles.includes(title)) return "complex";

  return "default";
};

const getBannerAlt = (title = "") => {
  const safeTitle = title?.trim() || "평택화양 신영지웰";
  return `${safeTitle} 대표 배너 이미지`;
};

const Bener = ({ title = "평택화양 신영지웰" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const descriptionList = useMemo(() => {
    const category = getCategoryByTitle(title);
    return PAGE_COPY[category] || PAGE_COPY.default;
  }, [title]);

  return (
    <section
      className={styles.container}
      aria-label={`${title} 배너 영역`}
    >
      <img
        className={`${styles.benerImage} ${isLoaded ? styles.showImage : ""}`}
        src={img}
        alt={getBannerAlt(title)}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      <div className={styles.overlay} aria-hidden="true"></div>

      <div
        className={`${styles.contents} ${isLoaded ? styles.showContents : ""}`}
      >
        <header>
          <h1
            className={`${styles.title} ${isLoaded ? styles.showTitle : ""}`}
          >
            {title}
          </h1>
        </header>

        <div className={styles.textGroup}>
          {descriptionList.map((item, index) => (
            <p
              key={`${title}-${index}`}
              className={`${styles.text} ${isLoaded ? styles.showText : ""}`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bener;