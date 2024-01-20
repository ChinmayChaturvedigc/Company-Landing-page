import { sparkle, testimonial } from "../assets";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient " />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 relative z-[1]">
      <div>
        <img src={sparkle} />
        {/* <h2 className="space-grotesk-text xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Our
        </h2> */}
        <img src={testimonial} className="md:w-full sm: w-[99%] " />
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
