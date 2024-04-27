<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WMATA Home</title>
    <link rel="stylesheet" href="index2.css">
    <style>
        body {
    margin: 0%;
    background-color: #F1FFFF;
    max-width: 100%;
    overflow-x: hidden;
}

.head {
    background-color: #D6FFFF;
    margin-bottom: 0%;
    padding: 10px;
    width: 100%;
}

a {
    text-decoration: none;
    color: black;
}

ul  {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    padding: 3px;
    justify-content: center;
}
 ul li  {
    padding: 3px;
    padding-left: 60px;
    text-align: center;
    border: 2px solid black;
    padding: 8px;
    margin: 15px;
    border-radius: 10px;
    user-select: none;
 }

 @media screen and (max-width: 500px) {
    ul {
        display: flex;
        flex-direction: column;
        width: 200px;
        margin-left: 28%;
    }

    .station_types {
        flex-direction: column;
        padding: 10%;
        
    }

}

 ul li:hover {
    background-color: #8CA7A7;
    transition: 0.5s;
    cursor: pointer;
 }

i {
    margin: 3px;
}


.metro_img{
    height: 60px;
    margin-top: 2%;

}

.container {
    text-align: center;
    position: relative;
    border-bottom: 5px solid #344040;
}

.img-head {
    display: flex;
    justify-content: center
}

.container .wm {
    position: absolute;
    margin-right: 250px;
    color: black;
    font-size: 50px;
}

.container .ta {
    position: absolute;
    margin-left: 220px;
    color: black;
    font-size: 50px;

}
.info1{
   display: flex;
   flex-direction: row;
}


.text1_container{
    margin-right: 20px;
    word-wrap: break-word;
}

.text2_container {
    margin: 20px;
}

.text3_container{
    margin-right: 20px;
    margin-left: 30px;
}

.text1{
    font-family: "Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    font-weight: 70;
    font-style: normal;
    line-height: 30px;
    margin-right: 10px;
    margin-left: 10px;
}
.img1 {
    width: 50vh;
    height: 230px;
    border: 2px solid black;
    border-radius: 30px;
    margin-top: 10px;

}

.img2 {
    width: 45vh;
    height: 230px;
    border: 2px solid black;
    border-radius: 30px;
    margin: 10px;
    display: none;
}

.text2_container {
    margin-left: 20px;
}

.info2 {
    display: flex;
    margin-top: 30px;
    background-color: #ADCECE;
    height: 35vh;
    border-top: 8px solid #344040;
    border-bottom: 8px solid #344040;
}

.info3{
    display: flex;
    margin-right: 20px;
}

footer {
    background-color: #2B3333;
    color: #ADCECE;
    text-align: center;
    height: 15vh;
    position: sticky;
    font-size: 18px;
    width: 100%;
    bottom: 0;
    
}

footer a {
    color: #ADCECE;
    border-bottom: 1px solid #ADCECE;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    margin-bottom: 15px;
}
h1 {
    text-align: center;
    border: 3px solid #147772;
    border-radius: 30px;
    padding: 10px;
    margin: 10px;
    background-color: #98E1DD;
}

.body_archi {
    text-align: center;
    line-height: 30px;
    border-radius: 30px;
    margin: 15px;
}

.station_types {
    display: flex;
    justify-content: center;
}

.archi {
    border: 3px solid #8CA7A7;
    border-radius: 5px;
    padding: 20px;
    padding-left: 25px;
    padding-right: 25px;
    margin: 10px;
    background-color: #E7FFFF;
}

button:hover {
    background-color: #8CA7A7;
    transition: 0.5s ease;
}
.archi_body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#station-img {
    width: 70%;
    height: 100%;
    border-radius: 20px;
    margin-top: 10px;
    display: none;
}

#station-info{
    font-size: 25px;
    text-align: center;
    line-height: 200%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    background-color: #98E1DD;
    width: 100%;
    border-bottom: 2px solid #147772;
    border-top: 2px solid #147772;
}

@media screen and (min-width: 750px) {
.text1 {
    width: 50vh;
    line-height: 60px;
    font-weight: 10;
    margin-right: 20px;
}
}

@media screen and (min-width: 1000px){
.img2 {
    display: block;
}
.body_archi {
    font-size: 20px;
    line-height: 50px;
}

#station-img{
    height: 70%;
    width: 50%;
}

.archi {
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 35px;
    padding-bottom: 35px;
}

#station-info {
    font-size: 30px;
}
}

@media screen and (max-width: 500px) {
.img1 {
    height: 20vh;
}

.text1 {
    line-height: normal;
    width: 25vh;
    word-wrap: break-word;
}

.img2{
    width: 2vh;
    height: 20vh;
}
}
    </style>
    <script src="capstone.js"></script>
    <script src="https://kit.fontawesome.com/5ed1559302.js" crossorigin="anonymous"></script>
</head>
<body>
    <nav class="head">
        <div class="container">
            <div class="img-head">
                <img src="https://www.progressiverailroading.com/resources/editorial/2019/PR0519-Metro.jpg" class="metro_img" alt="">
                <h2 class="wm">WM</h2>
                <h2 class="ta">TA</h2>
            </div>
            <div class="nav">
                <ul>
                    <li>Home <i class="fa-solid fa-house"></i></li>
                    <li>Fares <i class="fa-solid fa-ticket"></i></li>
                    <li>Map <i class="fa-solid fa-map"></i></li>
                    <li><a href="architecture.html">Architecture <i class="fa-solid fa-archway"></i></a></li>
                </ul>
            </div>
        </div>  
    </nav>
    <div class="info">
        <div class="info1">
            <div class="text1_container"></div>
            <p class="text1">
                During the 2023 fiscal year, the number of passengers transported on the Washington, D.C. transit authority 
                (WMATA) network amounted to approximately 231 million
            </p>
            <img src = "https://ggwash.org/images/posts/_resized/5803352002_b03663cd22_o.jpg" class = "img1">
            <img src = "https://ggwash.org/images/posts/_resized/Rail_(HR-LR_Boston).png" class = "img2">
            </div>
        <div class="info2">
            <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH3_Dhf5vzlzuStiJG3HP79afjx34nmCH4xemt1D2ZqA&s" class = "img1">
            <img src = "https://img.masstransitmag.com/files/base/cygnus/mass/image/2022/12/16x9/002Falls_Church_Stations_7000seriesrailcar.61ce106f603f4.638e1798e8f82.png?auto=format,compress&fit=crop&q=45&h=667&w=1200" class = "img2">
            <div class="text2_container">
                <p class = "text1" id = "text_1">The Washington Metro spans 98 stations with over 200km of track. 3 trunks containing 6 lines
                    traverse through three different states. 
                </p>
            </div>    
        </div>
        <div class="info3">
            <div class="text3_container">
                <p class="text1">
                    The WMATA has been the most rapidly growing rapid transit system in North America. The system has implemented 30 kilometres
                    of new track since 2000. In following years, the metro is expected to introduce a brand new underground downtown corridor. 
                </p>
            </div>
                <img src = "https://dcist.com/wp-content/uploads/sites/3/2022/11/221021_Silver_Line_Metro_08.jpg" class = "img1">
                <img src = "https://media.bizj.us/view/img/11202358/silver-line*1200xx1255-706-0-87.png" class = "img2"> 
        </div>
    </div>
    <footer>
        <p><span style = "margin: 30px;">To learn more, visit the WMATA website</span></p>
        <a href="https://www.wmata.com/">Washington Metropolitain Area Transit Association</a>
    </footer>
</body>
</html>
