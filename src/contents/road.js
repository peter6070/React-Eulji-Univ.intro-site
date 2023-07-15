import styled from "styled-components";

const RoadWrapper = styled.div`
  margin: 0 auto;
  background-color: white;
  & ul {
    font-size: 18px;
    margin: 0;
    padding-left: 2rem;
    &  li {
      list-style-type: none;
      height: 2.5rem;
      &::before {
        content: "↠";
        width: 1.5rem;
        display: inline-block;
    }
  }
`;
const RoadHeader = styled.header`
  background-color: #000000;
  color: white;
  text-align: center;
  & > h1 {
    font-size: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: c enter;
  }
`;
const RoadSection = styled.section`
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: #f2f2f2;
  color: #000000;
  overflow: hidden;
  & > h2 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 24px;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.1;
    z-index: -1;
  }
`;

function road() {
  return (
    <RoadWrapper>
      <RoadHeader>
        <h1>오는 길 안내</h1>
      </RoadHeader>

      <RoadSection>
        <h2>차량 이용 시 내비게이션 주소</h2>
        <ul>
          <li>경기도 성남시 수정구 산성대로 553(양지동 212)</li>
        </ul>
      </RoadSection>

      <RoadSection>
        <h2>지하철 이용 시 가장 가까운 역 및 도보 소요 시간</h2>
        <ul>
          <li>남한산성역에서 도보 24분</li>
          <li>
            지하철 역 주변 버스 정류장에서 452, 720-1A, 30, 240, 51, 6, 33-1,
            55, 10, 333, 10-1, 10-2, 반디2번 승차
          </li>
        </ul>
      </RoadSection>

      <RoadSection>
        <h2>버스 이용 시 가장 가까운 정류장 및 도보 소요 시간</h2>
        <ul>
          <li>을지대학교</li>
          <li>을지대학교 생활관</li>
        </ul>
      </RoadSection>
    </RoadWrapper>
  );
}

export default road;
