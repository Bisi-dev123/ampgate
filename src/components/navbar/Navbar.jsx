export default function Navbar() {
  return <div className="ml-20 mr-20">
    <div>
      <p className="bg-[#FFB100] flex justify-center items-center text-[#ffffff] rounded-tl-lg rounded-tr-lg">Let Ampgate Limited power your success</p>
    </div>
    <div className="bg-[#FFFFFF] flex justify-between items-center rounded-bl-lg rounded-br-lg p-4">
      {/* <img src="../" alt="" /> */}
      <p>LOGO</p>
      <nav>
        <ul className="flex space-x-8">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>SERVICES</li>
        </ul>
      </nav>
      <button className="bg-[#FFB100] text-[#ffffff] p-3 rounded-xl w-[150px] ">
              Contact Us
      </button>
    </div>
  </div>;
}
