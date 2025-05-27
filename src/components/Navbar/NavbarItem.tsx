import { useState } from "react";
import arrow from "../../arrow.svg";
import "./NavbarItem.css";

export default function NavbarItem({
  topic,
  objects,
  setCurrentPage,
}: {
  topic: string;
  objects: string[];
  setCurrentPage: (value: string) => void;
}) {
  const [showChildren, setShowChildren] = useState<boolean>(false);
  return (
    <div className="navbarItem">
      <div className="topicItem">
        <div onClick={() => setCurrentPage(topic)} className="topicName">
          {topic}
        </div>
        <img
          className="topicDropdownArrow"
          style={{ transform: showChildren ? "rotate(90deg)" : "rotate(0deg)" }}
          src={arrow}
          alt="navbar topic arrow"
          onClick={() => setShowChildren(!showChildren)}
        ></img>
      </div>
      <div
        className="topicObjects"
        style={{
          maxHeight: showChildren ? "100px" : "0px",
          opacity: showChildren ? "1" : "0",
        }}
      >
        {objects.map((object, index) => (
          <div
            className="objectItem"
            onClick={() => {
              setCurrentPage(object);
            }}
            key={index}
          >
            {object}
          </div>
        ))}
      </div>
    </div>
  );
}
