// src/components/RotatingGlobe.jsx
import Globe from "react-globe.gl";

function RotatingGlobe() {
  return (
    <div className="h-[500px] w-full flex justify-center items-center">
      <Globe
        globeImageUrl="https://www.solarsystemscope.com/textures/download/earthmap4k.jpg"
        bumpImageUrl="https://www.solarsystemscope.com/textures/download/earthbump4k.jpg"
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={true}
        atmosphereColor="limegreen"
        atmosphereAltitude={0.25}
        enablePointerInteraction={true}
      />
    </div>
  );
}

export default RotatingGlobe;
