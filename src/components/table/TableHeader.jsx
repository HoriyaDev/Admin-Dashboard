

import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const TableHeader = ({heading}) => {


    return (
        <>

            <div className='flex justify-between items-center p-4'>
                <h1 className='text-lg font-bold'>{heading}</h1>
                <div className='relative ml-auto mr-6'>
                    <input
                        type='search'
                        className='w-96 pl-10 pr-4 py-2 border border-blue-300 rounded-3xl focus:outline-none'
                        placeholder='Search any player by name'
                    />
                    <IoSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
                </div>
                <div className='relative'>
                    <h1 className='bg-white w-36 p-2 rounded-full text-sm border border-blue-300'>show 10 rows</h1>
                    <RiArrowDropDownLine size={'40px'} className='absolute inset-y-0 right-3' />
                </div>
            </div>

        </>
    )
}

export default TableHeader