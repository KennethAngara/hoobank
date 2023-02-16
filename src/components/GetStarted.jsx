import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[8.75rem] h-[8.75rem] rounded-full bg-blue-gradient p-[0.125rem] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[1.125rem] leading-[1.525rem]">
          <span className="text-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[1.4375rem] h-[1.4375rem] object-contain ml-1" />
      </div>
      
      <p className="font-poppins font-medium text-[1.125rem] leading-[1.525rem]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;