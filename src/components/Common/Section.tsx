import React from 'react'

const Section = ({children}:any) => {
    return (
        <section className='py-8'>
            <div className="container">
            {children}
            </div>
        </section>
    )
}

export default Section
