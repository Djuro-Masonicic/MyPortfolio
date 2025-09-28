// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const Photo = ({}) => {
//   return (
//     <div className="w-full h-full relative">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{
//           opacity: 1,
//           transition: { delay: 1.8, duration: 0.4, ease: "easeIn" },
//         }}
//       >
//         <div className=" w-[298px] h-[298px] xl:w-[398px] xl:h-[398px] mix-blend-normal border rounded-full flex justify-center items-center">
//           <Image
//             src="/image-from-rawpixel-id-20955307-png.png"
//             priority
//             quality={100}
//             width={800} // just a placeholder intrinsic size
//             height={800}
//             alt=""
//             className="object-contain w-[70%] h-[70%]"
//           ></Image>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Photo;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
      >
        <div className="relative w-[298px] h-[298px] xl:w-[398px] xl:h-[398px] rounded-full 
        flex justify-center items-center overflow-hidden
        xl:p-5
        ">
          {/* Rotating broken ring (foreground) */}
          <motion.svg
            className="absolute  text-accent pointer-events-none"
            viewBox="0 0 100 100"
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear", delay:2 }}
          >
            {/* main broken ring */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="10.6 24.7"   // dash length + gap length -> 'broken' look
              strokeLinecap="round"
            />
          </motion.svg>

          {/* Optional: subtle counter-rotating ring for depth
          <motion.svg
            className="absolute inset-0 text-accent/50 pointer-events-none"
            viewBox="0 0 100 100"
            aria-hidden
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray="4 12"
              strokeLinecap="round"
            />
          </motion.svg> */}

          {/* Your content */}
          <Image
            src="/ProfilePic4EditedBG2.PNG"
            priority
            quality={100}
            width={800}
            height={800}
            color="transparent"
          
        
            className="object-contain bg-transparent w-[80%] h-[80%]  xl:w-[90%] xl:h-[90%] rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
