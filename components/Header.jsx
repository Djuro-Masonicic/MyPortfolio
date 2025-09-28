import Link from "next/link";

import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Header = ({}) => {
  return (
    <header className="py-8  xl:py-12 xl:pt-1 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href={"/"}>
          {/* <h1 className="text-3xl xl:text-4xl font-semibold">
            Djuro <span className="text-accent">.</span>

            
          </h1> */}
           <Image
                        src="/logo3Edited.PNG"
                        priority
                        quality={100}
                        width={400}
                        height={400}
                        color="transparent"
                      
                    
                        className="object-contain bg-transparent w-[20%] h-[20%]  rounded-full"
                      />
        </Link>
        {/* desktop nav & hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
          <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav  */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

      </div>
    </header>
  );
};

export default Header;
