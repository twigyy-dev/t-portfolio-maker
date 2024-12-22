import React from 'react'
import Section from '../Common/Section'
import Image from 'next/image'

type ColumnProps = {
    title: string,
    text: string,
    image: any,
    imgAlt: string,
    orientation: string,
}

const TwoColumnWithText = (props:ColumnProps) => {

    console.log(props.orientation)

    return (
            <div className={`${props.orientation == "right" ? "flex flex-row-reverse text-right": "flex"} `}>
                <div className={`textBox h-max ${props.orientation == "right" ? "border-r-primary border-r-[10px] pr-5":"border-l-primary border-l-[10px] pl-5" }`}>
                    <p className="h3">{props.title?props.title:null}</p>
                    <p className="h4">{props.text}</p>
                </div>
                <div className='w-[350px] h-[350px]'>
                <img src={props.image} width={350} height={350} alt={props.imgAlt} className='max-h-full'/>
                </div>
            </div>
    )
}

export default TwoColumnWithText
