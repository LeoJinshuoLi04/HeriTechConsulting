import React, { useState } from "react";
import "./App.css";
import logo from "../src/logo.svg";
import arrow from "../src/arrow.svg";
import NavbarItem from "./components/Navbar/NavbarItem";
import { cursorTo } from "readline";
import HomePage from "./components/HomePage/HomePage";

const pages: { [key: string]: string[] } = {
  "Vision Capture Techniques": ["Object 1", "Object 2", "Object 3"],
  "AI/ML Solutions": ["Object 1", "Object 2", "Object 3"],
  "Automation Opportunities": ["Object 1", "Object 2", "Object 3"],
};

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState<Boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>("home");

  const colors = {
    "--background-colour": "#EFE8D8",
    "--primary-colour": "#694D2D",
  } as React.CSSProperties;

  const renderPageContent = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <div className="overallContainer" style={colors}>
        <div className="header" onClick={() => setCurrentPage("home")}>
          <img src={logo} className="logo" alt="logo"></img>
          HeriTech Consulting
        </div>
        <div className="pageBody">
          <div
            className="navbarWrapper"
            style={{ width: isNavbarOpen ? "220px" : "50px" }}
          >
            <div
              className={`navBar ${
                isNavbarOpen ? "navbarOpen" : "navbarClosed"
              }`}
            >
              <div
                className="navbarArrowContainer"
                style={{ paddingRight: isNavbarOpen ? "10px" : "17px" }}
              >
                MENU
                <img
                  src={arrow}
                  alt="navbar arrow"
                  className="navbarArrow"
                  style={{
                    transform: isNavbarOpen
                      ? "rotate(-180deg)"
                      : "rotate(0deg)",
                  }}
                  onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                ></img>
              </div>
              <div
                className="navbarItems"
                style={{
                  opacity: isNavbarOpen ? 1 : 0,
                }}
              >
                {Object.keys(pages).map((key) => {
                  return (
                    <NavbarItem
                      topic={key}
                      objects={pages[key]}
                      setCurrentPage={setCurrentPage}
                    ></NavbarItem>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="pageContent">{renderPageContent()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
