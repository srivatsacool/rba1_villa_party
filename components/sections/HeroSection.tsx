import React from "react";
import { Icon } from "../Icon";

export const HeroSection: React.FC = () => (
  <div className="relative h-screen w-full overflow-hidden">
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
      <div
        className="relative z-10 max-w-4xl animate-fade-in"
        style={{ animationDuration: "1.5s" }}
      >
        <h2
          className="font-montserrat font-light text-lg md:text-lg uppercase tracking-[3px] text-white animate-slide-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Samriddhi Corporations presents
        </h2>
        <h1
          className="text-7xl md:text-9xl font-bold tracking-tight leading-tight animate-slide-in-up font-bebas-neue uppercase my-4"
          style={{ animationDelay: "0.5s" }}
        >
          RBA1: THE VILLA PARTY
        </h1>
        <p
          className="font-montserrat font-light text-xl md:text-xl uppercase tracking-[3px] text-white animate-slide-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          29th November 2025 | Doors open 7:00 PM
        </p>
        <a
          href="#rsvp"
          className="mt-8 inline-flex items-center gap-3 bg-accent text-white font-semibold py-3 px-10 rounded-full hover:bg-white hover:text-[#271E37] transition-all duration-300 transform hover:scale-105 animate-fade-in cursor-target font-montserrat uppercase"
          style={{ animationDelay: "0.8s" }}
        >
          RSVP Now
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="chevronDown" className="w-8 h-8 text-white" />
      </div>
    </div>
  </div>
);
