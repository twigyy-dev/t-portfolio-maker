import Section from '@/components/Common/Section'
import React from 'react'
import Counter from "@/components/Counter";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Newsletter from "@/components/Newsletter";

const Components = () => {
    return (
        <>
			<CallToAction />
        <Section>
            <Counter />
			<Testimonials />
			<Pricing />
			<FAQ />
			<Blog />
        </Section>
			<Newsletter />
        
        </>
    )
}

export default Components
