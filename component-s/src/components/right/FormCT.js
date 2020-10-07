import React from 'react';
import '../../index.css'


function FormCT(){
  return (

    <div className="Contents">
      <div className="right">
        <div className="right-form">
          <div className="form">
            <h2>ĐĂNG KÝ NHẬN BÀI VIẾT MỚI</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quam a</p>
            <input type="text" placeholder="TÊN CỦA BẠN" />
            <input type="text" placeholder="EMAIL CỦA BẠN" />
            <input className="checkbox" type="checkbox"/><p className="p-check">Lorem ipsum dolor sit amet co</p>
            <button className="btn">ĐĂNG KÝ</button>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FormCT