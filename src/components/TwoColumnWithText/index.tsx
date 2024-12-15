import React from 'react'
import Section from '../Common/Section'
import Image from 'next/image'

type ColumnProps = {
    title: string,
    text: string,
    image: any,
    imgAlt: string,
    orientation: string
}

const TwoColumnWithText = (props:ColumnProps) => {
    return (
        <Section>
            <div className={`${props.orientation == "right"? "flex flex-row-reverse": "flex"} `}>
                <div className="textBox">
                    <p className="h3">{props.title?props.title:null}</p>
                    <p className="h4">{props.text}</p>
                </div>
                <Image src={props.image} width={350} height={350} alt={props.imgAlt}/>
            </div>
        </Section>
    )
}

export default TwoColumnWithText
