import React from 'react';
import '../styles/product_card.scss';
import {Link} from "react-router-dom";

function ProductCard({ data }) {
  return (
      <div id={'product-card-container'} className={'col-12'}>

        {data && data.map((item, index) => (
            <Link to={'/catalogue/' + item.type+'/'+item.name}
                  state={{item}}
                  key={index}
            >
            <div id={'product-card'} key={index}>
              {item.discount > 0 && <span className={'discount-product'}>%</span>}
              <img
                  className={'product-photo'}
                  src={item.image_path}
                  alt={'product_photo'}
              />
              <h1 className={'product-name'}>
                {item.name}
                <span className={'ingridients'}>
              {item.ingridients}
            </span>
              </h1>

              <div className={'product-card-info'}>
                {item.discount > 0 &&
                    <span id={'product-price'} className={'product-price-without-discount'}>
              {item.price} грн.
            </span>
                }
                {item.discount > 0 &&
                    <span className={'product-price-with-discount'}>
                {(item.price - item.discount)} грн.
              </span>
                }
                {
                    item.discount <= 0 &&
                    <span className={'product-price-with-discount'} style={{color: '#000'}}>
                {(item.price - item.discount)} грн.
              </span>
                }
                <span className={'product-weight-or-amount'}>
              {item.weight + 'г'} {item.amount > 1 && '/ ' + item.amount + 'шт'}
            </span>
              </div>
            </div>
            </Link>
        ))}

      </div>
  );
}

export default ProductCard;

