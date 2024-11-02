import React from "react";
import featuresData from "./featuresData";
import FeatureItem from "./FeatureItem";
import SectionHeader from "@/components/Common/SectionHeader";
import Image from "next/image";
import "../../../app/sass/features.scss"
const Features = () => {
	return (
		<>
		<div className="services-main-container">
		<div className="container services-container">
			<img src="https://placehold.co/150X150.png"  alt=""/>
			<h1 className="services-container-text">Website <br/> Development</h1>
			
		</div>
		<div className="flex flex-row gap-20">

		<div className="container services-container">
			<img src="https://placehold.co/150X150.png"  alt=""/>
			<h1 className="services-container-text">Domain & <br/> Hosting</h1>
			
		</div>
		<div className="container services-container">
			<img src="https://placehold.co/150X150.png"  alt=""/>
			<h1 className="services-container-text">Website <br/> Design</h1>
			
		</div>
		</div>
		<div className="container services-container">
			<img src="https://placehold.co/150X150.png"  alt=""/>
			<h1 className="services-container-text">Website <br/> Maintenance</h1>
			
		</div>
		</div>
		</>
		// <section
		// 	id='features'
		// 	className='relative z-1 overflow-hidden bg-gray-1 py-17.5 dark:bg-black dark:text-white lg:py-22.5 xl:py-27.5'
		// >
		// 	{/* <!-- section title --> */}
		// 	<SectionHeader
		// 		title={"Launch SaaS Startup in Days"}
		// 		description='Everything you need to build, launch, and scale your SaaS startup.'
		// 	/>

		// 	<div className='relative z-1 mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0'>
		// 		<div className='grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3'>
		// 			{/* <!-- features item --> */}
		// 			{featuresData?.map((item: FeatureItem, key: number) => (
		// 				<FeatureItem data={item} key={key} />
		// 			))}
		// 		</div>

		// 		{/* <!-- Features Bg Shapes --> */}
		// 		<div className='hidden sm:block'>
		// 			<div className='absolute left-0 top-1/2 -z-1 -translate-y-1/2'>
		// 				<Image
		// 					src='/images/features/features-shape-01.svg'
		// 					alt='shape'
		// 					width={600}
		// 					height={600}
		// 				/>
		// 			</div>
		// 			<div className='absolute right-0 top-1/2 -z-1 -translate-y-1/2'>
		// 				<Image
		// 					src='/images/features/features-shape-02.svg'
		// 					alt='shape'
		// 					width={800}
		// 					height={800}
		// 				/>
		// 			</div>
		// 		</div>
		// 	</div>
		// </section>
	);
};

export default Features;
