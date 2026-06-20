import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import styles from "./FAQSection.module.scss";
import faqData from "../../../src/faqData";

const FAQSection = ({
  title = "Q & A",
  subTitle = "평택 화양 신영지웰 자주 묻는 질문",
  data = faqData,
}) => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <div className={styles.faqTitleBox}>
            <div className={styles.titleLine}></div>
            <h2>{title}</h2>
            <p>{subTitle}</p>
            <span>FAQ 더 보기</span>
          </div>

          <div className={styles.faqList}>
            {data.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`${styles.faqItem} ${isOpen ? styles.active : ""}`}
                >
                  <button
                    type="button"
                    className={styles.questionButton}
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.questionText}>
                      <strong>Q.</strong> {item.question}
                    </span>
                    <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
                  </button>

                  <div className={styles.answerWrap}>
                    <div className={styles.answerBox}>
                      <strong>A.</strong>
                      <p dangerouslySetInnerHTML={{ __html: item.answer }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;