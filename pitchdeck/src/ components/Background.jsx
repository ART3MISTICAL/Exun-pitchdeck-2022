import Particles from "react-particles";
import React from "react";
// import { Engine } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";

export default class ParticlesContainer extends React.PureComponent {
  // this customizes the component tsParticles installation
  async customInit(Engine) {
    // this adds the preset to tsParticles, you can safely use the
    await loadLinksPreset(Engine);
  }

  render() {
    const options = {
      preset: "links",
    };

    return <Particles options={options} init={this.customInit} />;
  }
}

// import particlesConfig from "./config/particles-config";

// const ParticlesContainer = () => {
//   return <Particles params={particlesConfig}></Particles>;
// };

// export default ParticlesContainer;
