import React, { useEffect , useState} from "react";
import About from "../components/about";
import Image from "next/image";
import { FaSearch} from 'react-icons/fa';
import {useRequest} from 'redux-query-react';
import {getusersRequest, getUsers} from '../store/actions/user';
import { useSelector } from "react-redux";

const Home = ()=>{
    const [show ,setshow] =  useState(true);
    const users = useSelector(getUsers);
    
    useRequest(getusersRequest());
    const myLoader = ({ src, width, quality }) => {
        return `https://example.com/${src}?w=${width}&q=${quality || 75}`
      }
    return (
        <React.Fragment>
            <h1> thise is first next app</h1>
     <button onClick={()=>setshow(!show)}>Toggle</button>
     <div className="search-box">
        <FaSearch className="search-icon"/>
     </div>
     <div className="outer">
        <div className="inner">

        </div>
     </div>
        </React.Fragment>

    )
}

export default  Home;
