import CommonChallenges from '@/components/Services/CommonChallenges'
import React from 'react'


const challengesData={
    heading: "Our Key Challenges",
    challenges: [
      {
        title: "Sustainability",
        text: "Focusing on creating eco-friendly solutions to reduce environmental impact.",
        image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        imgAlt: "An illustration of hands holding a green plant representing sustainability",
        orientation: "left",
      },
      {
        title: "Innovation",
        text: "Driving innovation through cutting-edge technology and creative solutions.",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        imgAlt: "A futuristic representation of technology and innovation",
        orientation: "right",
      },
    ],
  };
  

const WebDevelopment = () => {
    return (
        <div className='mt-25'>
            <CommonChallenges challenges={challengesData.challenges} heading={challengesData.heading}/>
        </div>
    )
}

export default WebDevelopment
