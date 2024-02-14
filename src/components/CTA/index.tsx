import styles from "../../style";
import Button from "../Button";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex-col">
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Register today & start exploring the endless possiblities.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button styles="mt-10" />
      </div>
    </section>
  );
};

export default CTA;
