import { FeatureWithImg } from "@/types/featureWithImg";
import featureItemData from "./featuresData";
import FeatureItem from "./FeatureItem";
import SectionHeader from "@/components/Common/SectionHeader";
import "../../../app/sass/clients.scss";
import Section from "@/components/Common/Section";
import Image from "next/image";

const clients = [
  { name: "Dimensionlabs", img: "/images/clients/dlabs.png" },
  { name: "Dimensionlabs", img: "/images/clients/twigyy.png" },
  { name: "Dimensionlabs", img: "/images/clients/dlabs.png" },
  { name: "Dimensionlabs", img: "/images/clients/kolmin.png" },
];

const FeaturesWithImage = () => {
  return (
    <>
      <Section>
        <p className="h2 text-center">
          Our<span className="text-primary"> Clients</span>
        </p>
        <div className="clients-wrapper">
          <div className="clients">
            {clients.map((client, key) => (
              <div
                key={key}
                className={`relative bg-white h-[320px] w-[320px] flex items-center justify-center rounded-[30px] overflow-hidden client-${key + 1} group`}
              >
                <Image src={client.img} alt="Logo" width={179} height={138} />
                {/* Arrow Image */}
                <div className="arrow-container">
                  <Image
                    src="/images/clients/Group 4.svg" // Replace with your arrow image path
                    alt="Arrow"
                    className="arrow"
                    height={40}
                    width={40}
                  />
                </div>
                {/* Wave Effect */}
                <div className="wave"></div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default FeaturesWithImage;
