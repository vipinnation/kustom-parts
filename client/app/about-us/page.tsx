import Head from "next/head";
import React from "react";

type Props = {};

const AboutUsPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>About - Kustom Parts: Biker Bred , Bike Baked</title>
        <meta
          name="description"
          content="Kustom Parts: Biker Bred , Bike Baked"
        />
      </Head>
      <section className="text-gray-600 body-font mx-5">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              About Us
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Kustom Parts
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Hello everyone! It's great to have you on this website, and
              fantastic that you are taking interest in who we are and what we
              do.
              <br />
            </p>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base capitalize">
              <br />
              <span className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 block">
                What We Do
              </span>
              KustomParts.in is more than a shopping website, we also have a
              fully free consultancy service for your vehicle and their
              parts-related queries. Spare-parts is the core category of our
              store however we also provide some custom parts for your vehicle.
              We will help you by providing accurate parts for your bike,
              accessories at fair prices, and free consultancy too.
              <br />
            </p>

            <p className="lg:w-2/3 mx-auto leading-relaxed text-base capitalize">
              <br />
              <span className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 block">
                Contact Us
              </span>
              If you face any problem with our service, <br />
              just contact to any of our representative, and we will try our
              best to resolve that.
              <br />
              <br />
              <a
                className="text-indigo-500 ml-2 lowercase"
                href="mailto:partskustom@gmail.com"
              >
                partskustom@gmail.com
              </a>
              <br />
              <a className="text-indigo-500">9672313305</a>
              <br />
              <p className="leading-normal my-5">
                Sector No. 3, MP Coloney , BKN 334004
              </p>
            </p>

            <div className="p-2 w-full pt-8   border-t border-gray-200 text-center">
              <span className="inline-flex">
                <a
                  className="ml-4 text-gray-900"
                  href="https://www.instagram.com/kustomparts.in/"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Share Your Views With Us and Make Us Better
          </p>
        </div>
        <form>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AboutUsPage;
