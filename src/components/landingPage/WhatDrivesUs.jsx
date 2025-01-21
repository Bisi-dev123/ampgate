export default function WhatDrivesUs() {
  return (
      <div>
            {/* // ======What drives us======== */}
        <section className="bg-[#FEE9B1] mt-20 py-10 lg:p-10">
          <div className="max-w-2xl mx-auto text-center">
          <p className="border-[1.3px] border-[#000000] p-2.5 rounded-xl mx-auto mb-4 w-[150px]">
            What Drives Us
          </p>
          <p>
            Our aspirations guide our path, while our purpose anchors our actions
          </p>

          <div className="md:flex gap-10 w-full">
            {/* =====Card ===== */}
            <div className="md:w-[40%] gap-4 flex flex-col">
              {/* ====Mission Card==== */}
              <div className="p-6 bg-[#ffffff] max-w-[370px] flex  gap-4 rounded-2xl">
                <div className="h-16 w-20 bg-[#FFB100] rounded-xl" />
                <div className="space-y-4">
                  <p className="text-[#FFB100] font-medium text-2xl uppercase">
                    Mission
                  </p>
                  <p className="leading-8 text-sm">
                    At Ampgate Limited, our mission is to empower businesses and
                    communities by delivering innovative, reliable, and
                    efficient power solutions. We are committed to excellence,
                    sustainability, and customer satisfaction, ensuring
                    uninterrupted energy for critical operations and everyday
                    needs.
                  </p>
                </div>
              </div>
              {/* ====Vision Card==== */}
              <div className="p-6 bg-[#ffffff] max-w-[370px] flex  gap-4 rounded-2xl">
                <div className="h-16 w-20 bg-[#FFB100] rounded-xl" />
                <div className="space-y-4">
                  <p className="text-[#FFB100] font-medium text-2xl uppercase">
                    Vision
                  </p>
                  <p className="leading-8 text-sm">
                    Our vision is to be the leading provider of power solutions
                    in Africa and beyond, driving growth and innovation while
                    setting industry standards for reliability, sustainability,
                    and service excellence. We aim to create a brighter, more
                    connected future powered by Ampgate Limited.
                  </p>
                </div>
              </div>
            </div>
            {/* ====Mission & vision image ==== */}
            <div className="md:w-[60%] mt-10  md:mt-0 flex items-center justify-center">
              <img
                src="/mission-vision-image.png"
                alt="about-us hero image"
                className="rounded-xl w-[300px] h-[350px] md:h-[645px] md:w-[700px] w-ful object-cover"
                width={100}
                height={100}
              />
            </div>
          </div>

          
          </div>
      
      
        </section>
      </div>
  );
}
