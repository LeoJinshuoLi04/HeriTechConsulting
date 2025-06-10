import { useState } from "react";
import ImageDisplay from "../ImageDisplay/ImageDisplay";
import PageHeader from "../PageHeader/PageHeader";
import "./ObjectPage.css";
import arrow2 from "../../arrow2.svg";

export interface ObjectPageProps {
  name: string;
  challenges: string[];
  images: string[];
  daysTillCompletion: string;
  completionExplanation: string;
  estimatedCost: string;
  costExplanation: string;
}

export default function ObjectPage({ item }: { item: ObjectPageProps }) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const createChallengeRow = (challenge: string) => {
    return (
      <div className="challengeRow">
        <div className="challengeCircleContainer">
          <div className="challengeCircle" />
        </div>
        <div className="challengeText"> {challenge}</div>
      </div>
    );
  };

  return (
    <div className="objectPageContainer">
      <PageHeader title={item.name}></PageHeader>
      <div className="contentFirstRow">
        <div className="imageContainer">
          <ImageDisplay src={item.images[currentImageIndex]}></ImageDisplay>
          <div className="imageSelection">
            <img
              src={arrow2}
              alt="left arrow"
              onClick={() => {
                if (currentImageIndex === 0) return;
                setCurrentImageIndex(currentImageIndex - 1);
              }}
            ></img>
            {currentImageIndex + 1} / {item.images.length}
            <img
              src={arrow2}
              alt="right arrow"
              style={{ transform: "rotate(180deg)" }}
              onClick={() => {
                if (currentImageIndex === item.images.length - 1) return;
                setCurrentImageIndex(currentImageIndex + 1);
              }}
            ></img>
          </div>
        </div>
        <div className="itemChallengesContainer">
          {item.name}
          <div className="itemChallenges">
            {item.challenges.map((challenge) => createChallengeRow(challenge))}
          </div>
        </div>
      </div>
      <div className="contentSecondRow">
        <div className="timeContainer">
          <h3>Estimated Time to Completion</h3>
          <h1> {item.daysTillCompletion} Days</h1>
          <p> {item.completionExplanation}</p>
        </div>
        <div className="costContainer">
          <h3>Estimated Cost</h3>
          <h1> ${item.estimatedCost} </h1>
          <p> {item.costExplanation}</p>
        </div>
      </div>
    </div>
  );
}
