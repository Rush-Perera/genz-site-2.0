"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Application } from '@splinetool/runtime';
import Loader from "../Loader";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Create a reference to the canvas element
  //   const canvas = document.getElementById('canvas3d');
  //   // if (!canvas) {
  //   //   console.error('Canvas element not found.');
  //   //   return;
  //   // }
  //   // Create a new Spline application
  //   const app = new Application(canvas as HTMLCanvasElement);

  //   // Set loading to true when starting to load
  //   setLoading(true);

  //   // Load the Spline scene
  //   app.load('https://prod.spline.design/hr2t7gA0uOGPMPtu/scene.splinecode')
  //   // app.load('https://prod.spline.design/YtnYKZlQOmQjUVIM/scene.splinecode')
  //     .then(() => {
  //       // Set loading to false when the component has finished loading
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       // Handle any errors during loading
  //       console.error('Error loading Spline scene:', error);
  //       // Set loading to false in case of an error
  //       setLoading(false);
  //     });

  //   // Cleanup function to destroy the Spline application when the component unmounts
  //   return () => {
  //     // app.destroy();
  //   };

  // }, []);

  useEffect(() => {
    // Create a reference to the canvas element
    const canvas = document.getElementById('canvas3d');

    // Create a new Spline application
    const app = new Application(canvas as HTMLCanvasElement);

    // Load the Spline scene
    app.load('https://prod.spline.design/YtnYKZlQOmQjUVIM/scene.splinecode');
    // app.load('https://prod.spline.design/hr2t7gA0uOGPMPtu/scene.splinecode');


    // Cleanup function to destroy the Spline application when the component unmounts
    return () => {
      // app.destroy();
    };

  }, []);

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-10 xl:pt-35">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                Transforming Ideas into Reality
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Let's Make Your Dream a   {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  Reality
                </span>
              </h1>
              <p>
                We are a software development company that offers a wide range of solutions for various platforms. Whether you need a web, iOS, Android, desktop, or macOS application, we have the expertise and experience to deliver high-quality products that meet your requirements and expectations.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get Started
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  Contact us for a free consultation
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute  bottom-0 z-110"
                />
                <div className=" relative aspect-[700/600] w-full">
                  {/* <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  /> */}

                    {/* {loading ? (
                      // Render a loading indicator while the component is loading
                      <Loader/>
                    ) : (
                      // Render your Spline component when it has finished loading
                      // <canvas id="canvas3d"></canvas>
                      // <></>
                    )} */}
                      <canvas id="canvas3d"></canvas>

                      

                 

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
