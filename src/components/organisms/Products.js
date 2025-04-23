import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import Image from 'next/image';

const products = dataSite.products;

const ProductShowcase = () => {
  const { validateProductInCart, handleAddOrRemoveProduct } = useCart();
  return (
    <section id='products' className=' px-6 md:px-20 py-20 text-white'>
      <h1 className='text-3xl md:text-4xl font-semibold text-center mb-10'>
        OUR PRODUCTS
      </h1>
      <div className='grid sm:grid-cols-2 gap-10'>
        {products.map((product) => {
          const isInCart = validateProductInCart(product.id);
          const handleClick = () => {
            handleAddOrRemoveProduct(product.id);
          };

          return (
            <div key={product.id}>
              <div className='rounded-3xl overflow-hidden mb-4'>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={400}
                  className='w-full h-56 object-cover'
                />
              </div>

              <div className='text-sm text-green-400 italic mb-1'>
                {product.description}
              </div>
              <h3 className='text-lg font-semibold mb-1'>{product.name}</h3>
              <p className='text-gray-300 text-sm mb-1'>
                ${parseFloat(product.price).toFixed(2)} USD
              </p>
              <button
                onClick={handleClick}
                style={{
                  backgroundColor: isInCart ? '#FF6347' : '#4CAF50',
                }}
                className='bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600'
              >
                {isInCart ? 'Remove from Cart' : 'Add to Cart'}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductShowcase;
