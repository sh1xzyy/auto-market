import Image from "next/image";

export const MainImage = () => {
  return (
    <Image
      className="absolute top-[72px] left-1/2 -translate-x-1/2 h-full max-h-[480px] -z-10 object-cover"
      src="/mainImage/main.jpg"
      width={1614}
      height={480}
      alt="go mobile. find whats best for you - on germans biggest vehicle marketplace"
    />
  );
};
