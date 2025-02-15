export default function Testimonials() {
  return (
    <div className="p-3 py-20 md:py-32 bg-[#F8F7F3]">
      <div className="flex flex-col justify-center items-center">
        <p className="border-[1.3px] border-[#FF8F06] p-2.5 px-4 rounded-2xl text-center mb-3 w-[200px]">
          Testimonials
        </p>
        <p className="mb-8">Hear from our satisfied clients</p>
      </div>
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {/* ====== Card One ====== */}
        <div className="border md:max-w-[380px] text-left p-6 py-10 rounded-xl">
          <p className="text-[#FF8F06] font-bold text-lg">Name of company</p>
          <p className="text-[#464646] font-thin text-base mt-4">
            &quot;Ampgate Limited exceeded our expectations during a critical
            project. The team delivered top-notch generators and provided
            seamless installation. Their professionalism and prompt service
            saved us from downtime. Highly recommended!&quot;
          </p>
          <div className="flex gap-4 items-center mt-6">
            <div className="w-14 h-14 flex justify-center items-center bg-black rounded-full">
              <img
                src="./why-choose-us1.svg"
                alt=" Customer Service Icon"
                className="w-9 h-9 "
              />
            </div>
            <div>
              <p className="text-[#FFB100] text-base">John Olaiya</p>
              <p className="text-[#4A4A4A] text-xs">Construction Manager</p>
            </div>
          </div>
        </div>

        {/* ====== Card Two ====== */}
        <div className="border md:max-w-[380px] text-left p-6 py-10 rounded-xl">
          <p className="text-[#FF8F06] font-bold text-lg">Name of company</p>
          <p className="text-[#464646] font-thin text-base mt-4">
            &quot;Ampgate Limited exceeded our expectations during a critical
            project. The team delivered top-notch generators and provided
            seamless installation. Their professionalism and prompt service
            saved us from downtime. Highly recommended!&quot;
          </p>
          <div className="flex gap-4 items-center mt-6">
            <div className="w-14 h-14 flex justify-center items-center bg-black rounded-full">
              <img
                src="./why-choose-us1.svg"
                alt=" Customer Service Icon"
                className="w-9 h-9 "
              />
            </div>
            <div>
              <p className="text-[#FFB100] text-base">John Olaiya</p>
              <p className="text-[#4A4A4A] text-xs">Construction Manager</p>
            </div>
          </div>
        </div>

        {/* ====== Card Three ====== */}
        <div className="border md:max-w-[380px] text-left p-6 py-10 rounded-xl">
          <p className="text-[#FF8F06] font-bold text-lg">Name of company</p>
          <p className="text-[#464646] font-thin text-base mt-4">
            &quot;Ampgate Limited exceeded our expectations during a critical
            project. The team delivered top-notch generators and provided
            seamless installation. Their professionalism and prompt service
            saved us from downtime. Highly recommended!&quot;
          </p>
          <div className="flex gap-4 items-center mt-6">
            <div className="w-14 h-14 flex justify-center items-center bg-black rounded-full">
              <img
                src="./why-choose-us1.svg"
                alt=" Customer Service Icon"
                className="w-9 h-9 "
              />
            </div>
            <div>
              <p className="text-[#FFB100] text-base">John Olaiya</p>
              <p className="text-[#4A4A4A] text-xs">Construction Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
