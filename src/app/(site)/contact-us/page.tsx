import ContactForm from "@/components/Contact/ContactForm";
import "@/app/sass/contactForm.scss"

import React from "react";
import Section from "@/components/Common/Section";

type Props = {};

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
