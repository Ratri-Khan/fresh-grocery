import './Banner.css'
import { MdOutlineWavingHand } from "react-icons/md";

const Banner = () => {
  return (
    <div className="banner flex items-center">
      <div className='w-6/12 mx-auto text-center text-white/60 my-auto'>
      <h1 className='hidden text-3xl font-bold md:flex items-center gap-3 justify-center'>
        Welcome To Our Store <MdOutlineWavingHand /></h1>
        <p className='text-3xl py-3'>Super Discount For This Week</p>
        <p className='text-xl text-yellow-500'>Don&apos;t miss it</p>
      </div>
      
    </div>
  );
};

export default Banner;