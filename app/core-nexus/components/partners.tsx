"use client";

import { motion } from "framer-motion";
import { ArrowRight, Link } from "lucide-react";

// Partners data structure
const partners = {
  main: {
    name: "Arbitrum",
    logo: "/arbitrum-white.png",
    link: "https://arbitrum.io",
  },
  platform: {
    name: "Dorahacks",
    logo: "/dorahacks-white.png",
    link: "https://dorahacks.io",
  },
  strategic: [
    {
      name: "Civic",
      logo: "/civic.png",
      link: "https://www.civic.com/",
    },
    {
      name: "Quill AI Network",
      logo: "/quillaudits.svg",
      link: "https://quillai.network/",
    },
    {
      name: "Verbwire",
      logo: "/verbwire.svg",
      link: "https://www.verbwire.com/",
    },
    {
      name: ".xyz",
      logo: "/xyz.png",
      link: "https://gen.xyz",
    },
    // Add more strategic partners as needed
  ],
  community: [
    {
      name: "ActualOne",
      logo: "/actualone.png",
      link: "https://actualone.xyz",
    },
    {
      name: "BhopalDao",
      logo: "/bhopaldao.png",
      link: "https://bhopaldao.xyz",
    },
    {
      name: "Wizz",
      logo: "/wizz.png",
      link: "https://wizzhq.xyz",
    },
    {
      name: "Blockchain Orbit",
      logo: "/orbit.png",
      link: "/",
    },
    {
      name: "MetaFields",
      logo: "/metafields.png",
      link: "/",
    },
    {
      name: "Hack Tour India",
      logo: "/hacktourindia.png",
      link: "/",
    },
    {
      name: "The Origin Guild",
      logo: "/og.png",
      link: "/",
    },
    {
      name: "LucknowDao",
      logo: "/lucknowdao.png",
      link: "/",
    },
    {
      name: "OdishaDao",
      logo: "/odishadao.svg",
      link: "/",
    },
    {
      name: "Coding Club SATI",
      logo: "/sati.png",
      link: "",
    },
    {
      name: "fluxor",
      logo: "/fluxor.jpg",
      link: "https://www.fluxor.io",
    },
    {
      name: "Dev-Station",
      logo: "/devstation.png",
      link: "https://devstations.xyz",
    },
    // Add more community partners as needed
  ],
};

export default function Partners() {
  return (
    <section id="partners" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tighter">
            <span className="relative inline-block">
              Cosmic Partners
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-white"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Supported by leading organizations in the blockchain universe
          </p>
        </motion.div>

        <div className="space-y-32 mb-24">
          {/* Main Partner - Arbitrum */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold text-white/70 mb-12">
              Key Partners
            </h3>
            <div className="grid grid-cols-1 gap-8 place-items-center">
              <motion.a
                href={partners.main.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="relative group w-full h-32">
                  <div className="absolute -inset-0.5 bg-white/5 rounded-lg blur-sm group-hover:bg-white/10 transition duration-300"></div>
                  <div className="relative bg-black transition-all duration-300 rounded-lg p-6 w-full h-full flex items-center justify-center">
                    <img
                      src={partners.main.logo}
                      alt={partners.main.name}
                      className="w-auto h-40 opacity-70 group-hover:opacity-100 transition-all duration-300 sm:h-80 sm:w-auto"
                    />
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Strategic Partners */}
          <div className="space-y-16">
            <h3 className="text-2xl font-semibold text-white/70 text-center">
              Strategic Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 place-items-center">
              {partners.strategic.map((partner, index) => (
                <motion.a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={`strategic-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center"
                >
                  <div className="relative group w-full h-32">
                    <div className="absolute -inset-0.5 bg-white/5 rounded-lg blur-sm group-hover:bg-white/10 transition duration-300"></div>
                    <div className="relative bg-black transition-all duration-300 rounded-lg p-6 w-full h-full flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-auto h-16 opacity-70 group-hover:opacity-100 transition-all duration-300 sm:h-24 sm:w-auto object-contain max-w-[80%]"
                      />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Community Partners */}
          <div className="space-y-16">
            <h3 className="text-2xl font-semibold text-white/70 text-center">
              Community Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 place-items-center">
              {partners.community.map((partner, index) => (
                <motion.a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={`community-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center"
                >
                  <div className="relative group w-full h-24">
                    <div className="absolute -inset-0.5 bg-white/5 rounded-lg blur-sm group-hover:bg-white/10 transition duration-300"></div>
                    <div className="relative bg-black  transition-all duration-300 rounded-lg p-4 w-full h-full flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-auto h-16 opacity-70 group-hover:opacity-100 transition-all duration-300 sm:h-24 sm:w-auto object-contain max-w-[80%]"
                      />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Platform Partner - Dorahacks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold text-white/70 mb-12">
              Platform Partner
            </h3>
            <div className="flex justify-center">
              <motion.a
                href={partners.platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="relative group w-[32rem] h-56"
              >
                <div className="absolute -inset-0.5 bg-white/10 rounded-lg blur-sm group-hover:bg-white/20 transition duration-300"></div>
                <div className="relative bg-black transition-all duration-300 rounded-lg p-8 w-full h-full flex items-center justify-center">
                  <img
                    src={partners.platform.logo}
                    alt={partners.platform.name}
                    className="w-auto h-20 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="py-8"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-0.5 bg-white/5 rounded-lg blur-sm"></div>
          <div className="relative bg-black p-8 md:p-12 rounded-lg border border-white/20 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Become a Partner
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Join us in shaping the future of blockchain technology. Partner
              with Core Nexus to connect with innovative developers and
              projects.
            </p>

            <a href="mailto:rythme@web3spell.fun">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-transparent border border-white rounded-full shadow-2xl"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-white group-hover:opacity-10"></span>
                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span className="absolute inset-0 w-full h-full border border-white rounded-full opacity-10"></span>
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-5"></span>
                <span className="relative flex items-center">
                  Partner With Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
