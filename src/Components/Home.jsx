import React from "react";

function Home() {
  return (
    <>
      {/* <div className="bg-gray-100">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Welcome to My Simple Tailwind Design
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">Section 1</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet nulla sit amet mi consequat mollis.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">Section 2</h2>
              <p>
                Integer pulvinar leo nec nibh bibendum, vel elementum leo
                faucibus. In convallis dolor vitae libero tempor, at consectetur
                velit blandit.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">Section 3</h2>
              <p>
                Quisque laoreet justo id ligula hendrerit, vel feugiat leo
                sollicitudin. Sed viverra, elit nec interdum vestibulum.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div class="relative bg-white dark:bg-dark pt-[120px] pb-[110px] lg:pt-[150px]">
        <div class="container mx-auto">
          <div class="flex flex-wrap items-center -mx-4">
            <div class="w-full px-4 lg:w-5/12">
              <div class="hero-content">
                <h1 class="mb-5 text-4xl font-bold !leading-[1.208] text-black sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  The Greatest <br />
                  Journey Of Online <br />
                  Payment.
                </h1>
                <p class="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                  With TailGrids, business and students thrive together.
                  Business can perfectly match their staffing to changing demand
                  throughout the dayed.
                </p>
                <ul class="flex flex-wrap items-center">
                  <li>
                    <a
                      href="javascript:void(0)"
                      class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white rounded-md bg-primary hover:bg-blue-dark lg:px-7"
                    >
                      Get Started
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="hidden px-4 lg:block lg:w-1/12"></div>
            <div class="w-full px-4 lg:w-6/12">
              <div class="lg:ml-auto lg:text-right">
                <div class="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/hero/hero-image-01.png"
                    alt="hero"
                    class="max-w-full lg:ml-auto"
                  />
                  <span class="absolute -left-8 -bottom-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
