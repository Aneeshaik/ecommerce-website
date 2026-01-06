const CountryComponent = () => {
  return (
    <div className="text-left">
      <h3 className="font-semibold text-gray-900 mb-4">
        Region Country
      </h3>

      <select
        className="w-full max-w-xs border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        defaultValue="AE"
      >
        <option value="AE">United Arab Emirates</option>
        <option value="IN">India</option>
        <option value="US">United States</option>
        <option value="UK">United Kingdom</option>
        <option value="CA">Canada</option>
        <option value="AU">Australia</option>
        <option value="DE">Germany</option>
        <option value="FR">France</option>
        <option value="JP">Japan</option>
        <option value="SG">Singapore</option>
        <option value="SA">Saudi Arabia</option>
      </select>
    </div>
  );
};

export default CountryComponent;
