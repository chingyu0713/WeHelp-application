import './App.css'

function App() {
  return (
    <div className="page-wrapper">
      <nav className="navbar">
        <div className="navbar-content">
          <h1>WeHelp第6屆申請網頁 Alan Wang,王靖瑜</h1>
          
          <div className="questions-wrapper">
            <a href="#intro" className="question-item">個人簡介和申請動機。</a>
            <a href="#experience" className="question-item">曾經做過哪些軟體工程技術相關的學習？</a>
            <a href="#schedule" className="question-item">如果參與這個訓練，會怎麼安排學習時間？</a>
            <a href="#investment" className="question-item">軟體技術日新月異，如何確定投入的領域正確有回報？</a>
            <a href="#emotion" className="question-item">請描述一件產生明顯負面情緒的經歷，如何處理該情緒？</a>
            <a href="#connection" className="question-item">如何看待自身工作和整個社會群體的連結關係？</a>
            <a href="#effort" className="question-item">從上次提出申請至今，多做了哪些努力？</a>
            <a href="#other" className="question-item">其他想要對我們說的事情？</a>
          </div>
        </div>
      </nav>

      <div className="content">
        <section id="intro" className="answer-section">
          <h2>個人簡介和申請動機。</h2>
          <p>Hi, 我是 Alan 王靖瑜，身邊有許多朋友都是接觸程式語言的工作，且發現網路上很多的教學資源，進而開始利用空餘時間學習程式語言(JavaScript)，隨著解了HTML/CSS, 發現網頁設計很讓我有趣且富有創意，之後了解了 Udemy 課程試試看時，才發覺投自己喜歡且適合的方向，用程式解決問題像是在玩解謎遊戲一般，可以滿足自己好奇思考的興趣，在 YouTube,Facebook 看到彭彭老師的教學影片以及第六屆 WeHelp 招生資訊，決定把來六年的圖材素材工作，向成為全端工程師邁進！</p>
        </section>

        <section id="experience" className="answer-section">
          <h2>曾經做過哪些軟體工程技術相關的學習？</h2>
          <ul>
            <li>WeHelp Coding 程式解題系統</li>
            <li>freeCodeCamp 題庫(JavaScript/HTML/CSS)</li>
            <li>W3Schools 題庫(JavaScript/HTML/CSS)</li>
            <li>YouTube 彭彭的課程(JavaScript 網頁前端工程)</li>
          </ul>
        </section>

        <section id="schedule" className="answer-section">
          <h2>如果參與這個訓練，會怎麼安排學習時間？</h2>
          <p>每日平均保持 10 小時以上的 coding 練習時間，讓自己保持手感，除了 WeHelp 的訓練以及提前預習專案內需求的方向之外，任何有關(全)端網頁工程的技術都會利用時間練習。</p>
        </section>

        <section id="investment" className="answer-section">
          <h2>軟體技術日新月異，如何確定投入的領域正確有回報？</h2>
          <p>認為學習需隨時首要才能從根本理解需求開發的邏輯，了解到基本運轉在需求開發的階段可以更輕鬆應變！</p>
        </section>

        <section id="emotion" className="answer-section">
          <h2>請描述一件產生明顯負面情緒的經歷，如何處理該情緒？</h2>
          <p>在業務任期間中，對於新水的成長標準已經非常了解了，且學習時間題業務特性質與不不確定性而感壓縮，在工作期間斷斷續續接觸程式語言的時間點，學習的知識無法決定要多多，而感到非常無力混亂，所以決定了一個目標。</p>
        </section>

        <section id="connection" className="answer-section">
          <h2>如何看待自身工作和整個社會群體的連結關係？</h2>
          <p></p>
        </section>

        <section id="effort" className="answer-section">
          <h2>從上次提出申請至今，多做了哪些努力？</h2>
          <p></p>
        </section>

        <section id="other" className="answer-section">
          <h2>其他想要對我們說的事情？</h2>
          <p></p>
        </section>
      </div>
    </div>
  )
}

export default App
