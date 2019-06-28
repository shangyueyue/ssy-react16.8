import React, {useState} from 'react';
function UseStatePage(params) {
  const [count, setCount]=useState(0);
  return(
    <div>

      <button onClick={()=>{setCount(count + 1)}}>click me({count})</button>

    </div>
  )
}

export default UseStatePage;