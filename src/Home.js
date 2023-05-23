import React from "react";
import axios from 'axios'
import {useEffect, useState} from 'react'

function Home() {
   const[entry,setEntry] = useState([]); 

   useEffect(()=>{
    axios.get('https://api.publicapis.org/entries')
     .then(response=>{
        console.log(response.data.entries);
        setEntry(response.data.entries);
      })
  },[]);

  return (
    <>

    <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    </>
  );
}

export default Home;