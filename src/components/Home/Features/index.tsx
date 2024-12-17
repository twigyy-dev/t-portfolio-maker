import React from "react";
import featuresData from "./featuresData";
import FeatureItem from "./FeatureItem";
import SectionHeader from "@/components/Common/SectionHeader";
import Image from "next/image";
import "../../../app/sass/features.scss"
import Section from "@/components/Common/Section";
import colors, { black } from "tailwindcss/colors";
import Icons from "../../../../public/images/icon/service-arrow.svg";

const services = [
	{ name: 'Website Development', image: '🌐', },
	{ name: 'UI/UX Design', image: '🎨', },
	{ name: 'iOS Development', image: '📱', },
	{ name: 'WordPress/Wix Development', image: '🛠️', },
	{ name: 'Android Development', image: '🤖', },
	{ name: 'Domain and Hosting', image: '🔗', },
	{ name: 'SEO/Digital Marketing', image: '📈', },
];


const OurServices = () => {
	return (
		<Section>
		<section className="our-services">
			<p className="h2 text-center">Our <span className="text-primary"> Services</span></p>
			<div className="services-container">
				{services.map((service, index) => (
					<div className={`service-card service-card-${index}`} key={index}>
						<div className="image">{service.image}</div>
						<h3>{service.name}</h3>
						<button className="btn-see-more">
							<div>
								<span>See <span className="text-primary-dark">More</span></span>&nbsp;
								<Image src={Icons} alt="svg-file" priority height={40} width={40} />
							</div>
						</button>
					</div>
				))}
			</div>
		</section>
		</Section>
	);
}





// const Features = () => {

// 	return (
// 		<section className="services-main-container">
// 			<span className="Services" style={{ color: 'white' }}>Our&nbsp;<span style={{ color: '#09D1D5' }}> Services</span></span>
// 			<div className="service-grid">
// 				<div className="container services-container">
// 					<img src="/website-development.png" alt="Website Development" />
// 					<h3>Website Development</h3>
// 				</div>
// 				<div className="container services-container-card">
// 					<img src="/ui-ux-design.png" alt="UI/UX Design" />
// 					<h3>UI/UX Design</h3>
// 				</div>
// 				<div className="container services-container-card">
// 					<img src="/ios-development.png" alt="iOS Development" />
// 					<h3>iOS Development</h3>
// 				</div>
// 				<div className="container services-container-card">
// 					<img src="/wordpress-development.png" alt="WordPress/Wix Development" />
// 					<h3>WordPress/Wix Development</h3>
// 				</div>
// 				<div className="container services-container-card">
// 					<img src="/android-development.png" alt="Android Development" />
// 					<h3>Android Development</h3>
// 				</div>
// 				<div className="container services-container-card">
// 					<img src="/seo-digital-marketing.png" alt="SEO/Digital Marketing" />
// 					<h3>SEO/Digital Marketing</h3>
// 				</div>
// 				<div className="service-container services-container">
// 					<img src="/domain-hosting.png" alt="Domain and Hosting" />
// 					<h3>Domain and Hosting</h3>
// 				</div>
// 			</div>


{/* <div className="container services-container">
				<img src="https://placehold.co/150X150.png" alt="" />
				<h1 className="services-container-text">Website <br /> Development</h1>
			</div>
			<div className="flex flex-row gap-20">

				<div className="container services-container">
					<img src="https://placehold.co/150X150.png" alt="" />
					<h1 className="services-container-text">Domain & <br /> Hosting</h1>

				</div>
				<div className="container services-container">
					<img src="https://placehold.co/150X150.png" alt="" />
					<h1 className="services-container-text">Website <br /> Design</h1>

				</div>
			</div>
			<div className="container services-container">
				<img src="https://placehold.co/150X150.png" alt="" />
				<h1 className="services-container-text">Website <br /> Maintenance</h1>

			</div> */}
// </section>
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
// 	);
// };

export default OurServices;
