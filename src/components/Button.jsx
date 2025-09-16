import { ShoppingCart } from "lucide-react";
import { useState } from "react";

const Button = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleTouchStart = () => {
    setIsPressed(true);
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsPressed(false);
      setIsHovered(false);
    }, 150);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsPressed(false);
    setIsHovered(false);
  };

  return (
    <button
      className={`relative flex items-center border border-white rounded-full font-medium overflow-hidden group bg-white text-black transition-all duration-200 
      } ${isPressed ? "pressed scale-120" : ""}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <span className="flex items-center z-10">
        <span
          className={`flex items-center justify-center w-10 h-10 bg-black p-3 rounded-full transition-colors duration-300`}
        >
          <ShoppingCart
            size={20}
            className={`text-emerald-400 duration-300 transition-transform ${
              isPressed ? "scale-125" : ""
            } group-hover:scale-125`}
          />
        </span>
        <span
          className={`ml-3 pr-5 font-light transition-colors duration-300 ${
            isPressed ? "text-white" : ""
          } group-hover:text-white`}
        >
          Try Now
        </span>
      </span>
      <span
        className={`absolute left-0 top-0 w-full h-full rounded-full bg-black transition-all duration-300 z-0 pointer-events-none ${
          isPressed ? "translate-x-0" : "translate-x-[-100%]"
        } group-hover:translate-x-0 opacity-100`}
      ></span>
    </button>
  );
};

export default Button;
