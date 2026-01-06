const PaymentMethods = () => {
  return (
    <div className="text-left">
      <h3 className="font-semibold text-gray-900 mb-4">
        Payment Method
      </h3>

      <div className="flex flex-wrap gap-3 text-sm font-medium text-gray-700">
        <span className="px-3 py-1 bg-white border rounded-md ">Tabby</span>
        <span className="px-3 py-1 bg-white border rounded-md">Tamara</span>
        <span className="px-3 py-1 bg-white border rounded-md">Visa</span>
        <span className="px-3 py-1 bg-white border rounded-md">Mastercard</span>
   
      </div>
    </div>
  );
};

export default PaymentMethods;
