import { Check } from "lucide-react";
export default function OurProductSection() {
  return (
    <div>
      <section className="max-w-7xl mx-auto py-10 px-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="border-[1.3px] border-[#FF8F06] it p-2.5 mx-auto md:mx-0 rounded-xl text-center mb-3 w-[150px]">
              Our Products
            </p>
            <p className="max-w-md text-center md:text-left">
              Discover a wide range of available products designed to power your
              success
            </p>
            <div className="max-w-md space-y-4 mt-10 text-sm font-light text-[#464646]">
              <div className="flex items-center justify-center gap-4 w-fit">
                <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                  <Check color="#FFFFFF" />
                </div>
                <p>
                  Gas and Diesel Rental Solution services from 500kVA to 20MW
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 w-fit">
                <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                  <Check color="#FFFFFF" />
                </div>
                <p>
                  Transformer rental from 2.5MVA/11kv to 6.5MVA/415v/11kve/33kV
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 w-fit">
                <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                  <Check color="#FFFFFF" />
                </div>
                <p>Diesel power generation 500kVA up to 2MVA module</p>
              </div>
              <div className="flex items-center justify-center gap-4 w-fit">
                <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                  <Check color="#FFFFFF" />
                </div>
                <p>Renewable Energy Generation for industrial solution</p>
              </div>

              <div className="flex items-center justify-center gap-4 w-fit">
                <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                  <Check color="#FFFFFF" />
                </div>
                <p>Load Bank Rental up to 5MW capacity</p>
              </div>
              <div className="flex items-center justify-center gap-4 w-fit">
                <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                  <Check color="#FFFFFF" />
                </div>
                <p>Diesel Tanks: 3,000-10,000 litre diesel tanks</p>
              </div>

              <div className="flex items-center justify-center gap-4 w-fit">
                <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                  <Check color="#FFFFFF" />
                </div>
                <p>Logistics</p>
              </div>
              <div className="flex items-center justify-center gap-4 w-fit">
                <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                  <Check color="#FFFFFF" />
                </div>
                <p>
                  Project Management Engineering Generator sales and services
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/load-bank-3.jpg"
              alt="about-us hero image"
              className="rounded-xl h-[260px] md:h-[350px] lg:h-[550px] w-full object-cover"
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
