"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata, status,link } = blog;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <Link href={link as Url} target="_blank" className="relative block aspect-[368/239]">
          <Image src={mainImage} alt={title} fill className="rounded-lg" />
          {/* Use a ternary operator for the condition */}
          {status === "Completed" ? (
            <p className="absolute right-1 bottom-1 bg-blue-500 opacity-60 text-white p-2 rounded-md hover:bg-primary hover:text-white transition">
              Completed
            </p>
          ) : (
            <p className="absolute right-1 bottom-1 bg-orange-500 opacity-60 text-white p-2 rounded-md hover:bg-orange-600 hover:text-white transition">
              In Progress
            </p>
          )}
        </Link>


        <div className="px-4">
          <div className="flex items-center mb-3.5 mt-7.5">
            <h3 className="line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
              {/* <Link href={`/blog/blog-details`}>{`${title.slice(0, 60)}...`}</Link> */}
              <Link href={link as Url} target="_blank">{title}</Link>
            </h3>

          </div>
          <p className="line-clamp-5">{metadata}</p>
        </div>
      </motion.div>
    </>

  );
};

export default ProjectItem;
