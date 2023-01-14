import React from 'react'

const StatsComponent = (props) => {
  return (
    <div className='block px-8 text-center'>
    <h3 className="text-[#ffe045] text-2xl font-bold">
      {props.title}
    </h3>
    <p className="text-black">
      {props.textbody}
    </p>
  </div>
  )
}

export default StatsComponent