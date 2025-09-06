import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="평택화양 신영지웰-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

// 문구만 신영지웰 기준으로 전면 교체한 버전
const contents = (text, isLoaded) => { 
    if (text === '신영지웰' || text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내' || text === '평택화양 신영지웰') {
      return (
        <>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            하루의 무게를 내려놓는 순간, 화양지구 최중심 라이프.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            서해선 안중역(개통)·서부내륙고속도로(예정)로 완성하는 광역 접근성.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            평택화양 신영지웰에서 누리는 균형 잡힌 일상과 프리미엄.
          </div>
        </>
      );
    } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
      return (
        <>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            평택 화양지구 9-1블록, 전용 84㎡ 단일 999세대 대단지.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            지하2층~지상29층, 10개 동 구성 · 2027년 4월 입주 예정.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            남향 위주 동배치와 4Bay/코너 특화평면으로 채광·통풍 극대화.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            중도금 무이자 등 합리적 금융조건으로 초기 부담을 낮춘 분양.
          </div>
        </>
      );
    } else if (text === '입지환경' || text === '프리미엄') {
      return (
        <>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            중심상업지구 도보권, 초·중·고(예정)로 완성되는 원스톱 생활권.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            서해선 안중역(개통)·국도38·서해안·서부내륙고속도로(예정)로 빠른 도심 연결.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            평택항·산업벨트·현덕지구·평택호 관광단지(추진)로 높아지는 미래가치.
          </div>
        </>
      );
    } else if (text === '단지안내') {
      return (
        <>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            남향 위주 배치, 넓은 동간거리와 풍부한 녹지로 쾌적한 단지 설계.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            84㎡ A·B·C·D 타입 구성, 드레스룸·팬트리 등 수납 특화 설계.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            피트니스·실내골프·사우나·풋살장 등 커뮤니티로 완성하는 일상 품질.
          </div>
        </>
      );
    } else {
      // 기타 탭 대비 기본 문구 (필요 시 조정 가능)
      return (
        <>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            평택화양 신영지웰에서 시작하는 새로운 주거 기준.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            화양지구 최중심 프리미엄 라이프를 만나보세요.
          </div>
        </>
      );
    }
  };

