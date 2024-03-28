import { Alert, Button, Textarea } from "flowbite-react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function CommentSection({postId}) {
    const {currentUser} =useSelector((state)=>state.user)
    const [comment,setComment]=useState("")
    const [commentError,setCommentError]=useState(null)
    const [comments,setComments]=useState([])
    

    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(comment.length>200){
            return;
        }
        try{
            const res=await fetch('/api/comment/create',{
                method:'POST',
                headers:{
                    'Content-Type':"application/json",
                },
                body:JSON.stringify({content:comment,postId,userId:currentUser._id}),
                
            })
            const data=await res.json();
            if(res.ok){
                setComment("");
                setCommentError(null);
                setComments([data, ...comments]);

            }


        }catch(error){
            setCommentError(error.message)
        }

    }
  return (
    <div className="max-w-2xl mx-auto w-full p-3">
    {currentUser ? (
        <div className="flex item-center my-5 gap-1 text-gray-500 text-sm">
            <p>Signed in as:</p>
            <img src={currentUser.profilePicture} alt="" className="h-5 w-5 rounded-full object-cover"/>
            <Link to={'/dashboard?tab=profile'} className="text-xs text-cyan-600 hover:underline">
            @{currentUser.username}
            </Link>
        </div>
    ) : (
        <div className="text-xs my-5 gap-1 flex text-teal-500">
            You must be signed in to comment.
            <Link to={'/sign-in'} className="text-blue-500 hover:underline">Sign in </Link>
        </div>
    )}
    {currentUser && (
        <form onSubmit={handleSubmit} className="border border-teal-500 rounded-md p-3">
            <Textarea
            placeholder="Add a comment..."
            row='3'
            maxlength='200'
            onChange={(e)=>setComment(e.target.value)}
            value={comment}/>
            <div className="flex justify-between items-center mt-5">
                <p className="text-gray-500 text-xs">{200-comment.length} charecters remaining</p>
                <Button outline type="submit" gradientDuoTone="purpleToBlue">Submit</Button>
            </div>
            {commentError && (
                <Alert color="failure" className="mt-5">{commentError}</Alert>
            )}

        </form>
    )}
    </div>
    
  )
  
}
