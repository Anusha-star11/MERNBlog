import { TextInput } from "flowbite-react"
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export default function SearchInMobile() {
    const [searchTerm,setSearchTerm]=useState("")
    const location=useLocation();
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault()
        const urlParams=new URLSearchParams(location.search)
        urlParams.set("searchTerm", searchTerm)
        const searchQuery=urlParams.toString()
        navigate(`/search?${searchQuery}`)
    
    
      }
  return (
    <div> <form onSubmit={handleSubmit}>
    <TextInput value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} type="text" placeholder="Search..." rightIcon={AiOutlineSearch} className="hidden lg:inline"/>
</form></div>
  )
}
