import React, {useState, useEffect, useRef} from 'react';
function UseStatePage(params) {
  
  const [page, SetPage] = useState(1);
  useEffect(()=>{
    console.log(page);
  },[page]);
  const onPrevPage = ()=>{
    SetPage(currentPage=>currentPage-1)
  }

  const onNextPage = ()=>{
    SetPage(currentPage=>currentPage+1)
  }

  return (
    <div>
      <button onClick={onPrevPage}>
        上一页
      </button>
      <button onClick={onNextPage}>
       上一页
      </button>
    </div>
  );
}

export default UseStatePage;