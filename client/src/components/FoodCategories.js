import React from 'react';
import '../styles/food_categories.scss';
import { Link  } from 'react-router-dom';

function FoodCategories(){

        return(
      <div id='food-categories' className={'col-12'}>
          <div className={'col-12 '} >
              <Link to={"/catalogue/rolls"}
                    state={{path:'/catalogue/rolls'}}>
                  <img src={'https://pandabanda.city/upload/resize_cache/iblock/0ff/540_300_2/0ff9c16600d1a9456691af18ebbbf05d.jpg'} alt={'rolls'} />
                  <span>Роли</span>
              </Link>
          </div>
          <div className={'col-6 '}>
              <Link to={"/catalogue/roll_sets"}
                    state={{path:'/catalogue/sets'}}>
                  <img src={'https://pandabanda.city/upload/resize_cache/iblock/a3e/255_140_2/a3e2cb6206e60c9c7d783ff39e4e03db.JPG'} alt={'sets'} />
                  <span>Сети</span>
              </Link>
          </div>
          <div className={'col-6 '}>
              <Link to={"/catalogue/pizza"}
                    state={{path:'/catalogue/pizza'}}>
                  <img src={'https://pandabanda.city/upload/resize_cache/iblock/bd7/255_140_2/bd78d4728b3dbe5422169533f1a04ca5.jpg'} alt={'pizza'} />
                  <span>Піца</span>
              </Link>
          </div>
          <div className={'col-6 '}>
              <Link to={"/catalogue/snacks"}
                    state={{path:'/catalogue/snacks'}}>
                  <img src={'https://pandabanda.city/upload/resize_cache/iblock/238/255_140_2/2381937b3b6a7a6903fa41494bb99d93.jpg'} alt={'snacks'} />
                  <span>Закуски</span>
              </Link>
          </div>
          <div className={'col-6 '}>
              <Link to={"/catalogue/drinks"}
                    state={{path:'/catalogue/drinks'}}>
                  <img src={'https://pandabanda.city/upload/resize_cache/iblock/1f2/255_140_2/1f28b978257e7ca1bd755d8b98dd89cf.jpg'} alt={'drinks'} />
                  <span>Напої</span>
              </Link>
          </div>
          <div className={'col-6 '}>
              <Link to={"/catalogue/wok"}
                    state={{path:'/catalogue/wok'}}>
                  <img src={'https://pandabanda.city/upload/resize_cache/iblock/668/255_140_2/668ec1e1902b12605e9fa5304f7a9b8c.jpg'} alt={'wok'} />
                  <span>WOK/Локшина</span>
              </Link>
          </div>
          <div className={'col-6 '}>
              <Link to={"/catalogue/soups"}
                    state={{path:'/catalogue/soups'}}>
                  <img src={'https://pandabanda.city/upload/resize_cache/iblock/9ee/255_140_2/9eede0ae0044992f6fab65467cce4376.jpg'} alt={'soup'} />
                  <span>Супи</span>
              </Link>
          </div>
          <div className={'col-6 '}>
              <Link to={"/catalogue/other"}
                    state={{path:'/catalogue/other'}}>
                  <img src={'https://pandabanda.city/upload/resize_cache/iblock/0e9/255_140_2/0e9bbe7740023b13e0565f1f4768a3fe.jpg'} alt={'additions'} />
                  <span>Додатки</span>
              </Link>
          </div>
      </div>
  )
}

export default FoodCategories