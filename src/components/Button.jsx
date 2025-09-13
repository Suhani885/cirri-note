import { ShoppingCart } from "lucide-react";
const Button = () => {
  return (
    <button className="relative flex items-center border border-white rounded-full font-medium overflow-hidden group bg-white text-black transition-colors duration-300">
      <span className="flex items-center z-10">
        <span className="flex items-center justify-center w-10 h-10 bg-black p-3 rounded-full transition-colors duration-300">
          <ShoppingCart
            size={20}
            className="text-emerald-400 duration-300 group-hover:scale-120 transition-transform"
          />
        </span>
        <span className="ml-3 pr-5 font-light transition-colors duration-300 group-hover:text-white">
          Try Now
        </span>
      </span>
      <span className="absolute left-0 top-0 w-full h-full rounded-full bg-black transition-all duration-600 z-0 pointer-events-none group-hover:translate-x-0 translate-x-[-100%] opacity-100"></span>
    </button>
  );
};

export default Button;
