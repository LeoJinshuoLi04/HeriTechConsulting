import React, { useState } from "react";
import "./App.css";
import logo from "../src/logo.svg";
import arrow from "../src/arrow.svg";
import NavbarItem from "./components/Navbar/NavbarItem";
import HomePage from "./components/HomePage/HomePage";
import TopicPage, { TopicPageProps } from "./components/TopicPage/TopicPage";
import ObjectPage from "./components/ObjectPage/ObjectPage";
import pinned1 from "./static/pinned1.jpg";
import pinned2 from "./static/pinned2.jpg";
import pinned3 from "./static/pinned3.jpg";
import lho1 from "./static/largeheavydryobj1.jpg";
import lho2 from "./static/largeheavydryobj2.jpeg";
import lho3 from "./static/largeheavydryobj3.jpg";
import sdo1 from "./static/smalldryobj1.jpg";
import sdo2 from "./static/smalldryobj2.jpg";
import sdo3 from "./static/smalldryobj3.jpg";
import fts1 from "./static/FTS1.jpg";
import fts2 from "./static/FTS2.jpeg";
import fts3 from "./static/FTS3.png";
import lpo1 from "./static/LPO2.jpeg";
import lpo2 from "./static/LPO3.jpeg";
import lpo3 from "./static/LPO4.jpeg";
import asm1 from "./static/Assemblages1.jpg";
import asm2 from "./static/Assemblages2.jpg";
import asm3 from "./static/Assemblages3.jpg";
import pb1 from "./static/paper 1.jpg";
import pb2 from "./static/paper 2.jpg";
import pb3 from "./static/paper 3.jpg";
import avo1 from "./static/AVO1.jpg";
import avo2 from "./static/AVO2.jpg";
import avo3 from "./static/AVO3.jpg";

const pages: { [key: string]: string[] } = {
  "Vision Capture Techniques": [
    "Large/Heavy Dry Objects",
    "Small Dry Objects",
    "Audio Visual Objects",
  ],
  "AI/ML Solutions": ["Assemblages", "Paper Based Objects"],
  "Automation Opportunities": [
    "Liquid Preserved Objects",
    "Pinned Objects",
    "Frozen Tissue Samples",
  ],
};

const visionCaptureTechniques: TopicPageProps = {
  topicName: "Vision Capture Techniques",
  topicDescription:
    "This includes methods such as video, photography, and 3D imaging. Utilising technology such as 3D & 2D scanning to digitise items and create digital models & images.",
  objects: [
    {
      objectName: "Large/Heavy Dry Objects",
      objectDescription:
        "These are dry objects that require 2 people or more to move, and are predominantly in the cultural collection. Some objects may have labels attached to them.",
      objectImage: lho1,
    },
    {
      objectName: "Small Dry Objects",
      objectDescription:
        "These are dry objects that do not require more than one person to move. Some objects have labels attached to them or to their storage containers. This category includes stone objects, ceramics, glass and other materials.",
      objectImage: sdo1,
    },
    {
      objectName: "Audio Visual Objects",
      objectDescription:
        "This includes photographs, negatives, glass plates and film rolls.",
      objectImage: avo1,
    },
  ],
};

const AIMLSolutions: TopicPageProps = {
  topicName: "AI/ML Solutions",
  topicDescription:
    "AI/ML methods assists with the detection and identification of objects. It will also be able to extract objects using handwriting recognise and categorise items based on their visual similarity.",
  objects: [
    {
      objectName: "Assemblages",
      objectDescription:
        "A collection of objects that must be stored, moved or handled together to form an item. Predominantly in archaeology, an assemblage could include a large number of related objects.",
      objectImage: asm1,
    },
    {
      objectName: "Paper Based Objects",
      objectDescription:
        "This includes bound books, loose documents, journals, articles, newspaper segments and art. Most of these objects are in the Archives collection, however natural sciences and archaeology have a small proportion",
      objectImage: pb1,
    },
  ],
};

const AutomationOpportunities: TopicPageProps = {
  topicName: "Automation Opportunities",
  topicDescription:
    "By utilising automation, we are able to reduce manual handling, improve accuracy and scale digitisation across millions of objects.",
  objects: [
    {
      objectName: "Liquid Preserved Objects",
      objectDescription:
        "These objects are preserved in jars filled with formalin or ethanol for preservation, which requires special handling. Some objects may have labels placed inside the jar. A significant proportion of the museum’s collection is stored this way",
      objectImage: lpo1,
    },
    {
      objectName: "Pinned Objects",
      objectDescription:
        "These are multiple similar objects that are pinned to a tray and stored together. Objects of the same species are usually pinned together. Multiple tags pinned to the objects, and each could provide different information about the object",
      objectImage: pinned1,
    },
    {
      objectName: "Frozen Tissue Samples",
      objectDescription:
        "These are tissue samples stored in ethanol at ultra low temperatures (-80 ℃) across 11 freezers.",
      objectImage: fts1,
    },
  ],
};

