import ImageDisplay from "../ImageDisplay/ImageDisplay";
import PageHeader from "../PageHeader/PageHeader";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="pageContainer">
      <PageHeader title="Museum Digitisation Plan"></PageHeader>
      <div className="homePageContentContainer">
        <div className="homePageItemColumn">
          Vision Capture Techniques
          <ImageDisplay src="" />
          <p className="homePageItemDescription">
            Vision capture techniques allow us to better ...
          </p>
        </div>
        <div className="homePageItemColumn">
          AI/ML solutions
          <ImageDisplay src="" />
          <p className="homePageItemDescription">
            AI/ML solutions are employed to allow for ...
          </p>
        </div>
        <div className="homePageItemColumn">
          Automation Opportunities
          <ImageDisplay src="" />
          <p className="homePageItemDescription">
            Automation opportunities are highly prevalent and allow us to ...
          </p>
        </div>
      </div>
    </div>
  );
}
