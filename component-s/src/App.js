import React from 'react';
// import logo from './logo.svg';
import './App.css';
import FormCT from './components/right/FormCT'
import MainCT from './components/left/MainCT'
import NewsCT from './components/right/NewsCT'

function App() {
  let titleLeft = "SERIES: REACT JS: TỪ CƠ BẢN ĐẾN NÂNG CAO";
  let titleImg = "Hướng dẫn học REACTJS";
  let srcimg = "./img/involve3.jpg";
  let titleNews = "Bài viết mới";
  let props = {titleLeft,titleImg,titleNews,srcimg};
  
  return (
    <div className="App">
      <MainCT {...props}></MainCT>
      <FormCT></FormCT>
      <NewsCT {...props}></NewsCT>
    </div>
  );
}

export default App;
