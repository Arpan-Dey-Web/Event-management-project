import React from "react";
import Marquee from "react-fast-marquee";

const JoinEvent = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        <div className="grid  grid-cols-2 gap-5 p-10 border-b-2 border-b-white lg:border-b-0 lg:border-r-2 border-r-white">
          <div>
            <button className="border hover:border-amber-50 hover:border-2 rounded-full  p-8 bg-[#3A324A] hover:bg-[#625170]">
              <img
                className="w-20 "
                src="https://cdn-icons-png.flaticon.com/128/2377/2377415.png"
                alt=""
              />
            </button>

            <div>
              <h1 className="font-bold text-2xl font pt-2">Build Networking</h1>
            </div>
          </div>
          <div>
            <button className="border hover:border-amber-50 hover:border-2 rounded-full  p-8 bg-[#3A324A] hover:bg-[#625170]">
              <img
                className="w-20"
                src="https://cdn-icons-png.flaticon.com/128/864/864837.png"
                alt=""
              />
            </button>

            <div>
              <h1 className="font-bold text-2xl font pt-2">Lot’s Of Fun</h1>
            </div>
          </div>
          <div>
            <button className="border hover:border-amber-50 hover:border-2 rounded-full  p-8 bg-[#3A324A] hover:bg-[#625170]">
              <img
                className="w-20"
                src="https://cdn-icons-png.flaticon.com/128/18853/18853372.png"
                alt=""
              />
            </button>

            <div>
              <h1 className="font-bold text-2xl font pt-2">Meet New People</h1>
            </div>
          </div>
          <div>
            <button className="border hover:border-amber-50 hover:border-2 rounded-full  p-8 bg-[#3A324A] hover:bg-[#625170]">
              <img
                className="w-20"
                src="https://cdn-icons-png.flaticon.com/128/2298/2298249.png"
                alt=""
              />
            </button>

            <div>
              <h1 className="font-bold text-2xl font pt-2">
                Experience Speakers
              </h1>
            </div>
          </div>
        </div>
        {/* second setion */}
        <div className="p-10">
          <h1 className="text-4xl font-bold text-center font heading-fonts">
            WHY YOU SHOULD JOIN THIS EVENT
          </h1>
          <p className="mt-5 paragraph">
            Joining an event is more than just attending—it’s stepping into a
            world of new experiences, fresh connections, and boundless
            inspiration. Whether it’s a conference, workshop, art show, or
            sports game, every event offers a unique chance to engage with
            others who share your interests and passions. It's a live portal to
            knowledge, culture, and creativity that no screen can replace. You
            get to meet industry experts, learn hands-on skills, or simply enjoy
            vibrant moments with friends or like-minded strangers. Events ignite
            curiosity, spark ideas, and often leave you with stories to tell and
            memories that linger. They can boost your confidence, expand your
            network, and even open doors to unexpected opportunities. In today’s
            digital world, human connection is more valuable than ever—and
            events are the perfect setting to reclaim it. So don’t just stay
            behind the scenes—step out, show up, and be a part of something
            alive. Let the energy of the crowd, the rhythm of interaction, and
            the magic of real-life moments move you. When you join an event,
            you’re not just a spectator—you become a thread in the living fabric
            of community, culture, and change. It’s your moment. Claim it.
            Celebrate it. Live it.
          </p>
          <button className="btn main-btns mt-5 font">Join Now</button>
        </div>
      </div>

      <div className="my-10">
        <h1 className="font-bold text-3xl text-center mb-10 font">
          Our Client Review
        </h1>
        <Marquee pauseOnHover={true}>
          {/* Testimonial 1 */}
          <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 mr-5">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://i.ibb.co.com/3Y0V54g8/download-4.jpg"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">James Holloway</h4>
                  <span className="text-xs dark:text-gray-600">6 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M463.1 187.6c-5.3-16.4-20.1-28.4-37.4-30l-104.3-9-41.5-95.3c-6.5-15.1-21.2-24.7-37.3-24.7s-30.8 9.6-37.3 24.7l-41.5 95.3-104.3 9c-17.3 1.5-32.1 13.5-37.4 30-5.3 16.4.3 34.2 14.2 45.3l80 66.7-23.8 102.4c-4 17.2 3.1 35.2 17.7 45.4 14.6 10.2 33.7 11.3 49 2.9L256 403.5l91.8 48.2c6.9 3.6 14.3 5.3 21.6 5.3 9.4 0 18.8-2.9 26.9-8.5 14.6-10.2 21.7-28.2 17.7-45.4l-23.8-102.4 80-66.7c13.8-11.1 19.5-28.9 14.1-45.4z" />
                </svg>
                <span className="text-xl font-bold">4.5</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
              <p>
                "From planning to execution, everything was flawless. The team
                handled every detail with care and professionalism. Truly
                stress-free!"
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 mr-5">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://i.ibb.co.com/3Y0V54g8/download-4.jpg"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Olivia Chen</h4>
                  <span className="text-xs dark:text-gray-600">3 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M463.1 187.6c-5.3-16.4-20.1-28.4-37.4-30l-104.3-9-41.5-95.3c-6.5-15.1-21.2-24.7-37.3-24.7s-30.8 9.6-37.3 24.7l-41.5 95.3-104.3 9c-17.3 1.5-32.1 13.5-37.4 30-5.3 16.4.3 34.2 14.2 45.3l80 66.7-23.8 102.4c-4 17.2 3.1 35.2 17.7 45.4 14.6 10.2 33.7 11.3 49 2.9L256 403.5l91.8 48.2c6.9 3.6 14.3 5.3 21.6 5.3 9.4 0 18.8-2.9 26.9-8.5 14.6-10.2 21.7-28.2 17.7-45.4l-23.8-102.4 80-66.7c13.8-11.1 19.5-28.9 14.1-45.4z" />
                </svg>
                <span className="text-xl font-bold">4.5</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
              <p>
                "The event managers were attentive, organized, and incredibly
                efficient. We didn’t have to worry about a single thing!"
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 mr-5">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://i.ibb.co.com/jP4qSw3g/download-3.jpg"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sofia Reyes</h4>
                  <span className="text-xs dark:text-gray-600">8 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M463.1 187.6c-5.3-16.4-20.1-28.4-37.4-30l-104.3-9-41.5-95.3c-6.5-15.1-21.2-24.7-37.3-24.7s-30.8 9.6-37.3 24.7l-41.5 95.3-104.3 9c-17.3 1.5-32.1 13.5-37.4 30-5.3 16.4.3 34.2 14.2 45.3l80 66.7-23.8 102.4c-4 17.2 3.1 35.2 17.7 45.4 14.6 10.2 33.7 11.3 49 2.9L256 403.5l91.8 48.2c6.9 3.6 14.3 5.3 21.6 5.3 9.4 0 18.8-2.9 26.9-8.5 14.6-10.2 21.7-28.2 17.7-45.4l-23.8-102.4 80-66.7c13.8-11.1 19.5-28.9 14.1-45.4z" />
                </svg>
                <span className="text-xl font-bold">4.5</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
              <p>
                "We had high expectations, and they were exceeded in every way.
                The decor, the schedule, the energy—it was all perfect!"
              </p>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 mr-5">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://i.ibb.co.com/pvVmgdHK/images.jpg"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Ibrahim Saeed</h4>
                  <span className="text-xs dark:text-gray-600">2 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M463.1 187.6c-5.3-16.4-20.1-28.4-37.4-30l-104.3-9-41.5-95.3c-6.5-15.1-21.2-24.7-37.3-24.7s-30.8 9.6-37.3 24.7l-41.5 95.3-104.3 9c-17.3 1.5-32.1 13.5-37.4 30-5.3 16.4.3 34.2 14.2 45.3l80 66.7-23.8 102.4c-4 17.2 3.1 35.2 17.7 45.4 14.6 10.2 33.7 11.3 49 2.9L256 403.5l91.8 48.2c6.9 3.6 14.3 5.3 21.6 5.3 9.4 0 18.8-2.9 26.9-8.5 14.6-10.2 21.7-28.2 17.7-45.4l-23.8-102.4 80-66.7c13.8-11.1 19.5-28.9 14.1-45.4z" />
                </svg>
                <span className="text-xl font-bold">4.5</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
              <p>
                "We felt like guests at our own event—the team took care of
                everything with grace. Best experience ever!"
              </p>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default JoinEvent;
