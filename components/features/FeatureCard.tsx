import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={400}
        className="w-40 h-40 object-cover rounded-full mb-4"
      />
      <h3 className="text-2xl font-semibold text-secondary">{title}</h3>
      <p className="text-center mt-2">{description}</p>
    </div>
  );
};

export default FeatureCard;
