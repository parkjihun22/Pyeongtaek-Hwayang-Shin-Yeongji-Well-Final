import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/BusinessGuide/BusinessGuide2/page1.jpg";



const BusinessGuide2 = () => {
    const menuContents = [
      { title: "사업안내", url: "/BusinessGuide/intro" },
      { title: "분양일정", url: "/BusinessGuide/plan" },
      // { title: "계약서류안내", url: "/BusinessGuide/documents" },
    ];

    const [isScroll, setIsScroll] = useState(false);
    const [isImageVisible, setIsImageVisible] = useState(false); // ✅ 기존 이미지 가시성 상태 유지
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }

            // ✅ 기존 이미지 로딩 로직도 유지 (하지만 Ready가 표시됨)
            if (window.scrollY > 200) {
                setIsImageVisible(true);
            } else {
                setIsImageVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
            <Helmet>
            <title>평택화양 신영지웰 - 분양일정</title>
            <meta
                name="description"
                content="평택화양 신영지웰 분양일정을 한눈에 확인하세요. 모델하우스 오픈, 특별공급·1순위 청약, 당첨자 발표, 계약일정 및 입주예정일까지 상세히 안내합니다."
            />
            <link rel="canonical" href="https://www.verficktescheisse.com/BusinessGuide/plan" />
            <meta name="robots" content="index,follow" />
            </Helmet>

            <Header isChanged={isScroll} />
            <FixIcon />

            <Bener title="분양일정" />
            <MenuBar contents={menuContents} />

            {/* SEO: 페이지 제목/설명 */}
            <h1 className={styles.screenReaderOnly}>평택화양 신영지웰 - 분양일정</h1>
            <p className={styles.screenReaderOnly}>
            평택화양 신영지웰의 분양일정은 모델하우스 개관, 특별공급 및 1순위 청약, 당첨자 발표,
            계약 일정, 입주예정일 등 수요자가 반드시 알아야 할 핵심 정보를 제공합니다.
            </p>

            {/* 히어로 카피 */}
            <div className={styles.textBox}>
            <div>999세대 대단지의 시작</div>
            <div>평택화양 신영지웰, 분양일정을 확인하세요.</div>
            </div>


            {/* ✅ 기존 이미지 부분 주석 처리하고 Ready 컴포넌트 표시 */}
            <img className={`${styles.image4} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="평택화양 신영지웰 분양일정안내-image1" />

            <div className={styles.readyContainer}>
           
            </div>


            <Footer />
        </div>
    );
};

export default BusinessGuide2;