const PinnedObjects = {
  name: "Pinned Objects",
  challenges: [
    "Information not readable without removing the item itself",
    "Current process takes at least 30 minutes to arrange the items from a single container and is possible to perform only 2 per day due to the manual labour involved",
    "Space and drawers/trays available to remove the objects and place them for further processing is limited.",
  ],
  images: [pinned1, pinned2, pinned3],
  daysTillCompletion: "380",
  completionExplanation:
    "There are around 5 million pinned objects in the collection. It is expected that digitising all these items will take a long time especially since there is a lack of space and drawers/trays available to place the objects for further processing",
  estimatedCost: "1 260 000",
  costExplanation:
    "This category demands intensive manual handling: each specimen must be carefully removed from trays, labels deciphered, then returned, a process taking roughly 30 minutes per tray. The high labour input for sorting, photographing and metadata capture drives the 20% budget allocation, reflecting both time and specialist handling skills.",
};

const SmallDryObjects = {
  name: "Small Dry Objects",
  challenges: [
    "High resolution 3D imaging of items is of interest across departments, to capture additional information",
    "Information available on tags can be digital print or handwritten text and is not consistent across images captured.",
  ],
  images: [sdo1, sdo2, sdo3],
  daysTillCompletion: "400",
  completionExplanation:
    "These objects make up 30% of the collection and there are approximately 7.5 million of these objects. Digitisation of these items can be expedited by using 3D scanners, which enable the detailed capture of objects and makes the process more efficient.",
  estimatedCost: "1 890 000",
  costExplanation:
    "With 30% of the collection, these items require high‐resolution 3D imaging and mixed‐mode OCR—handwritten and printed labels—adding complexity to each scan. Their moderate size belies the extra time in lighting, multi‐angle capture and image processing pipelines, justifying a substantial share of the overall digitisation budget.",
};

const LargeDryObjects = {
  name: "Large/Heavy Dry Objects",
  challenges: [
    "Limited space to capture high quality images. Artefacts will require multiple people to handle together, and special equipment would be required for transportation or to stage for images.",
    "Some of the Museum’s own equipment is considered part of the collection. This includes items such as microscopes, weighing machines, storage cabinets, desks, chairs and historic glassware. These objects are from a period of approximately 1800s-1900s and might require special handling.",
  ],
  images: [lho1, lho2, lho3],
  daysTillCompletion: "180",
  completionExplanation:
    "These objects account for the smallest share of the collection. The most time-consuming aspect of digitising these items would be the transportation required to move them. However, by utilising 3D structured light scanner technology which is portable, transportation can be minimised, ensuring that digitisation for these items can be done efficiently.",
  estimatedCost: "125 000",
  costExplanation:
    "Although few, these objects need specialised rigging, multi‐person lifts and bespoke staging areas. Transporting fragile furniture, historic glassware and oversized artefacts incurs equipment hires and safety protocols. The ten‐fold uplift over their object‐count share ensures sufficient funding for cranes, dollies, protective padding and extra personnel.",
};

const LiquidPreservedObjects = {
  name: "Liquid Preserved Objects",
  challenges: [
    "Specimens are stored in chemicals and trained staff are needed to handle safely with protective equipment.",
    "Liquids are sometimes required to be changed to better preserve specimens.",
    "Space used to extract specimens and collect information is limited. Some of the older chemicals used to preserve the specimens are toxic to humans and needs to be changes to safer chemicals. This process can take up to 3 days to completed for a batch of 15 glass bottles in one workstation.",
  ],
  images: [lpo1, lpo2, lpo3],
  daysTillCompletion: "430",
  completionExplanation:
    "These objects account for the largest share of the collection. By applying automation, we can enable batch scheduling, have chemical handling alerts and have real-time dashboards to monitor the digitisation process. These helps us perform safer and faster digitisation for these objects, improving efficiency.",
  estimatedCost: "2 420 000",
  costExplanation:
    "Specimens in formalin or ethanol demand chemical safety measures—PPE, fume hoods, spill kits—and multi‐day batch processing for fluid changes before imaging. Each jar must be handled by trained staff in controlled spaces, dramatically inflating per‐unit costs. Their volume and hazard profile warrant the largest single allocation.",
};

