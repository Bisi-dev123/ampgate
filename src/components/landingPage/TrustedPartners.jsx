export default function TrustedPartners() {
  return (
    <div className="p-3 pb-14 bg-[#F8F7F3] ">
      <div className="flex flex-col justify-center items-center">
        <p className="border-[1.3px] border-[#000000] p-2.5 px-4 rounded-2xl text-center mb-3 w-fit">
          Our Trusted Partners
        </p>
        <p className="mt-3 text-center px-4">
          We partner with industry leaders to deliver innovative and sustainable
          energy solutions
        </p>
      </div>
      <div className="flex justify-between items-center gap-10 overflow-auto max-w-7xl mx-auto mt-10 px-10">
        <img
          src="/trusted-partner-1.png"
          alt="Contact Us hero image"
          className="w-[56px] h-[58px] object-cover rounded-full"
          width={100}
          height={100}
        />

        <img
          src="/trusted-partner-2.png"
          alt="Contact Us hero image"
          className="w-[56px] h-[56px] object-cover"
          width={100}
          height={100}
        />

        <img
          src="/trusted-partner-3.png"
          alt="Contact Us hero image"
          className="w-[56px] h-[56px] object-cover"
          width={100}
          height={100}
        />
        <img
          src="/trusted-partner-4.png"
          alt="Contact Us hero image"
          className="w-[56px] h-[28px] object-cover"
          width={100}
          height={100}
        />
        <img
          src="/trusted-partner-5.png"
          alt="Contact Us hero image"
          className="w-[56px] h-[56px] object-cover"
          width={100}
          height={100}
        />
        <img
          src="/trusted-partner-6.png"
          alt="Contact Us hero image"
          className="w-[56px] h-[56px] object-cover"
          width={100}
          height={100}
        />
        <img
          src="/trusted-partner-7.png"
          alt="Contact Us hero image"
          className="w-[80px] h-[56px] object-cover rounded-full"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
