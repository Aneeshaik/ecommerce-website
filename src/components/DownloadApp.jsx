import appstore from "../assets/footer/appstore.png";
import googleplay from "../assets/footer/googleplay.jpg";

const DownloadApp = () => {
  return (
    <div className="text-left">
      <h3 className="font-semibold text-gray-900 mb-4">
        Download Our App
      </h3>

      <div className="flex gap-3 items-center">
        <img src={googleplay} alt="Download App" className="h-16 w-30 block cursor-pointer  rounded-2xl"/>
        <img src={appstore} alt="Download App" className="h-16 w-30 block cursor-pointer rounded-2xl"/>
      </div>
    </div>
  );
};

export default DownloadApp;
