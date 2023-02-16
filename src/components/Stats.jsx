import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 xl:px-0 sm:px-16 px-6 justify-around`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex items-center flex-row m-3 justify-center`}>
        <h4 className="font-poppins font-semibold xs:text-[2.555625rem] text-[1.930625rem] xs:leading-[3.3225rem] leading-[2.6975] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;