import React from 'react'
import { Typography, Button } from '@mui/material'
import { useState } from 'react'
const Couter = () => {
  
    var[num,setCount]=useState(0)
    return (
    <div>

      <Typography variant='h3'>
      count:{num}
      </Typography>
      <Button variant='contained'color='success' onClick={()=>{setCount(num+1)}}>
    +
      </Button> &nbsp;
      <Button variant='contained'color='error' onClick={()=>{setCount(num-1)}}>
    -
      </Button> &nbsp;
      
    </div>
  )
}

export default Couter
