import {ProductButtons,ProductCard,ProductImage,ProductTitle} from '../components/index';
import  '../styles/custom-styles.css';

const product = {
  id:'1',
  title:'Coffee Mug-Card',
  img:'./coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
          display:'flex',
          flexDirection:'row',
          flexWrap:'wrap'
          }}>

        <ProductCard 
          className='bg-dark text-title'
          product={ product }>
          <ProductCard.Image className='custom-image '/>
          <ProductCard.Title className='text-font' />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard
         product={ product }
         className='bg-dark text-title'
         >
          <ProductImage className='custom-image '
          style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}}/>
          <ProductTitle  className='text-font'/>
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
         product={ product }
         style={{
          backgroundColor:'#70D1F8'
        }}
         >
          <ProductImage style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}} />
          <ProductTitle style={{ fontWeight:'bold' }} />
          <ProductButtons style={{ 
            display:'flex',
            justifyContent:'end'
          }}/>
        </ProductCard>
        </div>
    </div>
  )
} 

