import { useEffect } from "react";
import "./App.css";
// import styled from "styled-components";
import Introduction from "./contents/introduction";
import Schedule from "./contents/schedule";
import Club from "./contents/club";
import Road from "./contents/road";

function App() {
  //title 설정
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = "!! Welcome Eulji !!";
  }, []);

  return (
    <div className="App">
      <div id="content">
        <header>
          <div id="logo">
            <a href="https://www.eulji.ac.kr/">
              <img
                src="https://www.eulji.ac.kr/univ/images/common/logo.png"
                alt="eulji-logo"
              />
            </a>
          </div>
          <h1 id="title">을지대학교 소개 사이트</h1>
        </header>

        <nav id="side-menu">
          <ul>
            <li>
              <a href="#intro">대학 소개</a>
            </li>
            <li>
              <a href="#schedule">학사 일정</a>
            </li>
            <li>
              <a href="#club">멋쟁이사자처럼</a>
            </li>
            <li>
              <a href="#road">오시는 길</a>
            </li>
          </ul>
        </nav>

        <div id="main">
          <div id="intro" name="intro" className="content">
            <Introduction />
          </div>
          <div id="schedule" name="schedule" className="content">
            <Schedule />
          </div>
          <div id="club" name="club" className="content">
            <Club />
          </div>
          <div id="road" name="road" className="content">
            <Road />
          </div>
        </div>
        <div className="btns">
          <div
            className="moveTopBtn"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            맨 위로
          </div>
          <div
            className="moveBottomBtn"
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }}
          >
            맨 아래로
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
