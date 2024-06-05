import React from 'react'

const ProductCard = (props) => {
  return (
    <article className="products">
                    <img src={props.img ? props.img : "https://www.tlbx.app/200-300.svg"} alt="" />
                    <div className="productDetails">
                        <h3 className='h6'>{props.tittle}</h3>
                        <div>
                            <span class="material-symbols-outlined">
                                star
                            </span>
                            <span class="material-symbols-outlined">
                                star
                            </span>
                            <span class="material-symbols-outlined">
                                star
                            </span>
                            <span class="material-symbols-outlined">
                                star
                            </span>
                            <span class="material-symbols-outlined">
                            star_half
                            </span>
                        </div>
                        <div className="priceAndButton">
                            <span className="p">
                                ${props.price}
                            </span>
                             <div className=" btn buttonPrimary">Add to cart</div>
                        </div>
                    </div>
                </article>
  )
}

export default ProductCard