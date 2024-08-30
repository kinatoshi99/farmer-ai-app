import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/logos/farmer-ai-logo.png" // Path to your logo in the public folder
        alt="Farmer AI Logo"
        width={40}
        height={40}
        className="rounded-full border-2 border-primary mr-2" // Rounded shape and border
      />
      <a className="text-xl font-bold">Farmer.Ai</a>
    </div>
  );
};

export default Logo;
