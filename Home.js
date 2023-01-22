import React from 'react';

import img from '../images/shopping.jpg'
import img2 from '../images/bag.jpeg'
import img3 from '../images/grocery.jpg'
import img4 from '../images/shop.jpeg'
function Home(){
    return(
        <div className='home'>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
  {/* Indicators */}
  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to={0} className="active" />
    <li data-target="#myCarousel" data-slide-to={1} />
    <li data-target="#myCarousel" data-slide-to={2} />
  </ol>
  {/* Wrapper for slides */}
  <div className="carousel-inner">
    <div className="item active">
      <img src={img} alt="Los Angeles" style={{width:'100%' , height:"450px"}} />
    </div>
    <div className="item">
      <img src={img2} alt="Chicago" style={{width:'100%' , height:"450px"}}/>
    </div>
    <div className="item">
      <img src={img3} alt="New York" style={{width:'100%', heigth:"450px"}} />
    </div>
  </div>
  {/* Left and right controls */}
  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#myCarousel" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right" />
    <span className="sr-only">Next</span>
  </a>
</div>
<div className='conatainer'>

    <div className='row'>
        <div className='col-sm-8'>
            <p>Shops are necessary places, where people go to buy their necessary things. Shopping is something which is loved by all of us. It is said that many people find shopping relaxing. I too believe that shopping is a relaxing thing as whenever I get too stressed or tensed. I often go for shopping. The shopping Mall Department Store is  a  favorite place. My experience is always pleasant. These shops stand by the sides of the road. These shops are good in structure. The shops are opened generally at 8 A.M. and are closed at 10 P.M. There were large crowds of people at the shops. . These days there is a new concept of shopping called online shopping. In online shopping you do not have to visit the stores and you can shop for your items by sitting at home only. I am not so big.  I can not go alone out side. But sometimes I go shopping with my parents. There are so many things in the shops. I like to go shops. I want to have a look to every shop. Sometimes I meet my friends, when I go shopping. It is very interesting to me. I love shopping.</p>
            </div>
            <div className='col-sm-4'>
                <img src={img4}/>
            </div>
        
    </div>
</div>
     

        </div>
        

    )
}

export default Home;