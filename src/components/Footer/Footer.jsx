import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { IoCall } from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import styles from "./Footer.module.scss";
import InterestPopup from "../InterestPopup/InterestPopup";

const partnerSites = [
  { name: "평택화양 신영지웰 공식 홈페이지", url: "#" },
];

const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  const [isFamilyOpen, setFamilyOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const [registration, setRegistration] = useState({ name: "", phone: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistration((prev) => ({ ...prev, [name]: value }));
  };

  const familySiteList = (
    <ul id="family-site-list" className={styles.familyList}>
      {partnerSites.map((site, idx) => (
        <li key={idx}>
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`${site.name} 바로가기`}
          >
            {site.name}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className={styles.footerContainer} role="contentinfo">
      {isMobile ? (
        <div className={styles.mobileWrapper}>
          <div className={styles.mobileLogo}>
            <h2>평택화양 신영지웰</h2>
          </div>

          <div className={styles.mobileInfoText}>
            <p>
              본 웹사이트에 사용된 이미지 및 CG는 소비자의 이해를 돕기 위한
              것으로 실제와 차이가 있을 수 있습니다.
            </p>
            <p>
              단지 주변 개발 계획은 관계 기관 및 정부 정책에 따라 변경, 지연
              또는 취소될 수 있습니다.
            </p>
          </div>

          <div className={styles.mobilePhone}>
            <IoCall size={30} />
            <span>1533-8848</span>
          </div>

          <div className={styles.mobileCompany}>
            <div>
              <strong>시공사</strong> (주)신영건설
            </div>
          </div>

          <div className={styles.mobileButtons}>
            <button
              type="button"
              className={styles.reserveBtn}
              onClick={() => setPopupOpen(true)}
            >
              방문예약 바로가기
            </button>

            <div className={styles.familySite}>
              <button
                type="button"
                className={styles.familyBtn}
                onClick={() => setFamilyOpen(!isFamilyOpen)}
                aria-expanded={isFamilyOpen}
                aria-controls="family-site-list"
              >
                FAMILY SITE {isFamilyOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {isFamilyOpen && familySiteList}
            </div>
          </div>

          <div className={styles.mobileCopyright}>
            <p>© 2025 평택화양 신영지웰. All Rights Reserved.</p>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.desktopWrapper}>
            <div className={styles.leftSide}>
              <h2>평택화양 신영지웰</h2>

              <p>
                본 웹사이트에 사용된 이미지 및 CG는 소비자의 이해를 돕기 위한
                것으로 실제와 차이가 있을 수 있습니다.
              </p>

              <p>
                단지 주변 개발 계획은 관계 기관 및 정부 정책에 따라 변경, 지연
                또는 취소될 수 있습니다.
              </p>
            </div>

            <div className={styles.rightSide}>
              <div className={styles.phoneNumber}>
                <IoCall size={30} />
                <span>1533-8848</span>
              </div>

              <div className={styles.companyInfo}>
                <div>
                  <strong>시공사</strong> (주)신영건설
                </div>
              </div>

              <div className={styles.buttonRow}>
                <button
                  type="button"
                  className={styles.reserveBtn}
                  onClick={() => setPopupOpen(true)}
                >
                  방문예약 바로가기
                </button>

                <div className={styles.familySite}>
                  <button
                    type="button"
                    className={styles.familyBtn}
                    onClick={() => setFamilyOpen(!isFamilyOpen)}
                    aria-expanded={isFamilyOpen}
                    aria-controls="family-site-list"
                  >
                    FAMILY SITE{" "}
                    {isFamilyOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>

                  {isFamilyOpen && familySiteList}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.desktopCopyright}>
            <p>© 2025 평택화양 신영지웰. All Rights Reserved.</p>
          </div>
        </>
      )}

      <noscript>
        <div className={styles.familySiteNoscript}>
          <h3>Family Site</h3>
          {familySiteList}
        </div>
      </noscript>

      {isPopupOpen && (
        <InterestPopup
          onClose={() => setPopupOpen(false)}
          registration={registration}
          handleInputChange={handleInputChange}
        />
      )}
    </footer>
  );
};

export default Footer;