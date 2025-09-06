import React, { useEffect, useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import styles from "./UnitplanBox.module.scss";
import Ready from "../../components/Ready/Ready"; // ✅ 준비중 컴포넌트 사용

import room59A from "../../assets/UnitplanBox/unit_59a.jpg";
import room59B from "../../assets/UnitplanBox/unit_84a.jpg";
import room84A from "../../assets/UnitplanBox/unit_84b.jpg";
import room84B from "../../assets/UnitplanBox/unit_84c.jpg";
import room84C from "../../assets/UnitplanBox/unit_84d.jpg";

const contents = [
  { type: "59A㎡", src: room59A },
  { type: "84A㎡", src: room59B },
  { type: "84B㎡", src: room84A },
  { type: "84C㎡", src: room84B },
  { type: "84D㎡", src: room84C },
];

const UnitplanBox = () => {
  const [istype, setIsType] = useState(contents[0]);
  const [isIdx, setIdx] = useState(0);
  const [isLeft, setIsLeft] = useState(false);
  const [isRight, setIsRight] = useState(true);
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  useEffect(() => {
    setIsLeft(isIdx > 0);
    setIsRight(isIdx < contents.length - 1);
  }, [isIdx]);

  const leftArray = () => {
    if (isIdx > 0) {
      const newIndex = isIdx - 1;
      setIsType(contents[newIndex]);
      setIdx(newIndex);
    }
  };

  const rightArray = () => {
    if (isIdx < contents.length - 1) {
      const newIndex = isIdx + 1;
      setIsType(contents[newIndex]);
      setIdx(newIndex);
    }
  };

  return (
    <>
      <div className={styles.btnContainer}>
        {contents.map((value, idx) => (
          <div
            key={idx}
            className={value.type === istype.type ? styles.clickedTypeBtn : styles.typeBtn}
            onClick={() => {
              setIsType(value);
              setIdx(idx);
            }}
          >
            {value.type}
          </div>
        ))}
      </div>

      <div className={styles.imgContainer}>
        <AiOutlineLeft
          size={!isMobile ? 50 : 30}
          color={isLeft ? "#d1af73" : "#eedec3"}
          onClick={isLeft ? leftArray : undefined}
        />

        {/* ✅ 이미지 대신 Ready 컴포넌트만 표시 */}
        <div className={styles.readyBox}>
          <Ready text="준비중입니다..." />
        </div>

        <AiOutlineRight
          size={!isMobile ? 50 : 30}
          color={isRight ? "#d1af73" : "#eedec3"}
          onClick={isRight ? rightArray : undefined}
        />
      </div>
    </>
  );
};

export default UnitplanBox;
