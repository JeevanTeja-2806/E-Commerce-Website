import React from 'react'
import Title from '../components/Title';
import Newsletter from '../components/Newsletter'
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis illum odio temporibus corporis tempore vero dolorum, quod earum obcaecati possimus facilis aliquid accusantium? Exercitationem commodi tenetur, unde consectetur magnam perspiciatis quasi, animi corrupti qui delectus facere perferendis! Sit aliquid tenetur tempora autem cumque, cupiditate adipisci provident, animi molestiae quos accusamus?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum eaque a ratione iure ut illo itaque atque cupiditate quibusdam minus, ipsam nam eveniet nesciunt quas. Quisquam, nemo? Accusamus inventore molestiae, suscipit tempora quae architecto!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum quae, atque expedita laboriosam earum amet ipsa odit commodi delectus, nostrum repellat quos dolorem tempore dignissimos asperiores enim vel? Dolores!</p>

        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, ducimus minima maxime ipsa iste perspiciatis.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, ducimus minima maxime ipsa iste perspiciatis.</p>
        </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, ducimus minima maxime ipsa iste perspiciatis.</p>
        </div>
      </div>

      <Newsletter/>
    </div>
  )
}

export default About
