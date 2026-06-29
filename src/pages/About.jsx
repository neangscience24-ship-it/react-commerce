import React from 'react'

function About() {
    return (
        <div className='max-w-[90%] lg:max-w-5xl mx-auto my-10 font-jost'>
            <div className='grid grid-cols-1 items-start lg:grid-cols-2 gap-4'>
                <div className=''>
                    <img className='rounded-md w-full h-full' src="./about.jpg" alt="" />
                </div>
                <div className=''>
                    <h1 className='text-3xl font-bold mb-2'>Our Story</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quos, perspiciatis eligendi minima veritatis a corrupti est quam ipsam, fugiat fuga dicta. Suscipit nobis quibusdam est adipisci aliquid ad quis culpa! Commodi nisi, similique repellendus enim cumque ipsam fuga dignissimos magnam at asperiores odit quod ipsa provident molestias molestiae quam ratione rem harum officiis velit voluptates porro? Cupiditate, quaerat omnis ipsum ipsa impedit sunt repellat, enim assumenda dolore aliquid nisi eaque in atque quibusdam maxime. Rem unde omnis distinctio, earum molestiae necessitatibus fugit, qui provident consequatur quas nisi, illum accusantium a doloribus ullam. Vitae laboriosam tempora dolore, illum molestiae impedit.</p>
                </div>
            </div>
        </div>
    )
}

export default About