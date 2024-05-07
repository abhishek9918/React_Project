import React, {useEffect, useState} from "react";

function About() {
  const [list, setList] = useState([]);
  const fetData = () => {
    return fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setList(data.users);
        console.log(data.users);
      });
  };
  useEffect(() => {
    fetData();
  }, []);

  return (
    <>
      <div className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] dark:text-white">
                  Our Recent News
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          {list.map((e) => (
            <div key={e.id} className="flex flex-wrap -mx-4">
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="w-full mb-10">
                  <div className="mb-8 overflow-hidden rounded">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                      alt="image"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">
                      Dec 22, 2023
                    </span>
                    <h3>
                      <a className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                        Meet AutoManage, the best AI management tools
                      </a>
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="w-full mb-10">
                  <div className="mb-8 overflow-hidden rounded">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-02.jpg"
                      alt="image"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">
                      Mar 15, 2023
                    </span>
                    <h3>
                      <a className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                        How to earn more money as a wellness coach
                      </a>
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="w-full mb-10">
                  <div className="mb-8 overflow-hidden rounded">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-03.jpg"
                      alt="image"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">
                      Jan 05, 2023
                    </span>
                    <h3>
                      <a className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                        The no-fuss guide to upselling and cross selling
                      </a>
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
