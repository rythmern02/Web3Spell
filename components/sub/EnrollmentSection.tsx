import React from 'react'

const EnrollmentSection = ({courseDetail}: any) => {
  return (
    <div>
        <div className='mt-5 border border-gray-900 rounded-lg p-2 text-center sm:mt-5'>
            <h2 className='text-white '>Summon arcane knowledge of the digital age! Our interactive courses weave enchantments in Web3, Blockchain, AI, UI/UX, and other potent spells.</h2>
            <button className='cursor-pointer p-2 w-full bg-purple-500 text-white rounded-lg text-[16px] mt-2 hover:bg-purple-700'> Enroll Now</button>
        </div>
    </div>
  )
}

export default EnrollmentSection