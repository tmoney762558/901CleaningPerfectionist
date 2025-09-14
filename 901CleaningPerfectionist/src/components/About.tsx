import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import { TiStarburst } from "react-icons/ti";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center h-fit min-h-screen md:p-5 p-2 bg-red-300"
    >
      <div>
        <h2 className="mt-[4.5rem] text-center text-3xl text-white font-bold">
          Why You Should Choose Us
        </h2>
      </div>
      <div className="flex flex-1 lg:flex-row flex-col justify-between items-center gap-10 w-full max-w-[75rem]">
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center relative">
            <AiFillSafetyCertificate
              className="absolute z-10"
              fontSize={"3rem"}
              fill="white"
            ></AiFillSafetyCertificate>
            <TiStarburst
              className=""
              fontSize={"10rem"}
              fill="#FF8383"
            ></TiStarburst>
          </div>
          <h3 className="text-2xl text-white font-bold">Certified</h3>
          <p className="mt-3 text-center text-neutral-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            corrupti, nulla asperiores possimus aliquid earum consequuntur esse
            quas officia iste cupiditate ullam neque in pariatur praesentium
            ratione veniam facilis molestias?
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center relative">
            <MdTimer
              className="absolute z-10"
              fontSize={"3rem"}
              fill="white"
            ></MdTimer>
            <TiStarburst
              className=""
              fontSize={"10rem"}
              fill="#FF8383"
            ></TiStarburst>
          </div>
          <h3 className="text-2xl text-white font-bold">Efficient</h3>
          <p className="mt-3 text-center text-neutral-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, rem
            in a amet magnam, consequuntur facere iusto non repudiandae quia
            ullam, eos ipsa? At saepe amet velit totam distinctio id?
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center relative">
            <FaHeart
              className="absolute z-10"
              fontSize={"3rem"}
              fill="white"
            ></FaHeart>
            <TiStarburst
              className=""
              fontSize={"10rem"}
              fill="#FF8383"
            ></TiStarburst>
          </div>
          <h3 className="text-2xl text-white font-bold">We Care</h3>
          <p className="mt-3 text-center text-neutral-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia
            itaque ducimus tenetur, possimus cumque? Ad sapiente qui quos
            placeat, tempore neque cumque perferendis quasi quaerat illo
            accusamus vel labore!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
