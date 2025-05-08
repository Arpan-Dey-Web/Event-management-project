import React from "react";
import { Link } from "react-router";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center card-bg rounded-2xl text-black p-10 bg-[#181824]">
        <aside>
          <div className="flex flex-col gap-2 items-center">
            <img
              className="w-[50px] rounded-2xl"
              src="https://i.ibb.co.com/mPT7GnP/Brown-Gold-Elegant-and-Luxury-Wedding-Event-Planner-Organizer-Logo.png"
              alt=""
            />
            <span className="font font-bold text-4xl"> Eventure</span>
          </div>
          <p className="font-bold paragraph">
            <br />
            Providing reliable Event since 2012
          </p>
          <p className="paragraph">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
          <Link to={"/termscondition"}>
            <p className="hover:underline paragraph ">Terms & Condition </p>
          </Link>
          <Link to={"/privacypolicy"}>
            <p className="hover:underline paragraph ">Privacy Policy </p>
          </Link>
        </aside>

        <nav>
          <div className="grid grid-flow-col gap-4">
            {/* linkedin */}
            <Link
              target="_blank"
              to={
                "https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=arpan-dey-043881278"
              }
            >
              <FaLinkedinIn size={30} />
            </Link>
            {/* github */}
            <Link target="_blank" to={"https://github.com/Arpan-collab"}>
              <FaGithub size={30} />
            </Link>
            <Link target="_blank" to={"https://www.facebook.com/arpandey5000"}>
              <FaFacebook size={30} />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
