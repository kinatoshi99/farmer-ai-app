import React from "react";
import FeatureCard from "../features/FeatureCard";

const MainSection: React.FC = () => {
  return (
    <section className="bg-base-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-8">
          Welcome to Farmer AI
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="Marketplace"
            description="Buy and sell fresh produce directly from farmers."
            imageSrc="/images/marketplace.webp"
          />
          <FeatureCard
            title="Community Hub"
            description="Connect with other farmers and share knowledge."
            imageSrc="/images/community.webp"
          />
          <FeatureCard
            title="AI Tools"
            description="Leverage AI tools for farming optimization and decision-making."
            imageSrc="/images/ai-tools.webp"
          />
        </div>
        <div className="text-center mt-12">
          <a href="#" className="btn btn-primary px-6 py-3 text-lg font-medium">
            Join Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
