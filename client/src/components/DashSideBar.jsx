import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import {HiUser,HiArrowSmRight} from 'react-icons/hi'
import { useLocation } from "react-router-dom";


export default function DashSideBar() {
    const location=useLocation();
    const [tab,setTab]=useState("");
    
    useEffect(()=>{
        const url=new URLSearchParams(location.search)
        const tab=url.get("tab")
        if(tab){
            setTab(tab)
        }
    },[location.search])
  return (
    <Sidebar className="w-full md:w-56">
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Sidebar.Item active={tab==='profile'} icon={HiUser} label={'User'} labelColor='dark'>Profile</Sidebar.Item>
                <Sidebar.Item icon={HiArrowSmRight} className="cursor-pointer">Sign Out</Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}
