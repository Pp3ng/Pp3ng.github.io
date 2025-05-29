import LocationCard from "./LocationCard";
import StacksCard from "./StacksCard";

const InfoCards = () => {
  return (
    <section
      className="py-[45px] max-w-[1024px] my-5 mx-auto px-[14px]"
      data-aos="fade-up"
    >
      <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
        <LocationCard />
        <StacksCard />
      </div>
    </section>
  );
};

export default InfoCards;