const FrozenTissueSamples = {
  name: "Frozen Tissue Samples",
  challenges: [
    "Specimens are stored under incredibly cold temperatures for conservation. Retrieving these specimens may require special handling as they are usually part of a larger organism.",
    "Small size of the individual items makes it difficult to capture information through photography.",
  ],
  images: [fts1, fts2, fts3],
  daysTillCompletion: "400",
  completionExplanation:
    "Three hundred and seventy-five thousand frozen tissue samples require ultra-low temperature handling and thaw freeze cycles. Using two cryogenic workstations at nine hundred samples per day full digitisation is projected at four hundred working days including biosecurity protocols.",
  estimatedCost: "95 000",
  costExplanation:
    "Stored at –80 °C, these delicate samples require freezer‐grade retrieval protocols, rapid transfer to imaging stations and strict thaw/refreeze cycles. Though small in count, they carry cold‐chain risks and specialized equipment overhead. The modest budget slice covers ultra‐low‐temperature cabinets, cryogenic handling tools and biosecurity measures.",
};

const PaperBasedObjects = {
  name: "Paper Based Objects",
  challenges: [
    "Handwritten text is sometimes not readable. Some of the documents might be partially eroded due to preservation conditions. There are very few standard sizes or shapes as paper sizes and quality vary greatly.",
    "Much of the material to be digitised is correspondence sent to the museum, which comes in all sizes, often double-sided and usually handwritten.",
  ],
  images: [pb1, pb2, pb3],
  daysTillCompletion: "300",
  completionExplanation:
    "Five hundred thousand paper-based documents of varied sizes need careful scanning on overhead and flatbed scanners. At a rate of two thousand items per day with cradles for support full digitisation is estimated at three hundred working days.",
  estimatedCost: "130 000",
  costExplanation:
    "Digitising books, manuscripts and letters involves flatbed and overhead scanners, variable resolution settings, plus manual conservation for brittle or eroded pages. OCR of handwritten text often fails, necessitating human transcription. The allocation accounts for archivists’ time, specialised scanning cradles and post‐scan quality control.",
};

const Assemblages = {
  name: "Assemblages",
  challenges: [
    "Details of individual items in the assembly are underneath the item or inscribed onto the item, difficult to read/interpret",
  ],
  images: [asm1, asm2, asm3],
  daysTillCompletion: "350",
  completionExplanation:
    "Two hundred and fifty thousand assemblages of related artefacts must be imaged together to preserve context and spatial relationships. Using custom rigs and multi angle capture at five hundred units per day completion is expected in three hundred and fifty working days with detailed metadata modelling.",
  estimatedCost: "65 000",
  costExplanation:
    "These grouped artefacts must be imaged on site as cohesive units, preserving spatial relationships. Cataloguing embedded or inscribed data adds metadata‐entry time. Budget covers bespoke mounting rigs, multi‐angle capture setups and additional data‐modeling effort to link individual components within a single digital asset.",
};

const AudioVisualObjects = {
  name: "Audio Visual Objects",
  challenges: [
    "Glass plates are VERY fragile and would need to be done on site to minimise handling and risk.",
    "Some prints and photographic albums are very old and in a fragile condition",
  ],
  images: [avo1, avo2, avo3],
  daysTillCompletion: "250",
  completionExplanation:
    "One point two five million audio visual objects including glass plates and film reels need on site scanning with portable digital capture rigs. At ten thousand items per day full digitisation is projected in two hundred and fifty working days.",
  estimatedCost: "310 000",
  costExplanation:
    "Fragile glass plates, film reels and photographic albums require on-site scanning with specialised AV equipment to avoid transport damage. High‐resolution capture, colour calibration and format conversion demand expert operators. The allocation funds portable scanners, lighting rigs and digital restoration workflows.",
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
      case "Pinned Objects":
        return <ObjectPage item={PinnedObjects} />;
      case "Small Dry Objects":
        return <ObjectPage item={SmallDryObjects} />;
      case "Large/Heavy Dry Objects":
        return <ObjectPage item={LargeDryObjects} />;
      case "Liquid Preserved Objects":
        return <ObjectPage item={LiquidPreservedObjects} />;
      case "Frozen Tissue Samples":
        return <ObjectPage item={FrozenTissueSamples} />;
      case "Paper Based Objects":
        return <ObjectPage item={PaperBasedObjects} />;
      case "Assemblages":
        return <ObjectPage item={Assemblages} />;
      case "Audio Visual Objects":
        return <ObjectPage item={AudioVisualObjects} />;
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
