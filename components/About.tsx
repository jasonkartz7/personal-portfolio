import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="flex fex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcc3fTIAVY11lKuybFeTrFnN9eKmv77eiRww&usqp=CAU="
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full 
        object-cover md:rounded-lg md:w-21 md:h-31 xl:w-[300px] xl:h-[300px]"
      />
      <div className="space-y-10 px-10 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50"> little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac risus dapibus ex efficitur egestas ac convallis ipsum. Maecenas
          metus enim, fermentum a mollis quis, congue quis felis. Integer sed
          dui lacinia, luctus risus sit amet, rutrum ligula. In eu sapien neque.
          Vestibulum interdum euismod nisi, at lobortis enim mollis ac. Nunc
          consectetur eleifend finibus. Vivamus hendrerit sed sapien a
          condimentum. Nam purus sapien, cursus ac malesuada sit amet, congue
          hendrerit leo. Nullam eu lectus vel dui hendrerit dignissim. Phasellus
          pulvinar sit amet metus quis commodo. Duis venenatis erat sed ligula
          dignissim, in volutpat dui lacinia. Vestibulum hendrerit vitae purus
          ac vulputate. Vivamus posuere placerat tristique. Duis maximus ut
          metus ac mattis. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae;
        </p>
      </div>
    </motion.div>
  );
}
