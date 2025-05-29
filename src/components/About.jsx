import { useNavigate } from "react-router-dom";
import i from "/i.jpg"

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-[#cccccc] w-full min-h-screen px-6 lg:px-24 py-10 overflow-y-auto">

      <div className="top-[5%] w-[10%] ">
        <h1 className=" text-xl font-semibold text-[#AAAAAA]">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6c5ce7] mr-3 text-xl ri-arrow-left-s-line"
          ></i>
          Back
        </h1>
      </div>


      <div className="text-center mb-18">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Built for Storytellers.
        </h1>
        <p className="text-lg md:text-xl text-[#aaaaaa] max-w-2xl mx-auto">
          Zinematic is redefining how we watch and experience film. It’s not
          just streaming — it’s storytelling, elevated.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-20 items-center">

        <div className="space-y-10">
          <h2 className="text-4xl font-semibold text-white">Why Zinematic?</h2>
          <p className="text-lg leading-relaxed">
            We believe in quality over quantity. Our platform curates the best
            of global cinema, indie gems, and bold new voices — all delivered in
            stunning visual fidelity.
          </p>
          <p className="text-lg leading-relaxed">
            Our mission is to give filmmakers and viewers a space where artistry
            is respected and discovery is intuitive. From powerful algorithms to
            minimal design — Zinematic is for the true film lover.
          </p>
        </div>


        <div className="rounded-lg overflow-hidden shadow-xl">
          <img
            src={i}
            alt="Group watching TV together"
            className="w-full h-full object-cover bg-[#111] border border-[#333] rounded-lg shadow  hover:scale-95 shadow-[#6c5ce7]/60 transition"
          />
        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-24">
        <div className="p-6 bg-[#111] border border-[#333] rounded-lg shadow hover:shadow-[#6c5ce7]/40 transition">
          <h3 className="text-xl font-semibold text-white mb-2">
            Curated Content
          </h3>
          <p>
            Hand-picked films that challenge, inspire, and resonate — with no
            filler or fluff.
          </p>
        </div>
        <div className="p-6 bg-[#111] border border-[#333] rounded-lg shadow hover:shadow-[#6c5ce7]/40 transition">
          <h3 className="text-xl font-semibold text-white mb-2">
            Performance First
          </h3>
          <p>
            Stream in full quality with lightning-fast delivery and seamless
            design across all devices.
          </p>
        </div>
        <div className="p-6 bg-[#111] border border-[#333] rounded-lg shadow hover:shadow-[#6c5ce7]/40 transition">
          <h3 className="text-xl font-semibold text-white mb-2">
            Global Community
          </h3>
          <p>
            Connect with cinephiles, creators, and festivals worldwide. This is
            a movement.
          </p>
        </div>
      </div>


      <div className="mt-32 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
          Ready to explore real cinema?
        </h2>
        <p className="text-lg mb-8">
          Join thousands discovering meaningful stories on Zinematic.
        </p>
        <button className="px-8 py-4 bg-[#6c5ce7] text-white rounded-lg hover:bg-[#5a4bd4] transition">
          Start Watching
        </button>
      </div>
      

    </div>
  );
};

export default About;
