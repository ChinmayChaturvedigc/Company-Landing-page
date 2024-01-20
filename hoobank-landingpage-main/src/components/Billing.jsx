import { apple, bill, google, arrowUp } from "../assets";
import styles, { layout } from "../style";
import { vector } from "../assets";
const Billing = () => (
  <section
    id="product"
    // className={layout.sectionReverse}
  >
    <div className="flex flex-wrap flex-row-reverse">
      <div className={layout.sectionImgReverse}>
        {/* <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        /> */}

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div>
        <h2
          className={`space-grotesk-text  font-bold xs:text-[24px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>
          What We Love Doing
          <br className="sm:block hidden" />
        </h2>
        <p
          className={`space-grotesk-text  font-bold xs:text-[20px] font-light text-white text-left w-[18rem] xs: w-full`}
          // className={`${styles.paragraph} max-w-[470px] mt-5`}
        >
          We provide a range of services to help businesses create exceptional
          digital products.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          {/* <img
            src={apple}
            alt="google_play"
            className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google_play"
            className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
          /> */}
        </div>
      </div>
    </div>
    <div className="relative">
      <img
        src={vector}
        alt="Your Image Alt Text"
        className="w-full h-full rounded-[2rem] hover:blur-lg"
      />

      <h2 className="hidden sm:block space-grotesk-text absolute top-[2rem] left-[17.5rem] transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl">
        Get an evaluation of your website/app done!
      </h2>
      <p className="hidden sm:block space-grotesk-text  mt-4 absolute top-[5rem] left-[21rem] transform -translate-x-1/2 -translate-y-1/2 text-white text-xl w-[45%] text-left ">
        Unleash the Full Potential of Your Website! Get a UX and UI review for ₹
        5000 today and boost your online success.
      </p>
      {/* <div class=" hidden sm:block  flex box-border h-[0rem] w-[9rem] p-4 border-2 rounded-[200px] absolute top-[6rem] right-[0rem] transform -translate-x-1/2 -translate-y-1/2 text-white text-left">
        <p> Order now</p>
        <img className=" h-[2rem] w-[2rem] rotate-90" src={arrowUp} />
      </div> */}
    </div>
  </section>
);

export default Billing;
