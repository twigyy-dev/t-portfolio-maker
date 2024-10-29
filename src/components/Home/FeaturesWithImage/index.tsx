import { FeatureWithImg } from "@/types/featureWithImg";
import featureItemData from "./featuresData";
import FeatureItem from "./FeatureItem";
import SectionHeader from "@/components/Common/SectionHeader";
import "../../../app/sass/clients.scss"

const FeaturesWithImage = () => {
	return (
		<>
		<div className="area">
			<h1 className="area-first_text">Our</h1>
			<h1 className="area-second_text">Clients</h1>
		</div>
		</>
	);
};

export default FeaturesWithImage;
