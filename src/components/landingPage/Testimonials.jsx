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
          <p className="text-[#FF8F06] font-bold text-lg">CanePro Industries</p>
          <p className="text-[#464646] font-thin text-base mt-4">
            &quot;Ampgate has been a game-changer for our production facility.
            Their power solutions are not only reliable but also incredibly
            efficient. Since partnering with them, we’ve had zero downtime —
            which is critical for our 24/7 operations. I would recommend!&quot;
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
              <p className="text-[#FFB100] text-base">David Edmiston</p>
              <p className="text-[#4A4A4A] text-xs">Operations Manager</p>
            </div>
          </div>
        </div>

        {/* ====== Card Two ====== */}
        <div className="border md:max-w-[380px] text-left p-6 py-10 rounded-xl">
          <p className="text-[#FF8F06] font-bold text-lg">
            PurpleSquare Developments
          </p>
          <p className="text-[#464646] font-thin text-base mt-4">
            &quot;What impressed me most about Ampgate was their dedication to
            understanding our energy needs. They didn’t just sell a solution;
            they engineered a system tailored to our properties. Now our tenants
            enjoy uninterrupted power. You can trust them!&quot;
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
              <p className="text-[#FFB100] text-base">John Igwe</p>
              <p className="text-[#4A4A4A] text-xs">CEO</p>
            </div>
          </div>
        </div>

        {/* ====== Card Three ====== */}
        <div className="border md:max-w-[380px] text-left p-6 py-10 rounded-xl">
          <p className="text-[#FF8F06] font-bold text-lg">EG&G Hospital</p>
          <p className="text-[#464646] font-thin text-base mt-4">
            &quot;Power stability is non-negotiable in healthcare, and Ampgate
            has proven to be a dependable partner. Their backup systems kick in
            instantly — a critical safeguard for our organization, in terms of
            patients and equipments. Highly recommended!&quot;
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
              <p className="text-[#FFB100] text-base">Grace Adewale</p>
              <p className="text-[#4A4A4A] text-xs">Medical Director</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
