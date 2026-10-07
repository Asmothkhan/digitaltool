import Group from '../../assets/Group5.png';
import play from '../../assets/Play.png';
import BannerImg from '../../assets/banner.png'
const Banner = () => {
    return (
        <div className='grid grid-cols-2 gap-5 mt-10'>
            <div className='mt-40'>
               <div  className='flex  items-center border-0 bg-slate-300 text-purple-500 rounded-4xl p-1 w-65 mb-2'>
                <img src={Group} alt="" /> 
               <h3 className='text-purple-600'>New: Al-Powered Tools Available</h3>
               </div>
               <h1 className='text-4xl font-bold mb-2'>Supercharge Your Digital Workflow</h1>
               <p className='mb-2'>Access premium AI tools, design assets, templates, and productivity
                software—all in one place. Start creating faster today.

                Explore Products
                </p>
                <div className='flex gap-4'>
                    <button className='btn bg-linear-to-r from-purple-700  to-purple-500 text-white rounded-4xl'>Explore Products</button>
                    <button className='btn flex items-center gap-2 bg-white text-purple-600 border-2 border-purple-500 rounded-4xl'> <img src={play} alt="" /> Watch Demo</button>
                </div>
            </div>
            <div>
                <img src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;