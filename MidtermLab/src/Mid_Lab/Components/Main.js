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
      },

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
      <div id="main-content">
      {
        news.map((news) => (
    
          
          <div class="card" style={{width:'20rem' , height:'30rem'}}>
        <div class="card-header">
          {news.newsTitle}
         </div>
          <img src={news.card_1_Img} class="card-img-top" style={{width:'20rem' , height:'30rem'}}/>
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text">{news.card_1_title_disc}</p>
            <a href="#" class="btn btn-primary" onClick={()=>Delete(news.id)}>Delete</a>
          </div>
        </div>
        

        ))
      }
      </div>
    </div>
  );
};

export default MainSec;
