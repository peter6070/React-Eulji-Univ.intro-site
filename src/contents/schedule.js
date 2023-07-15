import styled from "styled-components";
//       #schedule-wrapper {
//         margin: 0 auto;
//         background-color: white;
//       }
//       #schedule-html-header {
//         background-color: #000000;
//         color: white;
//         text-align: center;
//       }
//       #schedule-html-header > h1 {
//         font-size: 30px;
//         margin-top: 10px;
//         margin-bottom: 10px;
//         text-align: c enter;
//       }
//       Table {
//         border-collapse: collapse;
//         width: 90%;
//         margin: 0 auto;
//       }
//       Th,
//       Td {
//         border-bottom: 1px solid #ccc;
//         padding: 0.5rem;
//         text-align: center;
//       }
//       Th {
//         background-color: #000000;
//         color: white;
//       }
//       Tr:nth-child(odd) {
//         background-color: #f2f2f2;
//       }
//       Tr:nth-child(even) {
//         background-color: white;
//       }

const ScheduleWrapper = styled.div`
  margin: 0 auto;
  background-color: white;
`;
const ScheduleHeader = styled.header`
  background-color: #000000;
  color: white;
  text-align: center;
`;
const H1 = styled.h1`
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: c enter;
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 90%;
  margin: 0 auto;
`;
const Th = styled.th`
  border-bottom: 1px solid #ccc;
  padding: 0.5rem;
  text-align: center;
  background-color: #000000;
  color: white;
`;
const Td = styled.td`
  border-bottom: 1px solid #ccc;
  padding: 0.5rem;
  text-align: center;
`;
const Tr = styled.tr`
  &:nth-child(odd) {
    background-color: #f2f2f2;
  }
  &:nth-child(even) {
    background-color: white;
  }
`;

function schedule() {
  return (
    <ScheduleWrapper>
      <ScheduleHeader>
        <H1>을지대학교 소개</H1>
      </ScheduleHeader>
      <Table>
        <thead>
          <Tr>
            <Th>날짜</Th>
            <Th>학사일정</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>2023.03.02</Td>
            <Td>개강식</Td>
          </Tr>
          <Tr>
            <Td>2023.03.02 - 03.06</Td>
            <Td>수강신청 기간</Td>
          </Tr>
          <Tr>
            <Td>2023.06.17</Td>
            <Td>종강식</Td>
          </Tr>
          <Tr>
            <Td>2023.06.30</Td>
            <Td>학기 종료</Td>
          </Tr>
        </tbody>
      </Table>
    </ScheduleWrapper>
  );
}

export default schedule;
