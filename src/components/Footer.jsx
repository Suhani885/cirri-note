import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-zinc-950 px-6 lg:px-12 py-20 border-t border-zinc-800"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center">
            <span className="text-emerald-400 text-5xl font-extrabold">C</span>
          </div>
          <span className="text-2xl font-medium">CirriNote</span>
        </div>

        <div className="flex items-center space-x-8">
          <a href="#" className="text-white">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-white">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-white">
            <span className="text-xl font-bold">𝕏</span>
          </a>
        </div>
      </div>

      <div className="pt-16 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
        <p className="font-light">© CirriNote 2025</p>
        <p className="font-light">Crafted with passion by CreoWis</p>
      </div>
    </footer>
  );
};

export default Footer;
