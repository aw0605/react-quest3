import React from "react";
import "./ItemDescription.css";

const ItemDescription = () => {
  return (
    <div className="item-description">
      <div className="description">
        <h1>Basic Tee 6-Pack</h1>
        <p>
          탄탄한 소재감이 특징인 Basic Tee를 6Pack으로 묶은 상품입니다.
          <br /> 단품으로 착용이 가능하도록 베이직한 품과 기장으로 구성되었으며
          여름철 시원한 착용감이 가능하도록 COOL TOUCH가 가미된 원사를
          사용했습니다. 언제 어디서나 입을 수 있는 편안하고 자연스러운 스타일이
          돋보이는 Basic Tee입니다.
        </p>
      </div>
      <div className="caution">
        <h4>세탁 및 취급 주의사항</h4>
        <p>- 짙은 색상은 이염의 우려가 있으니 단독세탁 하십시오.</p>
        <p>- 오랜 시간 물에 담가 두지 마십시오.</p>
        <p>- 프린트 부분은 다림질 하지 마십시오.</p>
        <p>- 마찰에 의해 이염의 우려가 있습니다.</p>
      </div>
      <div className="guarantee">
        <h4>품질 보증 기준</h4>
        <p>
          본 제품은 철저함 품질관리와 공정관리를 거쳐 생상되었으며, 엄격한
          검사에 합격한 제품입니다.
          <br />
          제품에 표시되어 있는 섬유 혼용률, 치수, 세탁법을 착용 전에 반드시
          확인해 주십시오.
        </p>
      </div>
    </div>
  );
};

export default ItemDescription;
