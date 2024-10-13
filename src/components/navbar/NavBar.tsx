"use client"

import Link from 'next/link'
export default function Navbar ()  {
  

  return (
    <nav className="bg-red-900 text-white shadow-md flex ">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/"  className="text-2xl font-bold">
         Mubashir
       
    </Link>
        </div>
        <div className="flex flex-row  justify-center items-center mx-11 space-x-11" >
         
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            
              <Link href="/blogs" className="hover:text-gray-300">
                Blogs
              </Link>
           
        </div>
      
    </nav>
  );
};

 
