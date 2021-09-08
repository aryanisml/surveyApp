import { useEffect, useState } from 'react'
import styled from 'styled-components'

  
const Timer =({limitTimeinHrsMinSec})=>{

 
const {hours=0, minutes=0, seconds=0} = limitTimeinHrsMinSec;
const [[hrs, min, sec], setTime]= useState([hours,minutes,seconds])

const tick =()=>{
    if(hrs === 0 && min ===0 && sec===0){
      reset();
    }else if (min===0 && sec===0){
        setTime([hrs-1, 59, 59]);
    }else if(sec===0){
        setTime([hrs, min-1, 59]);
    }else {
        setTime([hrs, min, sec-1]);
    }

}
const reset =()=>{
setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
}

useEffect(()=>{
const timeId = setInterval(()=> tick(), 1000);
return ()=>clearInterval(timeId);

});



return  <>
  <Section>
      <p>
          {`${hrs.toString().padStart(2,0)}:${min.toString().padStart(2,0)}:${sec.toString().padStart(2,0)}`}
      </p>
  </Section>
</>

}

const Section = styled.div`
display: flex;
    justify-content: flex-end;
    align-items: flex-end;
color:palevioletred;
font-size:2rem;
`
export default Timer;