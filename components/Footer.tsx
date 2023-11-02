const Footer = () => {
    return <footer className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            alt="IABH"
            width={100}
            height={100}
            className="-ml-4"
            src="https://www.iabh.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.a4d99430.jpeg&w=1080&q=75"
          />
        </a>
        <p className="mt-2 text-sm text-gray-600">
        Indian Association of Behavioural Healthcare
        </p>
      </div>
      <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
        <div className="lg:w-1/4 md:w-1/2 w-full px-6">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            ABOUT IABH
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800">Announcements</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Strategic Planning</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Governance & Structure</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Board</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Committees</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Affiliate Organizations</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Centennial Celebration</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">History of IABH</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-6">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            IABH MEMBERSHIP
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800">How to Join IAAP</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Membership Application</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Fellows</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">IAAP Member Testimonials</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Renew Your Membership</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-6">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          MEETINGS & PUBLICATIONS
          </h2>
          <nav className="list-none mb-10">
            {/* <li>
              <a className="text-gray-600 hover:text-gray-800">Early Career Marathon: Integrating Research and Practice 2023</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Early Career Marathon: Integrating Research and Practice 2022</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Applied Psychology Around the World (APAW)k</a>
            </li> */}
            <li>
              <a className="text-gray-600 hover:text-gray-800">Journals</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Webinars</a>
            </li>
            {/* <li>
              <a className="text-gray-600 hover:text-gray-800">Call for Bids - ICAP 2030</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">ICAP 2026</a>
            </li> */}
          </nav>
        </div>
        {/* <div className="lg:w-1/4 md:w-1/2 w-full px-6">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            MAJOR INITIATIVE
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800"> Advanced Research Training Seminar: ARTS</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Task Force on Terrorism and Peace Building</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Core Competences in Professional Psychology</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Special Project on Gender Equality</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">COVID-19 Corner</a>
            </li>
          </nav>
        </div> */}
      </div>
    </div>
    <div className="bg-gray-100">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-sm text-center sm:text-left">
        copyright © 2023. All rights reserved.
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a className="text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
  
}

export default Footer