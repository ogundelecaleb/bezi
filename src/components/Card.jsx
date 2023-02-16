import React from 'react'
import {TwitterBlur,LinkedinBlur,InstagramBlur} from '../assets'


const Card = ({team}) => {
  return (
    <div className='z-10 bg-white drop-shadow-md overflow-hidden  mr-2  my-4'>
        <img src={team.Image} alt="" className="h-40 w-full rounded-2xl object-cover mb-4" />
        <div className='flex flex-row justify-between px-2  items-center'>
            <div className='flex flex-col items-center gap-2'>
                <p>{team.name}</p>
                <p>{team.title}</p>
            </div>
            <div className='flex flex-row gap-2'>
                <img src={LinkedinBlur} alt="" />
                <img src={TwitterBlur} alt="" />
                <img src={InstagramBlur} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Card