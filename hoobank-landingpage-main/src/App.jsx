import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";
import Cursor from "./components/Cursor";

const App = () => (
  <>
    <Cursor />
    <div
      className={`${styles.paddingX} ${styles.flexCenter} bg-[#000] w-full overflow-hidden sticky top-0 z-[9]`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className="bg-[#000] w-full overflow-hidden ">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} pl-20 sm:text-center pl-0`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Stats /> */}
          <Billing />
          <Business />
          {/* <CardDeal /> */}
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  </>
);

export default App;
