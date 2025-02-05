export default function AboutUs() {
  return (
    <>
      <section>
        <div className="p-3 py-10 bg-[#F8F7F3]">
          <div className="flex flex-col justify-center items-center">
            <p className="border-[1.3px] border-[#FF8F06] p-2 px-4 rounded-2xl text-center mb-3 w-[180px]">
              About Us
            </p>
            <p className="text-center px-4">
              We have a commitment to reliability and innovation
            </p>
          </div>
        </div>
        <div>
          <section className="bg-[#161616] py-14">
            <div className="text-[#ffffff] p-6  md:flex md:gap-24 max-w-7xl mx-auto">
              {/* === Images ===== */}
              <div className="lg:w-[550px]">
                <div>
                  <img
                    src="/about-us-image.jpeg"
                    // src="https://s3-alpha-sig.figma.com/img/3f51/bdcf/7c8988d1ea109fcc1c9c3a51381bd23c?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O6muxP4g8Qqj5hpnnRcrD2e9U-vS6Ow1EvD3yCg4Fq564b53kmXQQLmWx~VSjtSD0l927Q~jZwCE2De1SCr4L~MNkM5~fOpqbUaelOkLW7H7za2mvDZBIOsAFfoysQTUGGluP2jthwpn4f5D7dLsiojwpwlNWVcxH3tNmmpZ0B8h4kpYhUZ3jwMit98vlZw0b010khJ-cD0Uxgim9-dlItNY0I1DwgOmBK9qgomsSlyrHks11jPD3hVN-wQWSvxBDPheRytFyPNADe6P4mwCNNEpmtevgUkIiDk~euDWXX5rsoAIF~1udtCUo2Eyb01bdmhWwfU3XcKFn5aUUYO51w__"
                    alt="about-us hero image"
                    className="rounded-xl h-[260px] md:h-[350px] lg:h-[550px] w-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>
              </div>

              {/* =====Our Company ==== */}
              <div className="text-xl w-full mt-12 max-w-[400px] leading-10 font-light">
                <p>
                  Ampgate is a private company limited with Company Number RC
                  no:2007759. While Ampgate has been serving clients for the
                  past 15 years, it was incorporated in December 7th 2022 to
                  enable the company better serve our clients which include oil
                  and gas, utility, IPP, industrial and commercial segments of
                  the economy.
                </p>
                <button className="bg-[#FFB100] text-[#FFFFFF] w-[130px] p-3 rounded-2xl text-sm mt-10 hover:bg-gradient-to-b hover:from-[#4a4a4a] hover:to-[#FFB100] transition-all duration-300">
                  Read More
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
