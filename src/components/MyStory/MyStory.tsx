import React from 'react'
import Image from 'next/image'
import myStory1 from '../../../public/story1.jpg'
import myStory2 from '../../../public/story2.jpg'

const MyStory = () => {
  return (
    <div className='container p-4 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
            <div className='relative h-fit w-fit '>
                <Image src={myStory1} alt="myStory" width={250} height={250} className='object-cover border-4 border-slate-700' />
                <Image src={myStory2} alt="myStory" width={100} height={250} className='object-cover absolute top-1/2 left-1/2 border-2 hidden md:block' />
            </div>
        </div>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptate.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptate.</p>
        </div>
    </div>
  )
}

export default MyStory