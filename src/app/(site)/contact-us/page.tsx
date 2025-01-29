import ContactForm from "@/components/Contact/ContactForm";
import "@/app/sass/contactForm.scss"

import React from "react";
import Section from "@/components/Common/Section";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
	title: `Contact Us`,
	description: `A full-stack SaaS boilerplate and starter kit comes with all essential integrations, pages, components, user/admin dashboards, landing page, design source and everything you need to turn your feature-rich SaaS startup idea into reality in a day!`,
	openGraph: {
		type: "website",
		title: `Contact Us`,
		description: `A full-stack SaaS boilerplate and starter kit comes with all essential integrations, pages, components, user/admin dashboards, landing page, design source and everything you need to turn your feature-rich SaaS startup idea into reality in a day!`,
		images:
			"https://ucarecdn.com/4b0ffd0e-90b0-4a59-b63c-f5ecee0ae575/saasbold.jpg",
	},
	twitter: {
		card: "summary_large_image",
		title: `Contact Us`,
		description: `A full-stack SaaS boilerplate and starter kit comes with all essential integrations, pages, components, user/admin dashboards, landing page, design source and everything you need to turn your feature-rich SaaS startup idea into reality in a day!`,
		images:
			"https://ucarecdn.com/4b0ffd0e-90b0-4a59-b63c-f5ecee0ae575/saasbold.jpg",
	},
};

const ContactPage = (props: Props) => {
  return (
    <Section>
      <div className="my-15">
        <div className="border-rounded-white w-max mx-auto p-1">
        <input type="checkbox" id="toggle" className="toggleCheckbox" />
        <label htmlFor="toggle" className="toggleContainer  ">
          <div>Project</div>
          <div>General Enquiry</div>
        </label>
        </div>
      </div>
       
      <ContactForm />
    </Section>
  );
};

export default ContactPage;
