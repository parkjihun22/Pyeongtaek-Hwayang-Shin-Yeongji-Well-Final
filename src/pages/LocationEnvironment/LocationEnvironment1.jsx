import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

// 1) 입지 카드 데이터 교체
const LocationSection = [
  {
    img: section2Image1,
    titleText: "서평택 개발축 중심<br />탄탄한 미래가치 입지",
    contentText:
      "평택항·현덕지구·황해경제자유구역 등 대규모 개발 수혜<br />신규 도시기반 확장으로 주거·문화 인프라 지속 확충",
  },
  {
    img: section2Image2,
    titleText: "행정·의료 인프라 프리미엄<br />생활밀착 편의",
    contentText:
      "평택시청 안중출장소·공공청사 예정<br />종합병원 부지 계획 및 인근 전문의료 네트워크로 안심 생활",
  },
  {
    img: section2Image3,
    titleText: "서해선 안중역(개통) + 광역도로망<br />우수한 광역 접근성",
    contentText:
      "서해선 복선전철 안중역 이용 편의<br />서부내륙·서해안고속도로·국도38호선으로 수도권·충청권 연결",
  },
  {
    img: section2Image4,
    titleText: "생활 인프라 밀집<br />원스톱 도심 생활권",
    contentText:
      "중심상업지구 도보권·홈플러스(안중) 이용권<br />관공서·금융·문화시설이 가까운 생활 편의",
  },
  {
    img: section2Image5,
    titleText: "교육 프리미엄<br />초·중·고(예정) 학세권",
    contentText:
      "단지 인근 신설 초등학교(예정)·중·고(예정)로 안전 통학권<br />학원가 예정으로 12년 일관 교육환경 기대",
  },
  {
    img: section2Image6,
    titleText: "자연·휴식 인프라<br />쾌적한 녹지 생활",
    contentText:
      "단지 내 풍부한 조경과 근린공원 계획<br />평택호 관광단지(추진) 인근으로 레저·휴식 여건 우수",
  },
];

// 2) 페이지 컴포넌트(메타/OG/트위터/JSON-LD/히어로 카피 수정)
const LocationEnvironment1 = () => {
  const menuContents = [
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
        <title>평택화양 신영지웰 - 입지환경</title>
        <meta
          name="description"
          content="평택 화양지구 최중심 입지, 평택화양 신영지웰의 입지환경을 확인하세요. 서해선 안중역(개통)·서부내륙/서해안고속도로·국도38호선, 중심상업지구·학교(예정)·공공시설 등 원스톱 생활 인프라."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.verficktescheisse.com/LocationEnvironment/intro" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="평택화양 신영지웰" />
        <meta property="og:title" content="평택화양 신영지웰 - 입지환경" />
        <meta
          property="og:description"
          content="서해선 안중역(개통)·광역도로망과 중심상업지구, 학교(예정)·공공시설을 갖춘 평택화양 신영지웰의 핵심 입지 정보를 한눈에."
        />
        <meta property="og:url" content="https://www.verficktescheisse.com/LocationEnvironment/intro" />
        <meta property="og:image" content="https://www.verficktescheisse.com/img/og/location.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="평택화양 신영지웰 - 입지환경" />
        <meta
          name="twitter:description"
          content="평택 화양지구 최중심 입지: 서해선 안중역(개통), 서부내륙/서해안고속도로, 중심상업지구·학교(예정) 등 생활 인프라를 누리는 입지환경."
        />
        <meta name="twitter:image" content="https://www.verficktescheisse.com/img/og/location.jpg" />
        <meta name="twitter:url" content="https://www.verficktescheisse.com/LocationEnvironment/intro" />

        {/* JSON-LD (대표 이미지/브레드크럼 포함) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "평택화양 신영지웰 - 입지환경",
            url: "https://www.verficktescheisse.com/LocationEnvironment/intro",
            description:
              "평택 화양지구 최중심 입지, 서해선 안중역(개통)·광역도로망·중심상업지구·학교(예정) 등 원스톱 생활 인프라를 갖춘 평택화양 신영지웰 입지환경.",
            primaryImageOfPage: {
              "@type": "ImageObject",
              contentUrl: "https://www.verficktescheisse.com/img/og/location.jpg",
              width: 1200,
              height: 630,
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "홈", item: "https://www.verficktescheisse.com/" },
                { "@type": "ListItem", position: 2, name: "입지환경", item: "https://www.verficktescheisse.com/LocationEnvironment/intro" },
              ],
            },
          })}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />

      <MenuBar contents={menuContents} />

      {/* SEO: 페이지 제목/설명 */}
      <h1 className={styles.screenReaderOnly}>평택화양 신영지웰 - 입지안내</h1>
      <p className={styles.screenReaderOnly}>
        평택화양 신영지웰의 입지 정보를 확인하세요. 서해선 안중역(개통)과 서부내륙·서해안고속도로,
        국도38호선이 연결하는 광역 교통, 중심상업지구와 교육·공공시설(예정) 등 편리한 생활 인프라를
        한곳에서 누리는 핵심 입지입니다.
      </p>

      {/* 히어로 카피 교체 */}
      <div className={styles.textBox}>
        <div>화양지구 최중심의 원스톱 라이프</div>
        <div>평택화양 신영지웰에서 매일을 더 가까이 누리세요</div>
      </div>

      <img
        src={page1}
        className={styles.image2}
        alt="평택화양 신영지웰입지환경-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 평택화양 신영지웰 사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
