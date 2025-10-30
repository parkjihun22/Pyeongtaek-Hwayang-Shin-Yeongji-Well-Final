import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";



const projectData = [
	{ label: '사업명', value: '평택화양 신영지웰' },
	{ label: '사업위치', value: '경기도 평택시 현덕면 화양리 일원 (화양지구 9-1블록)' },
	{ label: '대지면적', value: '약 49,525㎡' },
	{ label: '건축면적', value: '세부 명시 없음 (공사 설계 중)' },
	{ label: '연면적', value: '세부 명시 없음 (공사 설계 중)' },
	{ label: '용적률', value: '약 229.8%' },
	{ label: '건축규모', value: '지하 2층 ~ 지상 29층, 10개동' },
	{ label: '세대수', value: '999세대 (전용 84㎡ 단일 구성)' },
  ];  

const BusinessGuide1 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
		{ title: "분양일정", url: "/BusinessGuide/plan" },
		// { title: "공급안내", url: "/BusinessGuide/documents" }
	];
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation(); // 현재 경로를 가져옴
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' }); // 모바일 여부 확인

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

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>

				<Helmet>
					{/* 페이지별 메타: title/description/og/canonical 만 관리 */}
					<title>평택화양 신영지웰 - 사업안내</title>
					<meta
					name="description"
					content="경기도 평택시 화양지구 9-1블록, 전용 84㎡ 단일 999세대 대단지. 지하2~지상29층 10개 동, 2027년 4월 입주 예정. 서해선 안중역(개통)과 광역도로망이 더한 핵심 입지의 사업 개요와 입지를 확인하세요."
					/>
					<meta name="robots" content="index,follow" />
					<link rel="canonical" href="https://www.verficktescheisse.com/BusinessGuide/intro" />

					{/* Open Graph */}
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="평택화양 신영지웰" />
					<meta property="og:title" content="평택화양 신영지웰 - 사업안내" />
					<meta
					property="og:description"
					content="평택 화양지구 9-1블록, 전용 84㎡ 단일 999세대. 남향 위주 배치와 특화 커뮤니티, 서해선 안중역(개통) 프리미엄까지 사업 핵심 정보를 한눈에."
					/>
					<meta property="og:url" content="https://www.verficktescheisse.com/BusinessGuide/intro" />
					<meta property="og:image" content="https://www.verficktescheisse.com/img/og/business.jpg" />
					<meta property="og:image:width" content="1200" />
					<meta property="og:image:height" content="630" />

					{/* Twitter */}
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content="평택화양 신영지웰 - 사업안내" />
					<meta
					name="twitter:description"
					content="전용 84㎡ 단일 999세대, 10개 동 대단지. 화양지구 최중심 입지와 광역 교통 프리미엄을 갖춘 평택화양 신영지웰의 사업 개요."
					/>
					<meta name="twitter:image" content="https://www.verficktescheisse.com/img/og/business.jpg" />
					<meta name="twitter:url" content="https://www.verficktescheisse.com/BusinessGuide/intro" />

					{/* JSON-LD (대표 이미지/브레드크럼 포함) */}
					<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "WebPage",
						name: "평택화양 신영지웰 - 사업안내",
						url: "https://www.verficktescheisse.com/BusinessGuide/intro",
						description:
						"경기도 평택시 화양지구 9-1블록, 전용 84㎡ 단일 999세대(지하2~지상29층 10개 동). 2027년 4월 입주 예정. 서해선 안중역(개통) 등 교통·생활 인프라를 갖춘 사업 개요와 입지 정보.",
						primaryImageOfPage: {
						"@type": "ImageObject",
						contentUrl: "https://www.verficktescheisse.com/img/og/business.jpg",
						width: 1200,
						height: 630
						},
						breadcrumb: {
						"@type": "BreadcrumbList",
						itemListElement: [
							{ "@type": "ListItem", position: 1, name: "홈", item: "https://www.verficktescheisse.com/" },
							{ "@type": "ListItem", position: 2, name: "사업안내", item: "https://www.verficktescheisse.com/BusinessGuide/intro" }
						]
						}
					})}
					</script>
				</Helmet>

				<Header isChanged={isScroll} />
				<FixIcon />

				<Bener title="사업개요" />

				<MenuBar contents={menuContents} />

				{/* SEO: 페이지 제목/설명 */}
				<h1 className={styles.screenReaderOnly}>평택화양 신영지웰 - 사업안내</h1>
				<p className={styles.screenReaderOnly}>
					평택화양 신영지웰은 경기도 평택시 화양지구 9-1블록에 들어서는 전용 84㎡ 단일 999세대 대단지입니다.
					지하 2층부터 지상 29층까지 10개 동으로 구성되며, 남향 위주 배치와 특화 커뮤니티를 갖추었습니다.
					서해선 안중역(개통)과 광역 도로망이 더해진 핵심 입지로 2027년 4월 입주 예정입니다.
				</p>

				{/* 히어로 카피 */}
				<div className={styles.textBox}>
					<div>특별한 라이프 컬렉션</div>
					<div>평택화양 신영지웰, 화양지구 최중심에서 만나는 새로운 자부심</div>
				</div>

			<img className={styles.img3} src={page1} alt="평택화양 신영지웰-image1"/>

			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
