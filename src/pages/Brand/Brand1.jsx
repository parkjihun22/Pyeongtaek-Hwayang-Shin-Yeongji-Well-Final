import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
                <Helmet>
                <title>평택화양 신영지웰 - 브랜드 소개</title>
                <meta
                    name="description"
                    content="신영지웰 브랜드의 철학과 가치. 탄탄한 디벨로퍼 역량과 시공 신뢰, 프리미엄 주거문화로 입주민의 생활 품격을 높입니다."
                />
                <link rel="canonical" href="https://www.verficktescheisse.com/Brand/intro" />
                <meta name="robots" content="index,follow" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="평택화양 신영지웰" />
                <meta property="og:title" content="평택화양 신영지웰 - 브랜드 소개" />
                <meta
                    property="og:description"
                    content="신영지웰 브랜드 소개: 고객 중심 철학과 프리미엄 품질 기준, 검증된 시공 신뢰로 완성되는 평택 화양지구의 새로운 주거 기준."
                />
                <meta property="og:url" content="https://www.verficktescheisse.com/Brand/intro" />
                <meta property="og:image" content="https://www.verficktescheisse.com/images/og/main.jpg" />
                </Helmet>

                <Header isChanged={isScroll} />
                <FixIcon />

                {/* 배너 타이틀도 브랜드명으로 교체 */}
                <Bener title="신영지웰" />

                <MenuBar contents={menuContents} />

                {/* SEO: 메인 페이지 타이틀/보이스오버 텍스트 업데이트 */}
                <h1 className={styles.screenReaderOnly}>평택화양 신영지웰 - 브랜드 소개</h1>
                <p className={styles.screenReaderOnly}>
                신영지웰은 신뢰와 품질을 최우선으로 하는 주거 브랜드입니다. 검증된 개발·시공 역량과
                세심한 설계, 고급 사양을 바탕으로 입주자에게 프리미엄 주거 환경을 제공합니다.
                지속적인 혁신과 고객 만족 철학으로 미래 지향적인 주거 가치를 제시합니다.
                </p>

                {/* 히어로 카피 교체 */}
                <div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
                <div>생활의 모든 것을 한 걸음에</div>
                <div>신영지웰, 화양지구의 중심에 서다</div>
                </div>


            <img className={`${styles.image} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="평택화양 신영지웰 brand-Image1" />

            <Footer />
        </div>
    );
}

export default Brand1;
