export default function Faq() {
  return (
    <div className="p-3">
      <div className="text-center max-w-[700px] mx-auto">
        <p className="font-bold text-3xl md:text-5xl text-[#161616]">
          Frequently Asked Questions (FAQs)
        </p>
        <p className="font-semibold text-2xl mt-3 text-[#4A4A4A]">
          Any questions? We got you.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="border-[1.3px] border-[#262626] rounded-2xl max-w-[650px] mt-16  shadow-[#FF8F06]">
          <p className="p-4 py-8 font-bold text-base md:text-lg border-b-[1.3px] border-[#262626]">
            What services does Ampgate Limited offer?
          </p>
          <p className="p-4 py-6 font-bold text-base md:text-lg border-b-[1.3px] border-[#262626]">
            What types of power equipment are available for sale or rent?
          </p>
          <p className="p-4 py-6 font-bold text-base md:text-lg border-b-[1.3px] border-[#262626]">
            What industries do you serve?
          </p>
          <p className="p-4 py-6 font-bold text-base md:text-lg border-b-[1.3px] border-[#262626]">
            How do I request a quote for your services?
          </p>
          <p className="p-4 py-6 font-bold text-base md:text-lg border-b-[1.3px] border-[#262626]">
            What sets Ampgate Limited apart from competitors?
          </p>
          <p className="p-4 py-6 font-bold text-base md:text-lg">
            Do you provide installation and setup services?
          </p>
        </div>
        <div className="p-36 m-6">
          <p className="font-bold text-3xl mt-2 text-[#161616] ">Do you have more questions?</p>
          <p>Kindly send an email by clicking on the button below. We shall respond as soon as possible.</p>
          <button
          // onClick={() => navigate("/contact-us")}
          className="p-3 rounded-2xl w-[130px] bg-[#FFB100] hover:bg-gradient-to-b hover:from-[#4a4a4a] hover:to-[#FFB100] transition-all duration-300"
        >
          Send an Email
        </button>
        </div>
      </div>
    </div>
  );
}
