export default function TrustedPartners() {
  const partners = [
    { src: "/trusted-partner-1.png", width: "56px", height: "58px", rounded: true,},
    { src: "/trusted-partner-2.png", width: "56px", height: "56px", rounded: false,},
    { src: "/trusted-partner-3.png", width: "56px", height: "56px", rounded: false,},
    { src: "/trusted-partner-4.png", width: "56px", height: "28px", rounded: false,},
    { src: "/trusted-partner-7.png", width: "80px", height: "56px", rounded: true,},
  ];

  const PartnerImages = () => (
    <div className="flex items-center justify-between gap-10 mx-32">
      {partners.map((partner, index) => (
        <img
          key={index}
          src={partner.src}
          alt="Trusted Partner"
          style={{
            width: partner.width,
            height: partner.height,
            borderRadius: partner.rounded ? "9999px" : "0",
          }}
          className="object-cover mx-24"
        />
      ))}
    </div>
  );
  return (
    <div className="p-3 lg:pb-40 lg:pt-12   bg-[#F8F7F3] ">
      <div className="flex flex-col justify-center items-center">
        <p className="border-[1.3px] border-[#000000] p-2.5 px-4 rounded-2xl text-center mb-3 w-fit">
          Our Trusted Partners
        </p>
        <p className="mt-3 text-center px-4">
          We partner with industry leaders to deliver innovative and sustainable
          energy solutions
        </p>
      </div>
      <div className="max-w-7xl mx-auto mt-16">
        <div className="w-full overflow-hidden">
          <div className="relative flex whitespace-nowrap animate">
            <PartnerImages />
            <PartnerImages />
            <PartnerImages />
            <PartnerImages />
          </div>
        </div>
      </div>
    </div>
  );
}
