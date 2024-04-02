import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import {HiUser,HiArrowSmRight, HiDocumentText, HiOutlineUserGroup, HiAnnotation} from 'react-icons/hi'
import { Link, useLocation} from "react-router-dom";
import {  useSelector } from "react-redux";



export default function DashSideBar() {
    const location=useLocation();
    const [tab,setTab]=useState("");
    const {currentUser}=useSelector((state)=>state.user);
    
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
            <Sidebar.ItemGroup className="flex flex-col gap-1">
                <Link to="/dashboard?tab=profile">
                <Sidebar.Item active={tab==='profile'} icon={HiUser} label={currentUser.isAdmin ? "Admin" : "User"} labelColor='dark' as="div">Profile</Sidebar.Item>
                </Link>
                {currentUser.isAdmin && <Link to='/dashboard?tab=posts'>
                    <Sidebar.Item active={tab === 'posts'} icon={HiDocumentText}>
                        Posts
                        </Sidebar.Item></Link>}

                {currentUser.isAdmin && <Link to='/dashboard?tab=users'>
                    <Sidebar.Item active={tab === 'users'} icon={HiOutlineUserGroup}>
                        Users
                        </Sidebar.Item></Link>}

                {currentUser.isAdmin && <Link to='/dashboard?tab=comments'>
                    <Sidebar.Item active={tab === 'comments'} icon={HiAnnotation}>
                        Comments
                        </Sidebar.Item></Link>}
                <Sidebar.Item icon={HiArrowSmRight} className="cursor-pointer">Sign Out</Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}
