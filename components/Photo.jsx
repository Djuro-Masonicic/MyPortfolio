"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = ({}) => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.8, duration: 0.4, ease: "easeIn" },
        }}
      >
        <div className=" w-[298px] h-[298px] xl:w-[398px] xl:h-[398px] mix-blend-normal border rounded-full flex justify-center items-center">
          <Image
            src="/image-from-rawpixel-id-20955307-png.png"
            priority
            quality={100}
            width={800} // just a placeholder intrinsic size
            height={800}
            alt=""
            className="object-contain w-[70%] h-[70%]"
          ></Image>
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
