import React, { Component } from 'react'

export default class ProductGrid extends Component {

  render() {

    return (
      <div className="product-grid">

        <div className="product-card">
          <img className='product-thumbnail' src='/assets/photos/product1.png' />
            <div className="product-card-description">
              <div className='product-card-text'> Product Style 1 </div>
              <div className='product-card-price'> $20.00 </div>
            </div>
        </div>

        <div className="product-card">
          <img className='product-thumbnail' src='/assets/photos/product2.png' />
            <div className="product-card-description">
              <div className='product-card-text'> Product Style 2 </div>
              <div className='product-card-price'> $30.00 </div>
            </div>
        </div>

        <div className="product-card">
          <img className='product-thumbnail' src='/assets/photos/product3.png' />
            <div className="product-card-description">
              <div className='product-card-text'> Product Style 2 </div>
              <div className='product-card-price'> $30.00 </div>
            </div>
        </div>

        <div className="product-card">
          <img className='product-thumbnail' src='/assets/photos/product4.png' />
            <div className="product-card-description">
              <div className='product-card-text'> Product Style 2 </div>
              <div className='product-card-price'> $30.00 </div>
            </div>
        </div>

        <div className="product-card">
          <img className='product-thumbnail' src='/assets/photos/product4.png' />
            <div className="product-card-description">
              <div className='product-card-text'> Product Style 2 </div>
              <div className='product-card-price'> $30.00 </div>
            </div>
        </div>

        <div className="product-card">
          <img className='product-thumbnail' src='/assets/photos/product3.png' />
            <div className="product-card-description">
              <div className='product-card-text'> Product Style 2 </div>
              <div className='product-card-price'> $30.00 </div>
            </div>
        </div>

      </div>
    )
  }
}
