import { FeatureWithImg } from "@/types/featureWithImg";
import featureItemData from "./featuresData";
import FeatureItem from "./FeatureItem";
import SectionHeader from "@/components/Common/SectionHeader";
import "../../../app/sass/clients.scss"
import Section from "@/components/Common/Section";

const FeaturesWithImage = () => {
	return (
		<>
		<Section>
			<p className="h2 text-center">Our<span className="text-primary"> Clients</span></p>
		</Section>
		</>
	);
};

export default FeaturesWithImage;
