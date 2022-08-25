import React from "react"
import Link from "next/link";
const Layout = ({children})=>{
    const [name, setname ] = React.useState("Akash vhotkar");
    React.useEffect(()=>{
        console.log("all the pages are loaded ", name);
        
   
    },[])
    return (
         <React.Fragment>
            <div>
                <div>
                    <h1>thise is navbar of the page </h1>
                </div>
            <div>
                <h1>thise is layout and first name == {name}</h1>
            </div>
           <Link href={'/home'}>
            <button>get to home page</button>
           </Link>
<Link href={'/'}>
    <button>Home </button>

</Link>
            <div>
                {children}
            </div>
        <div onClick={()=> setname("Shubham Surve")}>
           <button>Change name </button> 
        </div>
            </div>
            <div>
                thise is footer of the page
            </div>
         </React.Fragment>
    )
}
export default Layout;
