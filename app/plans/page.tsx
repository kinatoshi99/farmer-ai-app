"use client";

import React, { useEffect, useRef, useState } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

type PriceId = {
  [key: string]: string;
};

type PriceObject = {
  basic_monthly_id: string;
  basic_yearly_id: string;
  pro_monthly_id: string;
  pro_yearly_id: string;
};

interface Plan {
  name: string;
  priceId: string;
  price: number;
  duration: string;
  features: string[];
}

const dev: PriceObject  = {
  basic_monthly_id: process.env.NEXT_PUBLIC_BASIC_MONTHLY_ID!,
  basic_yearly_id: process.env.NEXT_PUBLIC_BASIC_YEARLY_ID!,
  pro_monthly_id: process.env.NEXT_PUBLIC_PRO_MONTHLY_ID!,
  pro_yearly_id: process.env.NEXT_PUBLIC_PRO_YEARLY_ID!,
};

const prod: PriceObject  = {
  basic_monthly_id: "",
  basic_yearly_id: "",
  pro_monthly_id: "",
  pro_yearly_id: "",
};

const createPlan: (name: string, monthlyPrice: number, yearlyPrice: number, features: string[]) => Plan[] = (name: string, monthlyPrice: number, yearlyPrice: number, features: string[]): Plan[] => [
  {
    name,
    priceId: process.env.NODE_ENV === "development" ?  (dev as PriceId)[`${name.toLowerCase()}_monthly_id`] : (prod as PriceId)[`${name.toLowerCase()}_monthly_id`],
    price: monthlyPrice,
    duration: "/month",
    features,
  },
  {
    name,
    priceId: process.env.NODE_ENV === "development" ?  (dev as PriceId)[`${name.toLowerCase()}_yearly_id`] : (prod as PriceId)[`${name.toLowerCase()}_yearly_id`],
    price: yearlyPrice,
    duration: "/year",
    features,
  },
];

const freePlan: Plan = {
  name: "Free",
  priceId: "",
  price: 0,
  duration: "",
  features: [
    "Basic AI crop recommendations",
    "Community forum access",
    "Simple farm calendar",
    "Limited marketplace listings",
  ],
};

const basicPlans = createPlan("Basic", 1000, 10000, [
  "Advanced AI crop planning",
  "Pest and disease prediction",
  "Enhanced community features",
  "Full farm calendar with reminders",
  "Expanded marketplace access",
  "Basic weather forecasts",
]);

const proPlans = createPlan("Pro", 2500, 25000, [
  "Premium AI-driven farm management",
  "Soil health analysis and recommendations",
  "Precision irrigation planning",
  "Advanced market trend analysis",
  "Integrated supply chain optimization",
  "24/7 expert support",
  "Custom AI model training",
]);

const allPlans = [freePlan, ...basicPlans, ...proPlans];

const CtaButton: React.FC<{
  onClick: () => void;
  variant: "free" | "basic" | "pro";
  children: React.ReactNode;
}> = ({ onClick, variant, children }) => {
  const baseStyle = "w-full py-2 px-4 rounded-md font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg";
  
  const variantStyles = {
    free: "bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600",
    basic: "bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600",
    pro: "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700",
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Pricing: React.FC = () => {
  const { user } = useUser();
  const [selectedPlans, setSelectedPlans] = useState<Record<string, Plan>>({
    Free: freePlan,
    Basic: basicPlans[0],
    Pro: proPlans[0],
  });

  const handlePlanChange = (planName: string, isYearly: boolean) => {
    if (planName === "Free") return;
    const newPlan = allPlans.find(p => p.name === planName && p.duration === (isYearly ? "/year" : "/month"));
    if (newPlan) {
      setSelectedPlans(prev => ({ ...prev, [planName]: newPlan }));
    }
  };

  const handleCheckout = async (plan: Plan) => {
    if (plan.name === "Free") return;
    try {
      const response = await axios.post("/api/checkout_session", {
        priceId: plan.priceId,
      });
      window.location.href = response.data.url;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const PlanCard: React.FC<{ plan: Plan; index: number }> = ({ plan, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.1
        }
      );

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }, []);

    return (
      <div 
        ref={cardRef}
        className={`w-full max-w-sm bg-white p-6 rounded-xl shadow-md flex flex-col justify-between
                    transition-all duration-700 ease-out
                    ${isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div>
          <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
          <div className="flex items-center gap-2 mb-4">
            <p className="text-3xl font-extrabold">${plan.price / 100}</p>
            <span className="text-sm text-gray-600">{plan.duration}</span>
          </div>
          {plan.name !== "Free" && (
            <div className="flex items-center gap-4 mb-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  className="radio"
                  checked={plan.duration === "/month"}
                  onChange={() => handlePlanChange(plan.name, false)}
                />
                <span>Monthly</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  className="radio"
                  checked={plan.duration === "/year"}
                  onChange={() => handlePlanChange(plan.name, true)}
                />
                <span>Yearly (Save 17%)</span>
              </label>
            </div>
          )}
          <ul className="space-y-2 mb-6">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-500">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <CtaButton
          onClick={() => handleCheckout(plan)}
          variant={plan.name.toLowerCase() as "free" | "basic" | "pro"}
        >
          {plan.name === "Free" ? "Get Started" : "Subscribe"}
        </CtaButton>
      </div>
    );
  };

  return (
    <section id="pricing" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Choose Your Farmer AI Plan</h2>
          <p className="text-xl text-gray-600">Unlock the power of AI for your farm</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {Object.values(selectedPlans).map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Pricing;