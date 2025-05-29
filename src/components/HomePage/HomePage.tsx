import ImageDisplay from "../ImageDisplay/ImageDisplay";
import PageHeader from "../PageHeader/PageHeader";
import "./HomePage.css";

export default function HomePage({
  setCurrentPage,
}: {
  setCurrentPage: (name: string) => void;
}) {
  return (
    <div className="pageContainer">
      <PageHeader title="Museum Digitisation Plan"></PageHeader>
      <div className="homePageContentContainer">
        <div className="homePageItemColumn">
          <div
            onClick={() => setCurrentPage("Vision Capture Techniques")}
            className="underlineHover"
          >
            Vision Capture Techniques
          </div>
          <ImageDisplay src="" />
          <p className="homePageItemDescription">
            Vision capture techniques allow us to better ...
          </p>
        </div>
        <div className="homePageItemColumn">
          <div
            onClick={() => setCurrentPage("AI/ML Solutions")}
            className="underlineHover"
          >
            AI/ML Solutions
          </div>
          <ImageDisplay src="" />
          <p className="homePageItemDescription">
            AI/ML solutions are employed to allow for ...
          </p>
        </div>
        <div className="homePageItemColumn">
          <div
            onClick={() => setCurrentPage("Automation Opportunities")}
            className="underlineHover"
          >
            Automation Opportunities
          </div>
          <ImageDisplay src="" />
          <p className="homePageItemDescription">
            Automation opportunities are highly prevalent and allow us to ...
          </p>
        </div>
      </div>
    </div>
  );
}
