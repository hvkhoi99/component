import React from 'react';
import '../../index.css'

function MainCT(props){
    return (

        <div className="Contents">
          <div className="left">
            <h1>{props.titleLeft}</h1>
            <div className="block bdtop">
              <div className="anh">
                <img className="img" src={props.srcimg} alt={1} />
              </div>
              <div className="content">
                <h3>{props.titleImg}</h3>
                <br />
                <p className="p1">Posted by NguyenNhan | Th2 23 2016 | Javascript</p>
                <p className="p1">React | 5stars</p>
                <p className="p3-main">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Alias voluptatibus voluptatem nihil.</p>
                <br />
                <button className="btn-main">READ MORE</button>
              </div>
            </div>
            <div className="block">
              <div className="anh">
                <img className="img" src={props.srcimg} alt={1} />
              </div>
              <div className="content">
                <h3>{props.titleImg}</h3>
                <br />
                <p className="p1">Posted by NguyenNhan | Th2 23 2016 | Javascript</p>
                <p className="p1">React | 5stars</p>
                <p className="p3-main">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Alias voluptatibus voluptatem nihil.</p>
                <br />
                <button className="btn-main">READ MORE</button>
              </div>
            </div>
            <div className="block">
              <div className="anh">
                <img className="img" src={props.srcimg} alt={1} />
              </div>
              <div className="content">
                <h3>{props.titleImg}</h3>
                <br />
                <p className="p1">Posted by NguyenNhan | Th2 23 2016 | Javascript</p>
                <p className="p1">React | 5stars</p>
                <p className="p3-main">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Alias voluptatibus voluptatem nihil.</p>
                <br />
                <button className="btn-main">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default MainCT