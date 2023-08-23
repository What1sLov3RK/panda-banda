import React, { useEffect, useState, useContext } from 'react';
import '../styles/head.scss';
import { Link } from 'react-router-dom';
function Head(){
    const [backendData, setBackendData] = useState([{'test':'1'}])
        return(
      <div id='head' className='col-12'>
          <div id='logo-container' className='col-6' >
              <a href={"/"}>
                  <img alt='logo' id='logo' src='https://pandabanda.city/upload/main/3e3/3e339e25b91576a536437e18170784e6.png'/>
              </a>
          </div>
          <div id='telephone-container' className='col-6'>
              <a href='tel:+380931000108'  id='telephone'>+380931000108</a>
          </div>
      </div>
  )
}

export default Head