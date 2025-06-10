import ImageDisplay from "../ImageDisplay/ImageDisplay";
import PageHeader from "../PageHeader/PageHeader";
import "./HomePage.css";
import vc1 from "../../static/vc1.jpg";
import ai from "../../static/AI.jpg";
import auto from "../../static/topic3.jpg";

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
          <ImageDisplay src={vc1} />
          <p className="homePageItemDescription">
            This includes methods such as video, photography, and 3D imaging.
            Utilising technology such as 3D & 2D scanning to digitise items and
            create digital models & images.
          </p>
        </div>
        <div className="homePageItemColumn">
          <div
            onClick={() => setCurrentPage("AI/ML Solutions")}
            className="underlineHover"
          >
            AI/ML solutions
          </div>
          <ImageDisplay src={ai} />
          <p className="homePageItemDescription">
            AI/ML methods assists with the detection and identification of
            objects. It will also be able to extract objects using handwriting
            recognise and categorise items based on their visual similarity.
          </p>
        </div>
        <div className="homePageItemColumn">
          <div
            onClick={() => setCurrentPage("Automation Opportunities")}
            className="underlineHover"
          >
            Automation Opportunities
          </div>
          <ImageDisplay src={auto} />
          <p className="homePageItemDescription">
            By utilising automation, we are able to reduce manual handling,
            improve accuracy and scale digitisation across millions of objects.
          </p>
        </div>
      </div>
    </div>
  );
}
