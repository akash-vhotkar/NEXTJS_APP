import {useEffect, useState} from 'react';
import Image from 'next/image'
const About = ()=>{
    const [name ,setname] = useState("akash vhotkar");
    return (
        <>
        <h1> About page</h1>
        {name}
        <div className='box'>
            <h1>Thise is my box</h1>
            <Image
      loader={"Loading...."}
      src="https://www.w3schools.com/css/paris.jpg"
      alt="Picture of the author"
      width={200}
      height={200}
    />
        </div>
        </>
    )
}

export default About;
