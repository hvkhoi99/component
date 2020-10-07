import React from 'react';
import '../../index.css'

function NewsCT(props){
    return (

        <div className="Contents">
          <div className="right">
            <div className="right-news">
              <div className="title-news">
                {props.titleNews}
              </div>
              <div className="block-r">
                <div className="anh-r">
                  <img className="img-r" src={props.srcimg} alt={1} />
                </div>
                <div className="content-r">
                  <h4>Hướng dẫn học REACTJS</h4>
                  <br />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>            
                </div>
              </div>
              <div className="block-r">
                <div className="anh-r">
                  <img className="img-r" src={props.srcimg} alt={1} />
                </div>
                <div className="content-r">
                  <b>Hướng dẫn học REACTJS</b>
                  <br />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>            
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default NewsCT