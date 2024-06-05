import Header from './components/Header'
import './App.css'
import ProductCard from './components/ProductCard'


function App() {

  const products = [
    {
      id:1,
      tittle:"Softest Cotton Pleated Shirt Dress", 
      img:"https://cdn.shopify.com/s/files/1/0785/1674/8585/files/21MayVirgio-06801.jpg?v=1717051381&width=187&height=281&crop=center",
      price:2990 
    },
    {
      id:2,
      tittle:"Versatile Viscose Fit And Flare Mini Dress",
      img:"https://cdn.shopify.com/s/files/1/0785/1674/8585/files/7thMayVirgio-7806.jpg?v=1716368031&width=187&height=281&crop=center",
      price:1800
    },
    {
      id:3,
      tittle:"Pink Waist Cut-Out Cotton Dress",
      img:"https://cdn.shopify.com/s/files/1/0785/1674/8585/files/VWWDR2419016202_1.jpg?v=1716282087&width=187&height=281&crop=center",
      price:3000
    },
    {
      id:3,
      tittle:"Pink Waist Cut-Out Cotton Dress",
      img:"https://cdn.shopify.com/s/files/1/0785/1674/8585/files/VWWDR2419016202_1.jpg?v=1716282087&width=187&height=281&crop=center",
      price:3000
    },
    {
      id:2,
      tittle:"Versatile Viscose Fit And Flare Mini Dress",
      img:"https://cdn.shopify.com/s/files/1/0785/1674/8585/files/7thMayVirgio-7806.jpg?v=1716368031&width=187&height=281&crop=center",
      price:1800
    }
    
  ]

  return (
    <>
    <main>
      <Header /> 
      <section className="section1">
        <div className="container">
            <div className="images">
                <img src="https://cdn.shopify.com/s/files/1/0785/1674/8585/files/0932.jpg?v=1717134297" alt="" className="image1" />
                <img src="https://cdn.shopify.com/s/files/1/0785/1674/8585/files/0915.jpg?v=1717134297" alt="" className="image2" />
                <img src="https://cdn.shopify.com/s/files/1/0785/1674/8585/files/0916.jpg?v=1717134297" alt="" className="image3" />
                <img src="https://cdn.shopify.com/s/files/1/0785/1674/8585/files/0971.jpg?v=1714672389" alt="" className="image4" />
                <img src="https://cdn.shopify.com/s/files/1/0785/1674/8585/files/0932.jpg?v=1717134297&width=552&crop=center" alt="" id='main-image' />
            </div>
            <div>
                <h1 className='h1' id="productTitle">Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket</h1>
                <span className='h3 price'>
                    MRP ₹
                    <span className='price'>30.00</span>
                </span>
                <ul className="variants">
                    <li className="variant">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII=" alt="" />
                    </li>
                    <li className="variant">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII=" alt="" />
                    </li>
                    <li className="variant">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII=" alt="" />
                    </li>
                </ul>
                <p className='p'>100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON</p>
                <div className="buttonholder">
                    <button className='btn buttonPrimary'>add to cart</button>
                    <a className='btn buttonSecondary' href="#">Buy now</a>
                </div>
            </div>
        </div>
    </section>  

    <section className="section2">
        <div className="container">
            <h2>Similar product</h2>
            <div className="productList">
               <ProductCard tittle="Tier Dress With Smocking Detail" img="https://cdn.shopify.com/s/files/1/0785/1674/8585/files/0932.jpg?v=1717134297&width=187&height=281&crop=center" price={2690}/>
               <ProductCard tittle="Sultry Cotton Off-Shoulder Midi Dress" img="https://cdn.shopify.com/s/files/1/0785/1674/8585/files/7thMayVirgio-6436.jpg?v=1717055105&width=187&height=281&crop=center" price={2290}/>
               <ProductCard tittle="Breathable Denim Cotton Dress" img="https://cdn.shopify.com/s/files/1/0785/1674/8585/files/1_VWWDR2336012802_74047dbe-442a-42f7-9a5e-d599bc67e86b.jpg?v=1706284394&width=187&height=281&crop=center" price={1430}/>
               {
                products.map(product =>{
                  return(
                    <ProductCard key={product.id} tittle={product.tittle} img={product.img} price={product.price}/>
                  )
                })
               }
               <ProductCard />
               <ProductCard />
            </div>
        </div>
    </section>
 
    </main>
   
    </>
  )
}

export default App
