import { use } from "react";
import Products from "../Products/Products";
import AddCard from "../AddCard/AddCard";



const Premium = ({productPromise,buyNow,setBuyNow,isSelected,setIsSelected}) => {

    const productData=use(productPromise)

  
    // const handleButton = () =>{
    //     setIsSelected(!isSelected)

    // }
    return (
        <>
           <div className="mx-auto w-[700px] text-center mt-8">
                          
            <h1 className="font-bold text-4xl">Premium Digital Tools</h1>
            <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            <div>
               <button onClick={()=>setIsSelected(false)} className={`btn ${isSelected === false ?  'bg-purple-600 text-white':""} rounded-2xl mr-2 `}>Products</button>
               <button onClick={()=>setIsSelected(true)} className={`btn ${isSelected ?' bg-purple-600 text-white':""} rounded-2xl mr-2 `}>Cart ({buyNow.length})</button> 
            </div>
            
        </div>
        {
            isSelected === false ? <Products productData={productData} buyNow={buyNow} setBuyNow={setBuyNow}></Products> : <AddCard buyNow={buyNow} setBuyNow={setBuyNow}></AddCard>
        }
        
        </>
     
        
    );
};

export default Premium;