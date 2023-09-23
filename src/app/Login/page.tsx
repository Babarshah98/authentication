import Link from "next/link";

export default function Home() {
    return(
        <>
        <div className=" item-center text-center pt-10">
            <div className="mb-3 ">
            <input placeholder="Username" type="text" className="border">
            

            
            </input>
            </div>
            <div className="">
            <input placeholder="Password" type="text">
            </input>
            </div>

        </div>
        <div>
        <Link href='/' className="flex  items-center justify-between ">
        Go to Home
        </Link>
        
        </div>
        

        </>
    )
}