import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center gap-4">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            alt="IABH"
            width={130}
            height={130}
            src="https://www.iabh.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.a4d99430.jpeg&w=1080&q=75"
          />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/about" className="mr-5 hover:text-gray-900">About IABH</Link>
          <a className="mr-5 hover:text-gray-900">IABH Division</a>
          <a className="mr-5 hover:text-gray-900">IABH Program</a>
          <a className="mr-5 hover:text-gray-900">Membership</a>
          <a className="mr-5 hover:text-gray-900">Events</a>
        </nav>
        <button className="text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg">
          Membership Login
        </button>
        <button className="text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg">
          Join
        </button>
      </div>
    </div>
  );
};

export default Navbar;
