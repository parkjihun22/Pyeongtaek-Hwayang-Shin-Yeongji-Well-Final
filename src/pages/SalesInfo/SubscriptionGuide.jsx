import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/SalesInfo/SubscriptionGuide/page1.jpg";




const ComplexGuide1 = () => {
  const menuContents = [
    // { title: "청약방법안내", url: "/SalesInfo/SubscriptionGuide" },
    { title: "공급안내", url: "/SalesInfo/guide" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },
    // { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로드 상태
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 이미지 로드 후 애니메이션 실행
  const handleImageLoad = () => {
    setIsImage2Loaded(true);
  };

  return (
    <div className={styles.container}>
        <Helmet>
          <title>평택화양 신영지웰 - 청약방법 안내</title>
          <meta
            name="description"
            content="평택 화양지구 신영지웰 청약방법을 확인하세요. 청약 자격, 신청 절차, 준비서류 및 유의사항을 상세히 안내합니다."
          />
          <link rel="canonical" href="https://delidilly.co.kr/SalesInfo/SubscriptionGuide" />
          <meta name="robots" content="index,follow" />
        </Helmet>

        <Header isChanged={isScroll} />
        <FixIcon />

        <Bener title="청약방법 안내" />

        <MenuBar contents={menuContents} />

        {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
        <h1 className={styles.screenReaderOnly}>
          평택화양 신영지웰 - 청약방법 안내
        </h1>
        <p className={styles.screenReaderOnly}>
          평택화양 신영지웰 청약방법 안내 페이지에서는 청약 자격 조건, 신청 절차,
          준비해야 할 서류, 주의사항 등을 확인할 수 있습니다. 
          예비 청약자분들이 혼동 없이 청약을 진행할 수 있도록 단계별 절차를 정리하여 
          분양 준비를 돕습니다.
        </p>

        <div className={styles.textBox}>
          <div>청약 절차를 한눈에</div>
          <div>평택화양 신영지웰과 함께하세요</div>
        </div>


      {/* 이미지에 애니메이션 효과 추가 */}
      <img
        className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
        src={page1}
        alt="평택화양 신영지웰 청약제도 변경안내 이미지1"
        onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
      />






      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 내용은 편집과정상 오류가 있을 수 있으니 반드시 입주자모집공고를
          확인하시기 바랍니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
