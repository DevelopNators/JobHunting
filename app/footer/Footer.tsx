import { socialLinks } from "@/public/data";
import Image from "next/image";
import Link from "next/link";
import { FaTelegram, FaWhatsapp, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import logo from '../../public/jhlogo.png'
const Footer = () => {
  return (
    <div style={{ position: "relative", backgroundColor: "#F7F8F9" }}>
      <footer
        className="footer footer-center p-10 bg-base-200 text-base-content rounded footer-postion "
        data-theme="light"
      >
        <div className="" style={{width:"15rem"}}>
          <Image src={logo} alt={"logo"}/>
        </div>
        <nav className="grid grid-flow-col gap-4">
          <Link href="/about" className="link link-hover">
            About us
          </Link>
          <Link href="/contact" className="link link-hover">
            {" "}
            Contact
          </Link>
          <Link href="/" className="link link-hover">
            Jobs
          </Link>
          <Link href="/term-services" className="link link-hover">
            {" "}
            Terms of Service
          </Link>
          <Link href="/privacy-policy" className="link link-hover">
            {" "}
            Privacy Policy
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            {/* <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a> */}

            <a href={socialLinks[0].url} className="text-3xl" target="_blank">
              <FaYoutube />
            </a>

            <a href={socialLinks[2].url} className="text-3xl" target="_blank">
              <FaTelegram />
            </a>
            <a href={socialLinks[1].url} className="text-3xl" target="_blank">
              <FaWhatsapp />
            </a>
            <a href={socialLinks[3].url} className="text-3xl" target="_blank">
              <FaLinkedin />
            </a>
            <a href={socialLinks[4].url} className="text-3xl" target="_blank">
              <FaInstagram />
            </a>
            {/* <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a> */}
          </div>
        </nav>
        <aside>
          <p>
            Copyright © 2024 - All right reserved by
            <a href="https://developnators.com" target="_blank">
              {" "}
              Developnators
            </a>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
