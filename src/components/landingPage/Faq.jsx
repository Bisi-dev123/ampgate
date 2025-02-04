import { ArrowDown, ArrowUp, MessageSquare } from "lucide-react";
import { faqData } from "../../utils/FaqData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Faq() {
  const [activeFaq, setActiveFaq] = useState(1);
  const navigate = useNavigate();
  return (
    <div
      className="p-3 py-32"
      style={{
        background:
          "conic-gradient(from 0deg at 50% 50%, #FFF4E3, #FFB10033 50%, #FFF4E3)",
      }}
    >
      <div className="text-center max-w-[700px] mx-auto">
        <p className="font-bold text-3xl md:text-5xl text-[#161616]">
          Frequently Asked Questions (FAQs)
        </p>
        <p className="font-semibold text-2xl mt-3 text-[#4A4A4A]">
          Any questions? We got you.
        </p>
      </div>

      <div className="md:flex space-y-6  md:justify-between max-w-6xl md:space-y-0 md:space-x-4 lg:space-x-0 mx-auto px-2 md:px-6 items-center">
        <div className="bg-white border-[1.3px] border-[#404040] rounded-2xl max-w-[650px] mt-16  shadow-[#FF8F06]">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
              className={`${
                activeFaq === faq.id ? "mt-0  bg-white" : "mt-0 lg:py-8"
              } flex text-[#4a4a4a] border-b-[0.5px] border-[#404040] p-4 md:p-8 lg:px-6  justify-between  max-w-[1100px] mx-auto cursor-pointer`}
            >
              <div>
                <p
                  className={`${
                    activeFaq !== faq.id
                      ? "font-normal"
                      : "font-medium text-[#FFB100] "
                  } text-base lg:text-xl font-medium mr-3`}
                >
                  <span>{faq.question}</span>
                </p>
                {activeFaq === faq.id && (
                  <p className="text-sm lg:text-base mt-4">{faq.answer}</p>
                )}
              </div>
              <div>
                {activeFaq === faq.id ? (
                  <div className="bg-[#FF8F06] p-1 rounded-full cursor-pointer text-white">
                    <ArrowDown />
                  </div>
                ) : (
                  <div className="bg-[#FF8F06] p-1 rounded-full cursor-pointer text-white">
                    <ArrowUp />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl flex flex-col justify-center items-center text-center p-3 py-10 md:w-[390px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <MessageSquare className="text-[#FFB100] size-24 mx-auto" />
          <p className="font-bold text-3xl mt-8 text-[#161616] ">
            Do you have more questions?
          </p>
          <p className="mt-6 mb-12 text-[#4A4A4A]">
            Kindly send an email by clicking on the button below. We shall
            respond as soon as possible.
          </p>
          <button
            onClick={() => navigate("/contact-us")}
            className="p-3 rounded-2xl w-[130px] bg-[#FFB100] hover:bg-gradient-to-b hover:from-[#4a4a4a] hover:to-[#FFB100] transition-all duration-300"
          >
            Send an Email
          </button>
        </div>
      </div>
    </div>
  );
}
