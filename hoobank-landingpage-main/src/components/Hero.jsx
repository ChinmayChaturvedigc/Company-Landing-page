import styles from "../style";
import { discount, robot, guy, arrowUp } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={` md:flex-row flex-col ${styles.paddingY} `}>
      <div>
        <h1
          className={`michroma-text ss:text-[50px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] sm:text-center text-[2.3rem]`}>
          Revolutionize Your Digital Presence
        </h1>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div id="guy" className="flex flex-col items-center">
        <div className=" m-3 flex h-[16rem] w-[16rem] items-center justify-center rounded-full border-[1rem] border-[#000]  inline-flex">
          <img src={guy} className="h-[13rem] " />
        </div>

        <a href={`#home`}>
          <div className="m-4 box-border h-[4.5rem] w-[3rem] p-4 border-2 rounded-[200px] ">
            <img className=" h-[2rem] w-[2rem]" src={arrowUp} />
          </div>
        </a>
        <p
          className={`${styles.paragraph} space-grotesk-text text-xl not-italic max-w-[470px] mt-5 text-center font-bold`}>
          Step into the Future with UNDRDG Studios!
        </p>
        <p
          // className={`${styles.paragraph} max-w-[470px] mt-5 text-center`}
          className={`${styles.paragraph} space-grotesk-text text-lg  max-w-[470px] mt-5 text-center `}>
          We teleport your brand to the digital stratosphere, specializing in
          UX/UI Design, development, and AI tools.
        </p>
      </div>
    </section>
  );
};

export default Hero;
