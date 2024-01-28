import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";
import Button from "../Shared/Button";

const Category2 = () => {
  return (
    <div className="py-4">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col  */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className=" text-white">Enjoy</p>
                <p className="text-3xl font-semibold">With</p>
                <p className="text-4xl xl:text-6xl font-bold opacity-40 mb-3">Gaming</p>
                <Button text={"Browse"} bgColor={"bg-primary"} textColor={"text-white"}/>
              </div>
            </div>
            <img src={Image1} alt="" className="w-[250px] absolute top-1/2 -translate-y-1/2 right-5"/>
          </div>
          {/* second col  */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className=" text-white">Enjoy</p>
                <p className="text-3xl font-semibold">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-3">VR</p>
                <Button text={"Browse"} bgColor={"bg-white"} textColor={"text-brandGreen"}/>
              </div>
            </div>
            <img src={Image2} alt="" className="w-[220px] absolute right-[1.25rem] bottom-0"/>
          </div>
          {/* third col  */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className=" text-white">Enjoy</p>
                <p className="text-3xl font-semibold">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-3">Speaker</p>
                <Button text={"Browse"} bgColor={"bg-white"} textColor={"text-brandBlue"}/>
              </div>
            </div>
            <img src={Image3} alt="" className="w-[200px] absolute -right-[0.75rem] lg:top-[20px]"/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Category2;
