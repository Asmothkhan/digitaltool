
import CardItem from "../CardItem/CardItem";


const AddCard = ({buyNow,setBuyNow}) => {
     
// console.log(setBuyNow);

    const handleCheckout = () =>{
        setBuyNow([])
    }


    // সব product-এর price যোগ করবে
    const totalPrice = buyNow.reduce(
        (total, buy) => total + buy.price,
        0
    );  
    return (
        <div className="mx-auto w-[1000px] border p-3 border-slate-200 rounded-2xl">
            <h2 className="text-2xl font-bold">Your Cart</h2>
           
            
            {
                buyNow.length === 0 ? (
        <h2 className="text-center text-2xl font-bold py-10">
            Your cart is empty 🛒
        </h2>
    ) : ( 
                buyNow.map(item =>(
                    <CardItem item={item} buyNow={buyNow} setBuyNow={setBuyNow}></CardItem>
                )))
            }
             <div className='flex justify-between items-center mt-5 mb-5 bg-slate-300 p-4 rounded-2xl'>
                <h3 className="text-2xl font-bold">Total</h3>
                
                    <h2  className="text-2xl font-bold">${totalPrice}</h2> 
                
                
            </div>
                <button onClick={handleCheckout} className=' bg-linear-to-r from-purple-700  to-purple-600 w-full text-white p-4 rounded-2xl text-2xl'>Procced To Checkout</button>
        </div>
    );
};

export default AddCard;