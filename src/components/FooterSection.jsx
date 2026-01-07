import { Truck, Package, CreditCard, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free in-store pick up",
    subtitle: "24/7 Amazing services",
  },
  {
    icon: Package,
    title: "Free Shipping",
    subtitle: "24/7 Amazing services",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    subtitle: "24/7 Amazing services",
  },
  {
    icon: Headphones,
    title: "Convenient help",
    subtitle: "24/7 Amazing services",
  },
];

const FooterSection = () => {
  return (
    <footer className="w-full bg-[#f6f7f9] mt-6">
      <div className="mx-32">
        <div className="px-4 py-4 flex flex-row justify-between gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 bg-white rounded-xl p-3"
              >
                <div className="text-blue-600">
                  <Icon size={28} />
                </div>

                <div className="flex flex-col items-start">
                  <p className="font-semibold text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.subtitle}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
        <div className="flex justify-between mx-auto px-4 py-4  gap-8 text-sm text-gray-600">
          <div className="text-left">
            <h3 className="font-semibold text-gray-900 mb-4">
              About Emox
            </h3>
            <ul className="space-y-2">
              <li>Company info</li>
              <li>News</li>
              <li>Investors</li>
              <li>Careers</li>
              <li>Diversity & Inclusion</li>
              <li>Advertise with us</li>
              <li>Policies</li>
              <li>Verified Rights Owner (VeRO) Program</li>
              <li>eCI Licenses</li>
            </ul>
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-gray-900 mb-4">
              Order & Purchases
            </h3>
            <ul className="space-y-2">
              <li>Check order status</li>
              <li>Shipping, Delivery & Pickup</li>
              <li>Returns & Exchanges</li>
              <li>Price Match Guarantee</li>
              <li>Product Recalls</li>
              <li>Trade In Program</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-gray-900 mb-4">
              Popular Categories
            </h3>
            <ul className="space-y-2">
              <li>Check order 
                status</li>
              <li>Shipping, Delivery & Pickup</li>
              <li>Returns & Exchanges</li>
              <li>Price Match Guarantee</li>
              <li>Product Recalls</li>
              <li>Trade In Program</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-gray-900 mb-4">
              Support & Services
            </h3>
            <ul className="space-y-2">
              <li>Seller Center</li>
              <li>Contact Us</li>
              <li>eBay Returns</li>
              <li>eBay Money Back Guarantee</li>
            </ul>
          </div>
        </div>
        <div className="bg-[#f6f7f9]">
          <div className="py-4 flex items-center justify-between text-sm text-gray-500">
            {/* Left */}
            <p>© Emox All Rights Reserved.</p>
            {/* Right */}
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-700">Privacy Policy</a>
              <a href="#" className="hover:text-gray-700">Terms of Use</a>
              <a href="#" className="hover:text-gray-700">Warranty Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
