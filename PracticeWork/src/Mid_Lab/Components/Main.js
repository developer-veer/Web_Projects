import "../CSSFiles/Main.css";
import { useState } from "react";
const MainSec = () => {
  const [news, setNews] = useState([
    { id:1 ,
      newsTitle: "Pakistnai News",
      card_1_Img: "./img/pak_img.jpeg",
      card_2_Img: "./img/pak_2_img.jpg",
      card_1_title_disc: "Hassan Ali : Celebrating Happiness of Taking Wicket",
      card_2_dis_1:
        "The Men in Green had a dismal performance in the recently concluded World Cup",
      card_2_dis_2:
        "India's Virat Kohli greets Pakistan players at the end of theWorld Cup match between them at Old Trafford in Manchester",
    },
    { 
      id:2 ,
        newsTitle: "Australia News",
        card_1_Img: "./img/10AusWinTrophy1.jpg",
        card_2_Img: "./img/aust_img_2.jpeg",
        card_1_title_disc: "Australia overcome a mid-innings batting collapse to record win No.24 in a row and sweep the Rose Bowl series",
        card_2_dis_1:
          "ICC reveals schedule for next summer's women's T20 World Cup in anticipation of record final",
        card_2_dis_2:
          "Australia will have to get through rivals India and New Zealand to defend their T20 World Cup title on home soil and continue their incredible dominance of the tournament"
      } , 
      {
        id:3 ,
        newsTitle: "Australia News",
        card_1_Img: "./img/10AusWinTrophy1.jpg",
        card_2_Img: "./img/aust_img_2.jpeg",
        card_1_title_disc: "Australia overcome a mid-innings batting collapse to record win No.24 in a row and sweep the Rose Bowl series",
        card_2_dis_1:
          "ICC reveals schedule for next summer's women's T20 World Cup in anticipation of record final",
        card_2_dis_2:
          "Australia will have to get through rivals India and New Zealand to defend their T20 World Cup title on home soil and continue their incredible dominance of the tournament"
      }

     
  ]);

 const  Delete = (ID) =>
  {
     setNews(
          
          news.filter((news) =>   ID !== news.id)
     )
  }
  return (
    <div>
      {
        news.map((news) => (
            <div class="container" id="first-container">
        <div class="card" style={{ height: "35rem" }}>
          <div class="card-header" style={{display:'flex', justifyContent:'space-between'}}>{news.newsTitle}
          <button type="button" class="btn-close" aria-label="Close" onClick={()=>Delete(news.id)}></button>
          </div>
          <div class="card-body">
            <img src={news.card_1_Img} class="card-img-top" alt="..." />
            <strong class="card-text">
              {news.card_1_title_disc}
            </strong>
          </div>
          {/* Second card  */}
          <div
            class="card mb-3"
            style={{
              marginTop: "-13rem",
              height: "10rem",
              width: "36rem",
              marginLeft: "1rem",
            }}
          >
            <div class="row g-0">
              <div class="col-md-2">
                <img
                  src={news.card_2_Img}
                  class="img-fluid rounded-start"
                  alt="..."
                  style={{ height: "8rem" }}
                />
              </div>
              <div
                class="col-md-8"
                style={{
                  width: "30rem",
                  marginTop: "-8rem",
                  marginLeft: "6rem",
                }}
              >
                <div class="card-body">
                  <h5 class="card-title">
                    {news.card_2_dis_1}
                  </h5>
                  <p class="card-text">
                    {news.card_2_dis_2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        ))
      }
    </div>
  );
};

export default MainSec;
