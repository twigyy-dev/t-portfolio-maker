import { FeatureWithImg } from "@/types/featureWithImg";
import featureItemData from "./featuresData";
import FeatureItem from "./FeatureItem";
import SectionHeader from "@/components/Common/SectionHeader";
import "../../../app/sass/clients.scss"
import Section from "@/components/Common/Section";
import Image from "next/image";

const clients = [
	{name:"Dimensionlabs", img:'/images/clients/dlabs.png'},
	{name:"Dimensionlabs", img:'/images/clients/dlabs.png'},
	{name:"Dimensionlabs", img:'/images/clients/dlabs.png'},
	{name:"Dimensionlabs", img:'/images/clients/dlabs.png'},
]

const FeaturesWithImage = () => {
	return (
		<>
		<Section>
			<p className="h2 text-center">Our<span className="text-primary"> Clients</span></p>
			<div className="clients-wrapper">
				<div className="clients">
				{clients.map((client,key)=>(
				<div className={`bg-white h-[320px] w-[320px] flex items-center justify-center rounded-[30px] client-${key+1}`}>
					<Image
					src={client.img}
					alt='Logo'
					width={179}
					height={138}
					/>
				</div>
				))}
				</div>
			</div>
		</Section>
		</>
	);
};

export default FeaturesWithImage;
