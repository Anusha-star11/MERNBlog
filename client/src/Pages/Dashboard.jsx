import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSideBar from "../components/DashSideBar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
import DashComments from "../components/DashComments";
import DashboardComp from "../components/DashboardComp";

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
      {tab === "posts" && <DashPosts/>}
      {tab === "users" && <DashUsers/>}
      {tab === "comments" && <DashComments/>}
      {tab === "dash" && <DashboardComp/>}
    </div>
  )
}
