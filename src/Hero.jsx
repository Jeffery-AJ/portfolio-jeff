import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Hero() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: ["Frontend Developer", "Security Hacker", "Java Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <h1 className="text-2xl font-bold text-center">
      I’m a <span className="text-blue-500" ref={el}></span>
    </h1>
  );
}

export default Hero;
