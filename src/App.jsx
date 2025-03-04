import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className="logo">
            <a href="#"><img src="./images/DS.png" alt="回到首頁"></img></a>
        </div>
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#">首頁</a></li>
                <li><a href="#">籃球</a></li>
                <li><a href="#">排球</a></li>
                <li><a href="#">賽事</a></li>
            </ul>
        </nav>
    </header>
    <article>
        <div className="image-container">
            <img src="./images/首圖.png" alt="首圖"></img>
          </div>
        <div className="contain">
            <div className="title">
                <h1>最新消息</h1>
            </div>
            
        </div>
        <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="">
                <img src="./images/news男籃.JPG" alt="男籃"></img>
              </a>
              <div className="desc">數位男籃校長盃二連霸</div>
            </div>
          </div>
          
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="">
                <img src="./images/news女籃.JPG" alt="女籃"></img>
              </a>
              <div className="desc">強勢衝擊，惜拿亞軍</div>
            </div>
          </div>
          
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="">
                <img src="./images/news男籃2.JPG" alt="男籃"></img>
              </a>
              <div className="desc">精采對決，34:32惜敗</div>
            </div>
          </div>
          
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="">
                <img src="./images/news男籃3.JPG" alt="男籃"></img>
              </a>
              <div className="desc">數位大勝兒英，傳奇中鋒回歸</div>
            </div>
          </div>
          
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="">
                <img src="./images/news男籃4.png" alt="男籃"></img>
              </a>
              <div className="desc">交流持續，與景美隊的友誼賽</div>
            </div>
          </div>
          <div className="clearfix"></div>
    </article>
    <footer>
        <div className="foot">
            <ul>
                <li>地址：國立台北教育大學創意館</li>
                <li>Presented by SHUO</li>
                <li>All rights reserved</li>
            </ul>
        </div>
    </footer>
    </>
  )
}

export default App
