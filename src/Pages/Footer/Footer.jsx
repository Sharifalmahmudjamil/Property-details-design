import logo from "../../../Image/logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#ECF5FF] text-base-content mt-14">
        <aside>
          <img className="w-[50px] h-[80px]" src={logo} alt="" />
          <p className="text-base font-medium text-[#475467]">
            Design amazing digital experiences
            <br />
            that create more happy in the world.
          </p>
        </aside>
        <nav className="text-base font-semibold">
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Overview</a>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Solutions</a>
          <a className="link link-hover">Tutorials</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Releases</a>
        </nav>
        <nav className="text-base font-semibold">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
          <a className="link link-hover">News</a>
          <a className="link link-hover">Media kit</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="text-base font-semibold">
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Newsletter</a>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">Help centre</a>
          <a className="link link-hover">Help centre</a>
          <a className="link link-hover">Tutorials</a>
          <a className="link link-hover">Support</a>
        </nav>
        <nav className="text-base font-semibold">
          <h6 className="footer-title">Social</h6>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">LinkedIn</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">GitHub</a>
          <a className="link link-hover">AngelList</a>
          <a className="link link-hover">Dribbble</a>
        </nav>
        <nav className="text-base font-semibold">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">Licenses</a>
          <a className="link link-hover">Settings</a>
          <a className="link link-hover">Contact</a>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-[#ECF5FF] text-white border-base-300">
        <aside className="items-center grid-flow-col">
          {/* <img className="w-[150px] h-[50px]" src={logo} alt="" /> */}
          <p className=" text-base font-normal text-[#667085]">
            © 2024 Heritage- Nest . All rights reserved.
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4 text-[#0059B1]">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                  fill="#0059B1"
                />
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
