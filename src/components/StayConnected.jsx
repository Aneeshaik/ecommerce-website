import facebook from "../assets/footer/facebook.jpg";
import instagram from "../assets/footer/instagram.jpg";
import linkedin from "../assets/footer/linkedin.jpg";
import youtube from "../assets/footer/youtube.jpg";

const StayConnected = () => {
  return (
    <div className="text-left">
      <h3 className="font-semibold text-gray-900 mb-4">
        Stay Connected
      </h3>

      <div className="flex gap-3">
        <div className="h-10 w-10">
          <img src={facebook} alt="facebook" className="w-full h-fullobject-contain" />
        </div>
        <div className="h-10 w-10">
          <img src={instagram} alt="instagram" className="w-full h-full object-contain"/>
        </div>
        <div className="h-10 w-10">
          <img src={linkedin} alt="linkedin" className="w-full h-full object-contain"/>
        </div>
        <div className="h-10 w-10">
          <img src={youtube} alt="youtube" className="w-full h-full object-contain"/>
        </div>
        
      </div>
    </div>
  );
};

export default StayConnected;
