import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSideBar from "../components/DashSideBar";
import DashProfile from "../components/DashProfile";

export default function Dashboard() {
  const location=useLocation();
  const [tab,setTab]=useState("");
  useEffect(()=>{
    const url=new URLSearchParams(location.search)
    const tab=url.get("tab");
    if(tab){
      setTab(tab)
    }
    
  },[location.search])
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div>
        <DashSideBar/>
      </div>
      {tab==='profile' && <DashProfile/>}
    </div>
  )
}
