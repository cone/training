import Image from "next/image";

const Banner = () => {
  return (
    <header>
      <div>
        <Image src="/generic.jpg" alt="logo" width="200" height="200"/>
      </div>
      <div>
        This is a test
      </div>
    </header>
  )
};

export default Banner;
