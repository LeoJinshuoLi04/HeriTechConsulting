import "./ImageDisplay.css";

export default function ImageDisplay({ src }: { src: string }) {
  return (
    <div className="imageContainer">
      <div className="imageOuterContainer">
        <div className="imageInnerContainer">
          <img className="imageDisplayImage" src={src} alt="current item"></img>
        </div>
      </div>
    </div>
  );
}
