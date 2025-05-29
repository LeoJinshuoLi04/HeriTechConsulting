import ImageDisplay from "../ImageDisplay/ImageDisplay";
import PageHeader from "../PageHeader/PageHeader";
import "./TopicPage.css";

export interface TopicPageProps {
  topicName: string;
  topicDescription: string;
  objects: {
    objectName: string;
    objectImage: string;
    objectDescription: string;
  }[];
}

export default function TopicPage({
  topicObject,
  setCurrentPage,
}: {
  topicObject: TopicPageProps;
  setCurrentPage: (pageName: string) => void;
}) {
  const createItemObject = (object: TopicPageProps["objects"][number]) => {
    return (
      <div className="objectItemColumn">
        <div
          className="objectName"
          onClick={() => setCurrentPage(object.objectName)}
        >
          {object.objectName}
        </div>
        <ImageDisplay src={object.objectImage} />
        <p className="objectItemDescription">{object.objectDescription}</p>
      </div>
    );
  };

  return (
    <div className="pageContainer">
      <PageHeader title={topicObject.topicName} />
      <div className="topicItemDescription">{topicObject.topicDescription}</div>
      <div className="objectItemsContainer">
        {topicObject.objects.map((object) => createItemObject(object))}
      </div>
    </div>
  );
}
