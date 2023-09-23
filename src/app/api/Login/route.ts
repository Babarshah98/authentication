import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import * as jose from "jose";
import { cookies } from "next/headers";

// export async function GET(request:NextRequest){
//     return new Response('Your are logged in')
// }
export async function POST(request:NextRequest){
    const {username, password}=await request.json()
    if (username=='baber' && password=='12345') {
        return Response.json({message:'success'})
    } 
    
    
    return Response.json({message:"Try Again"},{status:401})
}