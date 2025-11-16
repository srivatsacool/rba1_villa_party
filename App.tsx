import React from "react";
import TargetCursor from "./components/TargetCursor";
import { HeroSection } from "./components/sections/HeroSection";
import { InfoBar } from "./components/sections/InfoBar";
import { AmenitiesSection } from "./components/sections/AmenitiesSection";
import { GallerySection } from "./components/sections/GallerySection";
import { CulinarySection } from "./components/sections/CulinarySection";
import { InfoSection } from "./components/sections/InfoSection";
import { RsvpSection } from "./components/sections/RsvpSection";
import { Footer } from "./components/sections/Footer";
import { VideoSection } from "./components/sections/VideoSection";
import { FloatingButton } from "./components/FloatingButton";
import Silk from "./components/Silk";

function App() {
  return (
    <div className="text-primary-text">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Silk color="#2d2d30" />
      </div>
      <TargetCursor />
      <div className="relative z-10">
        <HeroSection />
        <InfoBar />
        <main>
          <AmenitiesSection />
          <GallerySection />
          <CulinarySection />
          <InfoSection />
          <RsvpSection />
        </main>
        <Footer />
      </div>
      <FloatingButton />
    </div>
  );
}

export default App;
