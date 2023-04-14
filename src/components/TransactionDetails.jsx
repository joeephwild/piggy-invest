import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'

export default function TransactionDetails() {
    return (
        <div>
            <div className='flex justify-between'>
                <h1 className='font-bold text-[28px]'>Transactions</h1>
                <div className='flex items-center space-x-2'>
                    <p className='text-[#FF7034]'>More</p>
                    <MdArrowForwardIos size={25} color='#FF7034' />
                </div>
            </div>
            <div className='min-h-[280px] bg-[#000] mt-8 rounded'>

            </div>
        </div>
    )
}

