import { useState } from "react";


const PlayingWithArrays = () => {
    const [myArray, setMyArray] = useState([1,  3, 5]);
    const [item, setItem] = useState();
    const [index, setIndex] = useState();
const addArary = (arrItem,arrIndex) => {

    const newArr=[...myArray.slice(0,arrIndex),arrItem,...myArray.slice(arrIndex)];
    setMyArray(newArr);
   

};


    return(
      <>
      <p>Data {myArray.toString()}</p>
      <label>Itemr:</label>
      <input type="text"  onChange={e=>setItem(e.target.value)}/>
      <label>index:</label>
      <input type="number" onChange={function(e){setIndex(parseInt(e.target.value))}}/>
      <br/>
      <input type="button" value="Add" onClick={()=>{addArary(item,index)}}/>
      <input type="button" value="Update"/>
        <input type="button" value="Delete"/>
        

      </>  
    );
};
export default PlayingWithArrays;