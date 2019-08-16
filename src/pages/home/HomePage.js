import React from 'react';
import { Link }from 'react-router-dom';
import Popover from '@/components/Popover';

const PopoverContent = ()=>{
  return(
    <div>this is content</div>
  )
}
function HomePage() {
  
  return (
    <div>
      <h1>this is home page</h1>
      <div >show tip</div>
      <Popover content={PopoverContent()}>
        <button>click me</button>
      </Popover>
    </div>
  );
}

export default HomePage;
