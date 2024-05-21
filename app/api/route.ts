//home page

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ hello: "home page" });
}

// usage

/*  
 const handleTry = async () => {
    console.log("probando click");

    const test = await fetch("/api");
    const data = await test.json();
    console.log();
  }; 
  */
