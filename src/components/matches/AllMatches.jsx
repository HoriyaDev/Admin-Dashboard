import React from 'react'
import Completed from './Completed'
import Confirmed from './Confirmed'
import { AllMatche } from '../../utils/constants'
import { GrLocation } from "react-icons/gr";

const AllMatches = () => {
  return (
    <>
    <div className='w-[380px] mt-5 bg-blue-100 p-3 rounded-xl mx-auto pb-5' >
        <div className='flex   '>
            <h1>Friday 30 March | 10:00 AM</h1>
            <GrLocation  size={'20px'} className='ml-4 text-blue-600'/>
            <p className='ml-2'>0.3Km - London</p>
        </div>
        <div className='flex justify-evenly items-center mt-5'>
        { AllMatche.map((item , index) =>(
            <div key={index} >
             
                <div >
                    <img src={item.src}  className='w-16 h-16 rounded-full object-cover mx-auto '/>
                    <p className='text-base'>{item.name}</p>
                    <p className='text-base'>{item.percentage}</p>
                </div>
               

            </div>

        ))

        }
       
        </div>
        </div>


        <div className='w-[380px] mt-5 bg-blue-100 p-3 rounded-xl mx-auto' >
        <div className='flex   '>
            <h1>Friday 30 March | 10:00 AM</h1>
            <GrLocation  size={'20px'} className='ml-4 text-blue-600'/>
            <p className='ml-2'>0.3Km - London</p>
        </div>
        <div className='flex justify-evenly items-center mt-5'>
        { AllMatche.map((item , index) =>(
            <div key={index} >
             
                <div >
                    <img src={item.src}  className='w-16 h-16 rounded-full object-cover mx-auto '/>
                    <p className='text-base'>{item.name}</p>
                    <p className='text-base'>{item.percentage}</p>
                    
                </div>
                

            </div>

        ))

        }
       
        </div>
        <p className='text-left mt-3'><span className='font-semibold'>Winning Ratio:</span> 25% - 80%</p>
                <p className='text-left'>Male Only</p>
               
        </div>

        <div className='w-[380px] mt-5 bg-blue-100 p-3 rounded-xl mx-auto' >
        <div className='flex   '>
            <h1>Friday 30 March | 10:00 AM</h1>
            <GrLocation  size={'20px'} className='ml-4 text-blue-600'/>
            <p className='ml-2'>0.3Km - London</p>
        </div>
        <div className='flex justify-evenly items-center mt-5'>
        { AllMatche.map((item , index) =>(
            <div key={index} >
             
                <div >
                    <img src={item.src}  className='w-16 h-16 rounded-full object-cover mx-auto '/>
                    <p className='text-base'>{item.name}</p>
                    <p className='text-base'>{item.percentage}</p>
                </div>
               

            </div>

        ))

        }
       
        </div>
        </div>

        <Completed />
        <Confirmed />
    </>
  )
}

export default AllMatches