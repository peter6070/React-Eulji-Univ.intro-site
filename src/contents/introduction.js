import styled from "styled-components";

const IntroWrapper = styled.div`
  margin: 0 auto;
  background-color: white;
  & > p {
    font-size: 1.2vw;
    margin: 10px 0;
    line-height: 1.5;
    text-align: justify;
    padding: 0 2rem;
  }
  & > h2 {
    font-size: 1.7vw;
    margin-top: 25px;
    margin-bottom: 8px;
    text-align: center;
    color: #000000;
  }
`;
const IntroHeader = styled.header`
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

function introduction() {
  return (
    <IntroWrapper>
      <IntroHeader>
        <h1>을지대학교 소개</h1>
      </IntroHeader>

      <h2>국내 최고의 보건의료 특성화대학</h2>
      <p>
        을지대학교는 국내 최고의 보건의료 특성화대학입니다. 을지대학교는 1967년
        ‘인간사랑·생명존중’이란 건학이념을 바탕으로 보건의료 특성화대학의 한
        길을 걸어왔습니다. 반세기 넘는 시간동안 을지만의 차별화된 교육과정과
        학습프로그램으로 사회 각 분야에서 필요한 보건의료 인재를 양성해왔습니다.
      </p>

      <h2>2021년 대학 기본역량 진단 결과 일반재정 지원 대학으로 선정</h2>
      <p>
        을지대학교는 2021년 대학 기본역량 진단에서 일반재정 지원 대학으로
        선정되어, 우리 대학 스스로 수립한 중장기 발전계획에 맞춘 혁신과제를
        추진하고 있습니다. 이를 계기로 교육과 연구 학생지원, 산학협력 분야
        등에서 다양한 혁신사업 프로그램을 개발하고 추진함으로써, 4차 산업혁명과
        고령화 시대를 선도하는 명문사학의 위상을 만들어갈 것입니다.
      </p>

      <h2>의정부캠퍼스 및 의정부을지대학교병원 개교·개원</h2>
      <p>
        경기 북부 최대 규모의 의정부을지대 학교병원과 한 공간에 의정부캠퍼스가
        2021년 3월 개교했습니다. 성남캠퍼스, 대전캠퍼스, 의정부캠퍼스는
        을지대학교의 건학이념과 특성화 비전을 공유하면서도 캠퍼스별 차별화
        전략으로 지역사회와 국가를 위해 봉사하고 연구하는 미래융합형 인재를
        양성하는 최상의 요람이 될 것입니다.
      </p>

      <h2>세계 학생들이 찾아오는 대학, 세계로 나아가는 대학</h2>
      <p>
        보건의료계의 리더로 성장하고픈 세계 각국의 학생들이 해마다 을지대학교를
        찾아와 수학하고 있습니다. 지난 2016년에는 방글라데시 국립병원 건립의
        컨설팅 주관사로 선정되어, 을지의 선진 의료서비스를 직접 해외로 수출하는
        계기가 되었습니다. 우리 대학의 교육경쟁력과 글로벌 역량은 이제 국내를
        넘어 해외에서도 인정받고 있습니다.
      </p>

      <p>
        을지대학교의 자부심에는 이유가 있습니다. 을지대학교를 찾아오시는
        여러분들의 이유 있는 선택에 좋은 결실과 보답을 드릴 것을 약속합니다.
        감사합니다.
      </p>
    </IntroWrapper>
  );
}

export default introduction;
