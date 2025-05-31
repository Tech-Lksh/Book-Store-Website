import React from 'react'
import React from "../../public/list.json";
import { log } from 'three/tsl'

const Freebook = () => {
    let filterData = list.filter((data) => data.category === "Free");
    console.log(filterData);
  return (
    <>
    <div>
        
    </div>
    </>
  );
}

export default Freebook
