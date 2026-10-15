import React from 'react'

function CounterHeader({titleHeader}) {
    // console.log(titleHeader);
    
  return (
    <h2 className='text-primary'>
    {titleHeader}
    </h2>
  )
}

export default CounterHeader