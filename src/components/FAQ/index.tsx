"use client";
import React, { useState } from "react";
import faqData from "./faqData";
import FaqItem from "./FaqItem";
import SectionHeader from "@/components/Common/SectionHeader";
import Section from "../Common/Section";

const FAQ = () => {
	const [activeFaq, setActiveFaq] = useState<number | string>(1);

	const handleFaqToggle = (id: number | string) => {
		activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
	};

	return (
		<Section>
			{/* <!-- section title --> */}

			<h3 className="text-center h2 mb-4">Frequently Asked <span className="text-primary">Questions</span></h3>

			<div className='mx-auto w-full px-4 sm:px-8 xl:px-0'>
				<div className='flex flex-col gap-8 '>
					{/* <!-- Accordion Item --> */}
					{faqData?.map((faq, key) => (
						<FaqItem
							key={key}
							faq={faq}
							handleFaqToggle={handleFaqToggle}
							activeFaq={activeFaq}
						/>
					))}
				</div>
			</div>
		</Section>
	);
};

export default FAQ;
