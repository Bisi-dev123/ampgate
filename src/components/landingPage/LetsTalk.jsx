export default function LetsTalk() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-20 md:py-20">
        <div className="relative rounded-xl">
          <img
            src="/power-up-business-image.jpeg"
            alt="about-us hero image"
            className="rounded-xl h-[260px] md:h-[350px] lg:h-[450px] w-full object-cover"
            width={100}
            height={100}
          />
          <div className="absolute md:pt-12 lg:pt-24 rounded-xl inset-0 bg-black bg-opacity-60 text-[#ffffff] text-center">
            <p className="font-bold text-3xl md:px-20 md:text-5xl lg:text-7xl  p-6">
              Ready to Power Up Your Business?
            </p>
            <p className="text-lg">Let&apos;s Talk</p>
            <button className="bg-[#FFB100] text-[#ffffff] p-3 rounded-2xl w-[130px] mt-3 md:mt-8 hover:bg-gradient-to-b hover:from-[#4a4a4a] hover:to-[#FFB100] transition-all duration-300" >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
