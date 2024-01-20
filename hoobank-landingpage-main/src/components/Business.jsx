import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { card1, card2, card3, card4, eye, text, arrowUp } from "../assets";

const Business = () => (
  <section id="features" className={layout.section}>
    <div
      // className={layout.sectionInfo}
      className="flex-1 flex items-start flex-col">
      <img src={eye} />
      {/* <h2 className={`${styles.title} space-grotesk-text text-4xl text-white`}>
        OUR VISION FOR YOU
      </h2> */}
      {/* <p
        className={`leading-[76.8px] leading-[66.8px] w-full text-4xl bg-gradient-to-r from-[#9613AD] via-[#A0004F] to-[#F1AE00] to-[#FFDCC5] to-[#A0004F] text-transparent bg-clip-text inline-block sm:bg-clip-none`}>
        Business
      </p> */}
      <img src={text} className="md:w-[40%] sm: w-[99%] mb-5" />
      {/* <div class="m-4 box-border h-[2rem] w-[6rem] p-4 border-2 rounded-[200px] ">
        <img className=" rotate-90 h-[1rem] w-[8rem]" src={arrowUp} />
      </div> */}
      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div
    // className={`${layout.sectionImg} flex-col`}
    >
      <div class="grid grid-rows-2 grid-flow-col gap-4 ">
        <div className=" shadow-lg shadow-cyan-500/50 rounded-xl w-full flex flex-col relative xs:mt-5 ">
          <img
            className=" w-full object-contain min-h-0 rounded-lg "
            src={card1}
          />
          <h2 className="hidden sm:block space-grotesk-text absolute transform text-white text-2xl pt-[5rem] pl-3">
            Transformative
          </h2>
          <p className="hidden sm:block space-grotesk-text  absolute transform text-white text-[15px] pt-[8rem] pl-3">
            The ability of our service to bring about significant positive
            changes in your digital product, ultimately transforming your
            bussiness in a meaningful way.
          </p>
        </div>
        <div className="shadow-lg shadow-cyan-500/50 rounded-xl h-50 w-full flex flex-col relative ">
          <img
            className=" w-full object-contain min-h-0 rounded-lg"
            src={card3}
          />
          <h2 className="hidden sm:block space-grotesk-text absolute transform text-white text-2xl pt-[6rem] pl-3">
            Seamless
          </h2>
          <p className="hidden sm:block space-grotesk-text  absolute transform text-white text-[15px] pt-[10rem] pl-3">
            Our design are seamless and intutive, ensuring that users can easily
            navigate and interact with your digital product without any friction
          </p>
        </div>
        <div className=" shadow-lg shadow-cyan-500/50 rounded-xl h-50 w-full flex flex-col relative ">
          <img
            className="w-full object-contain min-h-0 rounded-lg"
            src={card2}
          />
          <h2 className="hidden sm:block space-grotesk-text absolute transform text-white text-2xl pt-[6rem] pl-3">
            Customized
          </h2>
          <p className="hidden sm:block space-grotesk-text  absolute transform text-white text-[15px] pt-[9rem] pl-3">
            We take the time to understand your unique bussiness needs and
            tailor our service to ensure that you receive customized solution
            that meets your goals.
          </p>
        </div>

        <div className=" shadow-lg shadow-cyan-500/50 rounded-xl h-50 w-full flex flex-col relative ">
          <img
            className="w-full object-contain min-h-0 rounded-lg"
            src={card4}
          />
          <h2 className="hidden sm:block space-grotesk-text absolute transform text-white text-2xl pt-[6rem] pl-3">
            Impactful
          </h2>
          <p className="hidden sm:block space-grotesk-text  absolute transform text-white text-[15px] pt-[10rem] pl-3">
            Our UX and UI design solution are impactful, creating a lasting
            impression on user and driving business growth
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Business;
