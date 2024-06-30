import React from 'react'

const FollowBar = () => {
  return (
    <div className='px-2 py-4 hidden lg:block'>
        <div className='bg-neutral-800 rounded-xl p-4'>
            <h2 className='text-white text-xl font-semibold'>
                Who to follow
            </h2>
            <div className='flex flex-col gap-5 mt-4'>
                {/* TODO LIST */}
            </div>
        </div>
    </div>
  )
}

export default FollowBar