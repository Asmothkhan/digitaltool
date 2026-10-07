import React from 'react';

const CardItem = ({item,buyNow,setBuyNow}) => {
     const {icon, name,
price}=item

const handleRemove = (item) =>{

    const filteredItem=buyNow.filter(buy => buy.name !== item.name);
    setBuyNow(filteredItem)



}

 
    return (
        <div className='mt-10 border-0 bg-slate-100 p-2 rounded-2xl'>
              <div className="flex justify-between items-center">
                <div className='flex'>
                    <h3 className='text-2xl'>{icon}</h3>
                    <div className='ml-2'>
                        <h3 className='text-2xl font-bold'>{name}</h3>
                        
                        <h4>$ {price}</h4>
                    </div>
                </div>
                <button onClick={()=>handleRemove(item)} className="btn text-red-500">Remove</button>
            </div>
         
        
        </div>
    );
};

export default CardItem;