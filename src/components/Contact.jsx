import { Link, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-fit bg-black text-[#AAAAAA] px-4 py-8 sm:px-10 md:px-[10%]">
      {/* Back Button */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
        <button
          onClick={() => navigate(-1)}
          className="text-[#AAAAAA] text-base sm:text-xl font-semibold hover:text-[#6c5ce7] flex items-center"
        >
          <i className="ri-arrow-left-s-line mr-1 sm:mr-3"></i>
          Back
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 mt-16 sm:mt-20">
        {/* Left Section */}
        <div className="lg:w-1/2 flex flex-col">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight text-white mb-6">
            Zinematic<span className="text-[#6c5ce7]">.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#cccccc] max-w-lg">
            We'd love to hear from you — whether you're a viewer, creator, or
            collaborator. Let’s connect.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-8 text-sm mt-12 border-t border-[#333] pt-8">
            {/* Socials */}
            <div className="w-full sm:w-1/2 md:w-1/3">
              <h4 className="mb-4 text-zinc-500 uppercase text-sm tracking-wide hover:scale-105 transition-transform">
                Socials
              </h4>
              <nav className="flex flex-col">
                <Link className="text-lg mb-1">
                  <i className="mr-2 text-[#6c5ce7] ri-instagram-line"></i>
                  <span className="hover:text-[#6c5ce7]">Instagram</span>
                </Link>
                <Link className="text-lg">
                  <i className="mr-2 text-[#6c5ce7] ri-linkedin-box-fill"></i>
                  <span className="hover:text-[#6c5ce7]">LinkedIn</span>
                </Link>
              </nav>
            </div>

            {/* Sitemap */}
            <div className="w-full sm:w-1/2 md:w-1/3">
              <h4 className="mb-4 text-zinc-500 uppercase text-sm tracking-wide hover:scale-105 transition-transform">
                Sitemap
              </h4>
              <nav className="flex flex-col">
                <Link className="text-lg mb-1">
                  <i className="mr-2 text-[#6c5ce7] ri-home-5-line"></i>
                  <span className="hover:text-[#6c5ce7]">Home</span>
                </Link>
                <Link className="text-lg">
                  <i className="mr-2 text-[#6c5ce7] ri-information-line"></i>
                  <span className="hover:text-[#6c5ce7]">About</span>
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="lg:w-1/2 flex flex-col justify-center">
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
