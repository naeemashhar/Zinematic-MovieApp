import { Link, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-full bg-black text-[#AAAAAA] p-[10%]">
      
      <div className="absolute top-[5%] w-[10%] ">
        <h1 className=" text-xl font-semibold text-[#AAAAAA]">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6c5ce7] mr-3 text-xl ri-arrow-left-s-line"
          ></i>
          Back
        </h1>
      </div>

      <div className=" flex flex-col lg:flex-row gap-20">
        <div className="lg:basis-1/2 flex flex-col">
          <h1 className="text-6xl md:text-[9rem] font-semibold leading-none tracking-tight text-white mb-6">
            Zinematic<span className="text-[#6c5ce7]">.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#cccccc] max-w-lg">
            We'd love to hear from you — whether you're a viewer, creator, or
            collaborator. Let’s connect.
          </p>

          <div className="flex flex-wrap gap-8 text-sm mt-12 border-t border-[#333] pt-8">
            <div className="basis-1/3">
              <h4 className="mb-4 text-zinc-500 uppercase text-sm tracking-wide hover:scale-105 transition-transform">
                Socials
              </h4>

              <nav className="flex flex-col ">
                <Link className="text-lg">
                  <i className="mr-2 text-[#6c5ce7] hover:text-white ri-instagram-line"></i>
                  <span className="hover:text-[#6c5ce7]">Instagram</span>
                </Link>
                <Link className="text-lg">
                  <i className="mr-2 text-[#6c5ce7] hover:text-white ri-linkedin-box-fill"></i>
                  <span className="hover:text-[#6c5ce7]">Linkedin</span>
                </Link>
              </nav>
            </div>

            <div className="basis-1/3">
              <h4 className="mb-4 text-zinc-500 uppercase text-sm tracking-wide hover:scale-105 transition-transform">
                Sitemap
              </h4>

              <nav className="flex flex-col ">
                <Link className="text-lg ">
                  <i className="mr-2 text-[#6c5ce7] hover:text-white ri-home-5-line "></i>
                  <span className="hover:text-[#6c5ce7] hover:scale-115">
                    Home
                  </span>
                </Link>
                <Link className="text-lg">
                  <i className="mr-2 text-[#6c5ce7] hover:text-white ri-information-line"></i>
                  <span className="hover:text-[#6c5ce7]">About</span>
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="lg:basis-1/2 flex flex-col gap-12">
          <form className="w-full space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-3 bg-[#111111] border border-[#333333] rounded-lg text-[#eeeeee] focus:outline-none focus:border-[#6c5ce7] transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-3 bg-[#111111] border border-[#333333] rounded-lg text-[#eeeeee] focus:outline-none focus:border-[#6c5ce7] transition-all"
            />
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full px-5 py-3 bg-[#111111] border border-[#333333] rounded-lg text-[#eeeeee] resize-none focus:outline-none focus:border-[#6c5ce7] transition-all"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#6c5ce7] text-white font-semibold rounded-lg hover:bg-[#5a4bd4] transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
