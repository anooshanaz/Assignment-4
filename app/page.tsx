import Image from "next/image";
import Link from "next/link";
import Card from "./card/page";
import Contact from "./contact/page";
import Footer from "./footer/page";
import React from 'react';
import ReactDOM from 'react-dom';



export default function Home() {
  return (
    <>
   <div className="bg-amber-50 text-center text-black font-semibold text-2xl"> <h1>This is the 4th assignment</h1></div>
 {/* <Link href="/about"><h2>Go to about page</h2></Link>
 <Link href="/contact"><button>Go to contact page</button></Link>
 <br /> */}
 <div className="bg-slate-100 w-40 ml-28 text-left mt-5 text-black border-r-8 p-5 border-red-900" >
  <h3 className="text-fuchsia-900 text-left font-semibold text-xs ">Card For Ashir</h3>
 <span className="font-medium  text-xs"><Card Name = "Ashir" Age={17} Rollno="1234" Day="Tuesday"/></span></div>
 <br />
 <div className="bg-slate-100 w-40 ml-28 text-left mt-0 text-black border-r-8 p-5 border-red-900" >
  <h3 className="text-fuchsia-900 text-left font-semibold text-xs ">Card For Huzaifa</h3>
  <span className="font-medium  text-xs"><Card Name = "Huzaifa" Age={10} Rollno="45456" Day="Monday"/></span></div>
 <br />
 <div className="bg-slate-100 w-40 ml-28 text-left mt-0 text-black border-r-8 p-5 border-red-900" >
  <h3 className="text-fuchsia-900 text-left font-semibold text-xs ">Card For Kiran</h3>
  <span className="font-medium  text-xs"> <Card Name = "Kiran" Age={18} Rollno="93717" Day="Friday"/></span></div>
 <br />
 <div className="bg-slate-100 w-40 ml-28 text-left mt-0 text-black border-r-8 p-5 border-red-900" >
  <h3 className="text-fuchsia-900 text-left font-semibold text-xs ">Card For Maheen</h3>
  <span className="font-medium  text-xs"><Card Name = "Maheen"  Age={10} Rollno="42501" Day="Saturday"/></span></div>
 <br />
 <div className="bg-slate-100 w-40 ml-28 text-left mt-0 text-black border-r-8 p-5 border-red-900" >
  <h3 className="text-fuchsia-900 text-left font-semibold text-xs ">Card For Anaya</h3>
  <span className="font-medium  text-xs"> <Card Name = "Anaya" Age={11} Rollno="6798" Day="Sunday"/></span></div>

 {/* <Link href="./footer"><button><h2>Go to footer page</h2></button></Link>
     */}
    </>

  )}