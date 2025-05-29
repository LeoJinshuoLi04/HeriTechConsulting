import React, { useState } from "react";
import "./App.css";
import logo from "../src/logo.svg";
import arrow from "../src/arrow.svg";
import NavbarItem from "./components/Navbar/NavbarItem";
import HomePage from "./components/HomePage/HomePage";
import TopicPage, { TopicPageProps } from "./components/TopicPage/TopicPage";
import ObjectPage from "./components/ObjectPage/ObjectPage";

const pages: { [key: string]: string[] } = {
  "Vision Capture Techniques": ["Object 1", "Object 2", "Object 3"],
  "AI/ML Solutions": ["Object 4", "Object 5"],
  "Automation Opportunities": ["Object 6", "Object 7", "Object 8"],
};

const visionCaptureTechniques: TopicPageProps = {
  topicName: "Vision Capture Techniques",
  topicDescription: "Example Description",
  objects: [
    {
      objectName: "Object 1",
      objectDescription: "Example Description",
      objectImage: "",
    },
    { objectName: "Object 2", objectDescription: "", objectImage: "" },
    { objectName: "Object 3", objectDescription: "", objectImage: "" },
  ],
};
const AIMLSolutions: TopicPageProps = {
  topicName: "AI/ML Solutions",
  topicDescription: "Example Description",
  objects: [
    { objectName: "Object 4", objectDescription: "", objectImage: "" },
    { objectName: "Object 5", objectDescription: "", objectImage: "" },
  ],
};
const AutomationOpportunities: TopicPageProps = {
  topicName: "Automation Opportunities",
  topicDescription: "Example Description",
  objects: [
    { objectName: "Object 6", objectDescription: "", objectImage: "" },
    { objectName: "Object 7", objectDescription: "", objectImage: "" },
    { objectName: "Object 8", objectDescription: "", objectImage: "" },
  ],
};

const Object1 = {
  name: "Object 1",
  challenges: ["challenge 1", "challenge 2"],
  images: ["", "", ""],
  daysTillCompletion: "46",
  completionExplanation: "example explanation",
  estimatedCost: "12,345",
  costExplanation: "Im tryna scam you",
};

const Object2 = {
  name: "Object 2",
  challenges: ["challenge 1", "challenge 2"],
  images: ["", "", ""],
  daysTillCompletion: "46",
  completionExplanation: "example explanation",
  estimatedCost: "12,345",
  costExplanation: "Im tryna scam you",
};

const Object3 = {
  name: "Object 3",
  challenges: ["challenge 1", "challenge 2"],
  images: ["", "", ""],
  daysTillCompletion: "46",
  completionExplanation: "example explanation",
  estimatedCost: "12,345",
  costExplanation: "Im tryna scam you",
};

const Object4 = {
  name: "Object 4",
  challenges: ["challenge 1", "challenge 2"],
  images: ["", "", ""],
  daysTillCompletion: "46",
  completionExplanation: "example explanation",
  estimatedCost: "12,345",
  costExplanation: "Im tryna scam you",
};

const Object5 = {
  name: "Object 5",
  challenges: ["challenge 1", "challenge 2"],
  images: ["", "", ""],
  daysTillCompletion: "46",
  completionExplanation: "example explanation",
  estimatedCost: "12,345",
  costExplanation: "Im tryna scam you",
};

const Object6 = {
  name: "Object 6",
  challenges: ["challenge 1", "challenge 2"],
  images: ["", "", ""],
  daysTillCompletion: "46",
  completionExplanation: "example explanation",
  estimatedCost: "12,345",
  costExplanation: "Im tryna scam you",
};

const Object7 = {
  name: "Object 7",
  challenges: ["challenge 1", "challenge 2"],
  images: ["", "", ""],
  daysTillCompletion: "46",
  completionExplanation: "example explanation",
  estimatedCost: "12,345",
  costExplanation: "Im tryna scam you",
};

const Object8 = {
  name: "Object 8",
  challenges: ["challenge 1", "challenge 2"],
  images: ["", "", ""],
  daysTillCompletion: "46",
  completionExplanation: "example explanation",
  estimatedCost: "12,345",
  costExplanation: "Im tryna scam you",
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
      case "Vision Capture Techniques":
        return (
          <TopicPage
            topicObject={visionCaptureTechniques}
            setCurrentPage={setCurrentPage}
          />
        );
      case "AI/ML Solutions":
        return (
          <TopicPage
            topicObject={AIMLSolutions}
            setCurrentPage={setCurrentPage}
          />
        );
      case "Automation Opportunities":
        return (
          <TopicPage
            topicObject={AutomationOpportunities}
            setCurrentPage={setCurrentPage}
          />
        );
      case "Object 1":
        return <ObjectPage item={Object1} />;
      case "Object 2":
        return <ObjectPage item={Object2} />;
      case "Object 3":
        return <ObjectPage item={Object3} />;
      case "Object 4":
        return <ObjectPage item={Object4} />;
      case "Object 5":
        return <ObjectPage item={Object5} />;
      case "Object 6":
        return <ObjectPage item={Object6} />;
      case "Object 7":
        return <ObjectPage item={Object7} />;
      case "Object 8":
        return <ObjectPage item={Object8} />;
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
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
