import { Check } from 'lucide-react';
import { toast } from 'react-toastify';

const Card = ({product,buyNow,setBuyNow}) => {
    // console.log(product);
    const {description,features,icon, name,period
,price,tag}=product

     
        const notify = () => toast("Wow so easy!");
      
        const handleBuyNow = (product) =>{

          const alreadyAdded = buyNow.find( buy => buy.id === product.id );
          if (alreadyAdded) { toast.warning("Already added to cart!"); return; }
            setBuyNow([...buyNow,product])
            notify()
        }

        
    return (
       <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body relative">
    <span className={`badge  badge-xs  absolute flex ml-70 -mt-5 ${tag === 'Popular'? 'bg-cyan-400' : tag === 'Best Seller' ? 'bg-green-500': tag === 'New' ? 'bg-amber-300':''}`}>{tag}</span>
    <h1 className='text-2xl'>{icon}</h1>
    <h1 className='text-2xl font-bold'>{name}</h1>
    <p>{description}</p>
   
     <div className='flex items-center'>
           <h2 className='text-2xl'>{price}/</h2>
           <h4>{period}</h4>
     </div>
   
    <ul>
        {
          features.map(feature =>(
            <li className='flex gap-1'><Check className='text-blue-500'></Check>{feature}</li>
          ))  
        }
    </ul>
    
   
    <div className="mt-6">
      <button onClick={()=>handleBuyNow(product)}  className="btn bg-linear-to-r from-purple-700  to-purple-600 text-white font-bold rounded-4xl btn-block">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Card;