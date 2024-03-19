import Image from "next/image";

const Banner = () => {
  return (
    <header className="row mb-4">
      <div className="col-5">
        <Image src="/generic.jpg" alt="logo" width="200" height="200"/>
      </div>
      <div className="col-7 mt-5">
        This is a test
      </div>
    </header>
  )
};

export default Banner;
