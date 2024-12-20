"use client";
// import React from "react";
import React, { useState, useEffect } from 'react';
import featuresData from "./featuresData";
import FeatureItem from "./FeatureItem";
import SectionHeader from "@/components/Common/SectionHeader";
import Image from "next/image";
import "../../../app/sass/features.scss"
import Section from "@/components/Common/Section";
import colors, { black } from "tailwindcss/colors";
import Icons from "../../../../public/images/icon/service-arrow.svg";
import web from "./Services/Web Development.png";
import android from "./Services/Android.png";
import ios from "./Services/iOS.png";
import seo from "./Services/SEO.png";
import figma from "./Services/Figma.png";
import wordpress from "./Services/wordpress.png";
import dh from "./Services/Domain and Hosting.png";


const services = [
	{ name: 'Website Development', image: web, },
	{ name: 'UI/UX Design', image: figma, },
	{ name: 'iOS Development', image: ios, },
	{ name: 'WordPress/Wix Development', image: wordpress, },
	{ name: 'Android Development', image: android, },
	{ name: 'Domain and Hosting', image: dh, },
	{ name: 'SEO/Digital Marketing', image: seo, },
];


const OurServices = () => {
	const [gradient, setGradient] = useState("radial-gradient(circle, #3fb59d88 0%, #6145db21 32%, #03051600 50%)");
	const [isHovering, setIsHovering] = useState(false);
	useEffect(() => {
		const handleMouseMove = (e: any) => {
			if (!isHovering) return;

			const { clientX, clientY } = e;
			const { innerWidth, innerHeight } = window;

			// Calculate the position relative to the hovered div
			const xPercent = (clientX /innerWidth) * 100;
			const yPercent = (clientY / innerHeight) * 100;

			const newGradient = `radial-gradient(circle at ${xPercent}% ${yPercent}%, #3fb59d88 0%, #6145db21 32%, #03051600 50%)`;
			setGradient(newGradient);
		};

		if (isHovering) {
			window.addEventListener("mousemove", handleMouseMove);
		}
		else {
			setGradient("radial-gradient(circle at 50% 50%, #3fb59d88 0%, #6145db21 32%, #03051600 50%)"); // Reset the gradient
			window.removeEventListener("mousemove", handleMouseMove);
		}

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, [isHovering]);


	return (
		// <Section>
		<section className="our-services" onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)} style={{ background: gradient }}>
			<p className="h2 text-center">Our <span className="text-primary"> Services</span></p>
			<div className="services-container" >
				{services.map((service, index) => (
					<div className={`service-card service-card-${index}`} key={index}>
						<Image className="service-image" src={service.image} alt={service.name} height={150} width={150}></Image>
						<h3>{service.name}</h3>
						<button className="btn-see-more">
							<div>
								<span>See <span className="text-primary-dark">More</span></span>&nbsp;
								<Image src={Icons} alt="svg-file" height={40} width={40} />
							</div>
						</button>
					</div>
				))}
			</div>
		</section>
		// </Section>
	);
}


export default OurServices;