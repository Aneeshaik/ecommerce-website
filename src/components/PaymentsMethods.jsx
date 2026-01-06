import visa from "../assets/footer/visa.jpg";
import mastercard from "../assets/footer/mastercard.jpg";
import gpay from "../assets/footer/gpay.jpg";
import applepay from "../assets/footer/applepay.jpg";
import americanexpress from "../assets/footer/americanexpress.jpg";

const PaymentMethods = () => {
  return (
    <div className="text-left">
      <h3 className="font-semibold text-gray-900 mb-4">
        Payment Method
      </h3>

      <div className="flex gap-3">
              <div className="h-10 w-10">
                <img src={visa} alt="facebook" className="w-full h-fullobject-contain" />
              </div>
              <div className="h-10 w-10">
                <img src={mastercard} alt="instagram" className="w-full h-full object-contain"/>
              </div>
              <div className="h-10 w-10">
                <img src={gpay} alt="linkedin" className="w-full h-full object-contain"/>
              </div>
              <div className="h-10 w-10">
                <img src={applepay} alt="youtube" className="w-full h-full object-contain"/>
              </div>
              <div className="h-10 w-10">
                <img src={americanexpress} alt="youtube" className="w-full h-full object-contain"/>
              </div>
        </div>
    </div>
  );
};

export default PaymentMethods;
