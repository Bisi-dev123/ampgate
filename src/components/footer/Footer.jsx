import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const today = new Date();
  const currentYear = today.getFullYear();

  return (
    <div className="px-6 text-white py-10 bg-[#FFB100]">
      <section className="mb-2 lg:flex justify-between gap-32 lg:ml- xl:ml-32  pb-10 md:mb-20">
        <div className="">
          <img
            src="/ampgate-white-color.png"
            alt="Ampgate brand logo"
            width={200}
            height={150}
            className="object-cove md:h-[70px] md:w-[150px]"
          />
          <p className="my-6 text-base font-light max-w-[270px]">
            Ampgate Limited is a leading provider of energy solutions,
            delivering an extensive selection of equipment and services.
          </p>
        </div>
        <div className="text-[20px] md:flex md:justify-between lg:justify-start lg:gap-20 lg:w-2/3">
          {/* ======Support Section====== */}
          <div>
            <p className="font-bold mb-8">Support</p>
            <ul className="cursor-pointer space-y-4 font-light text-base lg:text-lg">
              <li onClick={() => navigate("/about-us")}>About us </li>
              <li onClick={() => navigate("/services")}>Services</li>
              <li onClick={() => navigate("/contact-us")}>Contact Us</li>
              <li>Faq </li>
            </ul>
          </div>
          {/* ======Locations Section====== */}
          <div className="my-10 md:my-0">
            <p className="font-bold mb-8">Locations</p>
            <ul className="space-y-4 text-base font-light  w-[250px]">
              <li>4, Alhaji Akanbi Oreniwon Street. Lagos, Nigeria </li>
              <li>
                AMGPATE LLC, 6289, VALLEY VIEW DRIVE, Fishers, IN, 46038, USA
              </li>
            </ul>
          </div>
          {/* ======ContactUs Section====== */}
          <div className="my-10 md:my-0">
            <p className="font-bold mb-8">Contact Us</p>
            <ul className="space-y-4 text-base font-light">
              <li className="text-wrap">sales@ampgatenigeria.com</li>
              <li>ampgatellc.com</li>
              <li>+234 806 064 8425</li>
              <li>+1 (973) 303-0214</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="cursor-pointer lg:flex justify-between items-center border-t-[.23px] border-white pt-8">
          <p className="font-bold xl:ml-32 lg:mt-0">
            All rights reserved. © {currentYear} Ampgate
          </p>
        </div>
      </section>
    </div>
  );
}
