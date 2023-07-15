import styled from "styled-components";

const ClubWrapper = styled.div`
  margin: 0 auto;
  background-color: white;
`;
const ClubHeader = styled.header`
  background-color: #000000;
  color: white;
  text-align: center;
  & > * {
    margin: 0 auto;
  }
  & > p {
    font-size: 1em;
  }
`;
const ClubContent = styled.div`
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: inline-block;
  & > img {
    width: 40%;
  }
`;
const ClubSection = styled.section`
  margin-bottom: 20px;
  & > h2 {
    font-size: 24px;
    color: #333;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
  & > p {
    font-size: 18px;
    color: #666;
    margin: 10px 0;
  }
`;

function club() {
  return (
    <ClubWrapper>
      <ClubHeader>
        <h1>멋쟁이 사자처럼</h1>
        <p>우리 동아리를 소개합니다!</p>
      </ClubHeader>

      <ClubContent>
        <img
          src="https://www.blockchaintoday.co.kr/news/photo/202303/28675_32667_258.png"
          alt="likelion"
        />
        <ClubSection>
          <h2>POSSIBILITY TO REALITY</h2>
          <p>
            멋쟁이사자처럼은 테크 기반의 아이디어 실현을 위한 전국 최대 규모의
            대학 연합 창업 동아리입니다.
          </p>
        </ClubSection>
        <ClubSection>
          <h2>온/오프라인 학습</h2>
          <p>
            온라인 강의 플랫폼을 통해 초급자를 위한 다양한 VOD강의를 무료로
            제공합니다.
          </p>
        </ClubSection>
        <ClubSection>
          <h2>해커톤</h2>
          <p>
            실제 아이디어가 구현되는 축제의 장입니다. 밤샘 코딩 및 최종 발표를
            합니다.
          </p>
        </ClubSection>
      </ClubContent>
    </ClubWrapper>
  );
}

export default club;
