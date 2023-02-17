import React from 'react'
import {TwitterBlur,LinkedinBlur,InstagramBlur} from '../assets'


const Card = ({team}) => {
  return (
    <div  className='z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2  my-4 max-w-[300px]'>
        <img src={team.Image} alt="" className="h-60  w-full rounded-2xl object-cover" />
        <div className='flex flex-row justify-between px-2  items-center'>
            <div className='flex flex-col gap-2'>
                <p className='text-sm text-[#006774]'>{team.name}</p>
                <p className='text-xs'>{team.title}</p>
            </div>
            <div className='flex flex-row gap-2'>
                <img src={LinkedinBlur} alt="" className='text-xs' />
                <img src={TwitterBlur} alt="" className='text-xs'/>
                <img src={InstagramBlur} alt="" className='text-xs'/>
            </div>

        </div>
    </div>
  )
}

export default Card