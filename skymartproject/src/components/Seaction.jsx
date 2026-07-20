import React from "react";
import { Truck, ShieldCheck, BadgePercent } from "lucide-react";

const Seaction = () => {
  const features = [
    {
      id: 1,
      title: "Fast Delivery",
      desc: "Same-day on select items",
      icon: <Truck size={26} />,
      color: "text-yellow-400",
      bg: "group-hover:bg-yellow-400/10",
    },
    {
      id: 2,
      title: "Secure Payments",
      desc: "100% Encrypted Checkout",
      icon: <ShieldCheck size={26} />,
      color: "text-blue-400",
      bg: "group-hover:bg-blue-400/10",
    },
    {
      id: 3,
      title: "Best Prices",
      desc: "Price Match Guarantee",
      icon: <BadgePercent size={26} />,
      color: "text-emerald-400",
      bg: "group-hover:bg-emerald-400/10",
    },
  ];

  return (
    <section className="w-full bg-gray-200 dark:bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-7 p-9">
        {features.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl border border-zinc-700 dark:bg-[#121212] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-lime-400 hover:shadow-[0_15px_40px_rgba(163,230,53,.15)]"
          >
            {/* Glow Effect */}
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-lime-400/5 blur-3xl opacity-0 group-hover:opacity-100 duration-500"></div>

            <div className="flex items-center gap-5 relative z-10">
              <div
                className={`w-16 h-16 rounded-xl bg-red-500 dark:bg-[#1b1b1b] border border-zinc-700 flex items-center justify-center ${item.color} ${item.bg} transition-all duration-500 group-hover:scale-110`}
              >
                {item.icon}
              </div>

              <div>
                <h2 className="dark:text-white text-xl font-semibold group-hover:text-lime-400 transition">
                  {item.title}
                </h2>

                <p className="text-zinc-400 mt-1 text-sm">{item.desc}</p>
              </div>
            </div>

            {/* Bottom Line Animation */}
            <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-lime-400 group-hover:w-full transition-all duration-500"></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Seaction;
