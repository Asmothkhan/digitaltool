
import Card from '../Card/Card';

const Products = ({productData,buyNow,setBuyNow}) => {
    // console.log(productData);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                productData.map(product =>(
                    <Card product={product} buyNow={buyNow} setBuyNow={setBuyNow}></Card>
                ))
            }
        </div>
    );
};

export default Products;