import Image from "next/image";

export const CompanyBanner = ({ company }) => {
  const { banner, name, logo } = company;
  return (
    <div className="relative pointer-events-none">
      <Image
        className="w-full max-h-[329px] rounded-lg object-cover mb-2"
        src={banner}
        width={978}
        height={326}
        alt={name}
        priority
      />

      <div className="absolute bottom-[5%] left-[1.5%] flex items-center w-36 h-[108px] rounded-lg p-4 bg-light-white">
        <Image src={logo} width={112} height={46} alt={name} priority />
      </div>
    </div>
  );
};
