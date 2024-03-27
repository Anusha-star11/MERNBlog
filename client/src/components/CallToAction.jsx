import { Button } from "flowbite-react";


export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
        <div className="flex-1 flex flex-col justify-center ">
            <h1 className="text-2xl">Want to learn Javascript?</h1>
            <p className="text-gray-500 my-2">Refer to the below resources</p>
            <Button gradientDuoTone='purpleToPink' className="rounded-tl-xl rounded-bl-none">Learn Javascript</Button>


        </div>
        <div className="flex-1 p-7 ">
            <img src="https://th.bing.com/th/id/OIP.GtJcYCsAxne-0sVEbX2kigHaDt?w=330&h=174&c=7&r=0&o=5&pid=1.7" className="object-cover  max-h-[300px]"/>
        </div>
    </div>
  )
}
