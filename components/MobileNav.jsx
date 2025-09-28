"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
 import  {CiMenuFries} from "react-icons/ci"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";


 const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = ({}) => {

    const pathname = usePathname();

  return <Sheet>
    <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[3vh] text-accent"></CiMenuFries>
    </SheetTrigger>
    <SheetContent className="flex flex-col" >
        {/* logo */}
  
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href={"/"}>
          {/* <h1 className="text-4xl font-semibold">Djuro <span className="text-accent">.</span></h1> */}
               <Image
                                  src="/logo3Edited.PNG"
                                  priority
                                  quality={100}
                                  width={400}
                                  height={400}
                                  color="transparent"
                                
                              
                                  className="object-contain bg-transparent w-[80%] h-[80%] mx-auto outline-dotted  rounded-full"
                                />
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index)=>{
            return <SheetClose asChild key={index}>
              <Link href={link.path} key={index} className={`${link.path === pathname &&  "text-accent border-b-2 border-accent"} text-xl hover:text-accent capitalize transition-all`}>{link.name}</Link>
            </SheetClose> 
          })}
        </nav>
    </SheetContent>
  </Sheet>
}

export default MobileNav