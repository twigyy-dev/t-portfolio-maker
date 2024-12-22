import React from 'react'
import Section from '@/components/Common/Section'
import TwoColumnWithText from '@/components/TwoColumnWithText'

import "@/app/sass/services.scss"


type challenge = {
    title: string,
    text: string,
    image: any,
    imgAlt: string,
    orientation: string
}

type ChallengesProps = {
    heading: string,
    challenges: Array<challenge>
}

const CommonChallenges = (props: ChallengesProps) => {
    
    return (
        <Section>
            <h3 className='service-challenge-heading'>{props.heading}</h3>
            {props.challenges.map((challenge,key)=>(
                <TwoColumnWithText 
                title={challenge.title} 
                text={challenge.text}
                image={challenge.image}
                imgAlt={challenge.text}
                orientation={challenge.orientation}
                />
            ))}
        </Section>
    )
}

export default CommonChallenges
