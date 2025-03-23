import { motion } from "framer-motion";

const OutTeamSection = () => {
  return (
    <section className="min-h-screen flex flex-col gap-16 p-4 ">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "fit-content" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ amount: 0.5 }}
        className="w-fit bg-[#2F2F2F] whitespace-nowrap overflow-hidden"
      >
        <h1 className="px-4 py-2 text-6xl text-white font-extrabold">
          Our Team
        </h1>
      </motion.div>

      <div className="max-w-5xl m-auto">
        <div className=" relative flex">
          <div className="w-[40%] sm:w-[20%] bg-white"></div>
          <img
            src="https://a.storyblok.com/f/178900/1920x1080/36a4b04946/alya-sometimes-hides-her-feelings-in-russian.png"
            alt="test"
            className="h-[100vh] w-[60%] sm:w-[80%] object-cover"
          />
          <div className="absolute flex flex-col justify-between h-full w-full px-16 pt-8">
            <div className="flex flex-col gap-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "fit-content" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ amount: 0.5 }}
                className="w-fit bg-[#2F2F2F] whitespace-nowrap overflow-hidden"
              >
                <p className="px-4 py-2 text-5xl font-bold text-white">
                  whyzotee
                </p>
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "fit-content" }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                viewport={{ amount: 0.5 }}
                className="w-fit bg-[#2F2F2F] whitespace-nowrap overflow-hidden"
              >
                <p className="px-4 py-2 text-4xl font-bold text-white">
                  Founder
                </p>
              </motion.div>
            </div>

            <div className="flex flex-col gap-2 font-bold text-[#2F2F2F]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "fit-content" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ amount: 0.5 }}
                className="w-fit bg-white whitespace-nowrap overflow-hidden"
              >
                <p className="px-4 py-2 text-7xl">VOL</p>
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "fit-content" }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                viewport={{ amount: 0.5 }}
                className="w-fit bg-white whitespace-nowrap overflow-hidden"
              >
                <p className="px-4 py-2 text-6xl">04</p>
              </motion.div>
            </div>

            <div className="flex flex-col gap-4 font-bold">
              <div>
                <motion.div
                  // initial={{ y: 100, opacity: 0 }}
                  // whileInView={{ y: 0, opacity: 1 }}
                  // transition={{ duration: 0.5, ease: "easeInOut" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "fit-content" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ amount: 0.5 }}
                  className="w-fit bg-[#2F2F2F] whitespace-nowrap overflow-hidden"
                >
                  <p className="px-2 py-1 text-white">Github</p>
                </motion.div>
                <motion.div
                  // initial={{ y: 100, opacity: 0 }}
                  // whileInView={{ y: 0, opacity: 1 }}
                  // transition={{ duration: 0.5, ease: "easeInOut" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "fit-content" }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                  viewport={{ amount: 0.5 }}
                  className="w-fit bg-white whitespace-nowrap overflow-hidden"
                >
                  <p className="px-2 py-1 text-[#2F2F2F]">
                    test@mofunetive.cloud
                  </p>
                </motion.div>
              </div>

              <div>
                <motion.div
                  // initial={{ y: 100, opacity: 0 }}
                  // whileInView={{ y: 0, opacity: 1 }}
                  // transition={{ duration: 0.5, ease: "easeInOut" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "fit-content" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ amount: 0.5 }}
                  className="w-fit bg-[#2F2F2F] whitespace-nowrap overflow-hidden"
                >
                  <p className="px-2 py-1 text-white">Wakatime</p>
                </motion.div>
                <motion.div
                  // initial={{ y: 100, opacity: 0 }}
                  // whileInView={{ y: 0, opacity: 1 }}
                  // transition={{ duration: 0.5, ease: "easeInOut" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "fit-content" }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                  viewport={{ amount: 0.5 }}
                  className="w-fit bg-white whitespace-nowrap overflow-hidden"
                >
                  <p className="px-2 py-1 text-[#2F2F2F]">
                    test@mofunetive.cloud
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "fit-content" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ amount: 0.5 }}
                className="w-fit bg-white whitespace-nowrap overflow-hidden"
              >
                <p className="px-8 py-4 text-7xl text-[#2F2F2F]">Fullstack</p>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.h1
          initial={{ width: 0 }}
          whileInView={{ width: "fit-content" }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          viewport={{ amount: 0.5 }}
          className="mt-4 ml-24 text-2xl text-[#2F2F2F] font-bold whitespace-nowrap overflow-hidden"
        >
          But i love frontend more than
        </motion.h1>
      </div>
    </section>
  );
};

export default OutTeamSection;
