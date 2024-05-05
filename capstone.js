function waffle(){
    document.getElementById("station-img").src = "https://preview.redd.it/the-best-part-of-my-commute-is-ogling-at-the-waffle-design-v0-cpkdqzublhna1.jpg?width=1080&crop=smart&auto=webp&s=cf9be85076da365f2ff113225822b7a422977ee9"
    document.getElementById("station-img").style.display = "block"
    document.getElementById("arch").style.backgroundColor = "#E7FFFF"
    document.getElementById("waffle").style.backgroundColor = "#8CA7A7"
    document.getElementById("TwinTube").style.backgroundColor = "#E7FFFF"
    document.getElementById("gull").style.backgroundColor = "#E7FFFF"
    document.getElementById("peak").style.backgroundColor = "#E7FFFF"

    document.getElementById("station-info").textContent = "The waffle is the most abundant and impressive underground station type. The waffle design first appeared when the system first opened (1976) and is distinguished by the large coffers that line the wall"

}

function arch(){
    document.getElementById("station-img").src = "https://ggwash.org/images/posts/201410-012230.jpg"
    document.getElementById("station-img").style.display = "block"
    document.getElementById("waffle").style.backgroundColor = "#E7FFFF"
    document.getElementById("arch").style.backgroundColor = "#8CA7A7" /* This is the clicked colour */
    document.getElementById("TwinTube").style.backgroundColor = "#E7FFFF"
    document.getElementById("gull").style.backgroundColor = "#E7FFFF"
    document.getElementById("peak").style.backgroundColor = "#E7FFFF"

    document.getElementById("station-info").textContent = "In an effort to save money, the WMATA only lined the overhead areas of the station with coffers. These stations first appeared in 1981 and are only present on the red line. "
}

function twintube(){
    document.getElementById("station-img").src = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Forest_Glen_Station.jpg"
    document.getElementById("station-img").style.display = "block"
    document.getElementById("waffle").style.backgroundColor = "#E7FFFF"
    document.getElementById("TwinTube").style.backgroundColor = "#8CA7A7"
    document.getElementById("arch").style.backgroundColor = "#E7FFFF"
    document.getElementById("gull").style.backgroundColor = "#E7FFFF"
    document.getElementById("peak").style.backgroundColor = "#E7FFFF"

    document.getElementById("station-info").textContent= "This style appears only in the deepest stations to accomodate the fact that each direction  of track was bored seperatly. Northbound and southbound are in different compartments as a result. One of these stations, Wheaton, boasts the longest-continuous escalator at 70 metres of elevation gain."
}

function gull(){
    document.getElementById("station-img").src = "https://images.cf.nycsubway.org/images/icon/title_world_us_washdc_orange.jpg"
    document.getElementById("station-img").style.display = "block"
    document.getElementById("waffle").style.backgroundColor = "#E7FFFF"
    document.getElementById("gull").style.backgroundColor = "#8CA7A7"
    document.getElementById("arch").style.backgroundColor = "#E7FFFF"
    document.getElementById("TwinTube").style.backgroundColor = "#E7FFFF" 
    document.getElementById("peak").style.backgroundColor = "#E7FFFF"

    document.getElementById("station-info").textContent = "The gull design, coined for the ressemblance to a seagull, is the most common overground station desgin. The two arches pay homage to the underground platforms."
}

function peak(){
    document.getElementById("station-img").src = "https://visitalexandria.com/wp-content/uploads/2022/03/Plan-Default-Header_0ed2e435-bc59-4868-ba5c-60dce74947ac.jpg"
    document.getElementById("station-img").style.display = "block"
    document.getElementById("waffle").style.backgroundColor = "#E7FFFF"
    document.getElementById("peak").style.backgroundColor = "#8CA7A7"
    document.getElementById("arch").style.backgroundColor = "#E7FFFF"
    document.getElementById("TwinTube").style.backgroundColor = "#E7FFFF"
    document.getElementById("gull").style.backgroundColor = "#E7FFFF"

    document.getElementById("station-info").textContent = "This style originates from complaints steming from the Gull station design (1983). Residents of Alexandria were worried the defualt gull style would clash with the surrounding architecture. These stations have a skylight pointing upwards."
}

function red(){
    document.getElementById("line-colour").style.backgroundColor= "red"
    document.getElementById("stat1").textContent = "Dupont Circle"
    document.getElementById("stat2").textContent = "Faragut North"
    document.getElementById("stat3").textContent = "Gallery Pi"
    document.getElementById("stat4").textContent = "Judiciary Square"
    document.getElementById("stat5").textContent = "Union Station"
    document.getElementById("stat6").textContent = "New York Ave."

}

function orange(){
    document.getElementById("line-colour").style.backgroundColor = "orange"
    document.getElementById("stat1").textContent = "Foggy Bottom"
    document.getElementById("stat2").textContent = "Faragut West"
    document.getElementById("stat3").textContent = "McPherson Square"
    document.getElementById("stat4").textContent = "Metro Center"
    document.getElementById("stat5").textContent = "L'Enfant Plaza"
    document.getElementById("stat6").textContent = "Federal Center"
}

function yellow(){
    document.getElementById("line-colour").style.backgroundColor = "yellow"
    document.getElementById("stat1").textContent = "Mt. Vernon Square"
    document.getElementById("stat2").textContent = "Gallery Pi"
    document.getElementById("stat3").textContent = "Navy Archives"
    document.getElementById("stat4").textContent = "L'enfant Plaza"
    document.getElementById("stat5").textContent = "Pentagon"
    document.getElementById("stat6").textContent = "Pentagon Central"
}

function blue(){
    document.getElementById("line-colour").style.backgroundColor = "blue"
    document.getElementById("stat1").textContent = "Pentagon"
    document.getElementById("stat2").textContent = "Arlington"
    document.getElementById("stat3").textContent = "Rosslyn"
    document.getElementById("stat4").textContent = "Foggy Bottom"
    document.getElementById("stat5").textContent = "Faragut West"
    document.getElementById("stat6").textContent = "McPherson Central"
}

function green(){
    document.getElementById("line-colour").style.backgroundColor = "green"
    document.getElementById("stat1").textContent = "Shaw-Howard Uni"
    document.getElementById("stat2").textContent = "U Street"
    document.getElementById("stat3").textContent = "Colombia Heights"
    document.getElementById("stat4").textContent = "Georgia Avenue"
    document.getElementById("stat5").textContent = "Fort Tottem"
    document.getElementById("stat6").textContent = "West Hyattesville"
}

function stat1() {
    var textcontent = document.getElementById("stat1").textContent;
    if (textcontent === "Dupont Circle") {
        document.getElementById("prompt").textContent = "Dupont Circle";
        document.getElementById("stat-img").src = "https://th-thumbnailer.cdn-si-edu.com/rKpO-IQ_1hJPcS-kBCTy4_qSy7Y=/1000x750/filters:no_upscale()/https://tf-cmsv2-photocontest-smithsonianmag-prod-approved.s3.amazonaws.com/e31fd0495ca15ba66a294587739fb73222e8a351.jpg"
        const API_KEY = '3ba908db8eca4b57bb3a46a5ae41c1aa';
        const STATION_CODE = 'A03';

        function fetchStationInfo() {
            const jsonEndpoint = `http://api.wmata.com/StationPrediction.svc/json/GetPrediction/${STATION_CODE}?api_key=${API_KEY}`;

            fetch(jsonEndpoint)
                .then(response => response.json())
                .then(data => {
                    displayStationInfo(data);
                })
                .catch(error => {
                    console.error('Error fetching station information:', error);
                });
        }

        function displayStationInfo(data) {
            const stationName = data.LocationName;
            const predictions = data.Trains;

            let stationHTML = '';
            stationHTML += '<ul class = "station-predict">';
            predictions.forEach(prediction => {
                const timeUntilNextTrain = prediction.Min === 'ARR' ? 'Arriving' : `${prediction.Min} min`;
                stationHTML += `<li> To ${prediction.DestinationName} - ${timeUntilNextTrain}</li>`;
            });
            stationHTML += '</ul>';

            document.getElementById('station-info').innerHTML = stationHTML;
        }
        fetchStationInfo();
    }
    if (textcontent === "Foggy Bottom") {
        document.getElementById("prompt").textContent = "Foggy Bottom";
        document.getElementById("stat-img").src ="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/WMATA_Foggy_Bottom%E2%80%93GWU.jpg/1200px-WMATA_Foggy_Bottom%E2%80%93GWU.jpg"
    }
    if (textcontent === "Mt. Vernon Square") {
        document.getElementById("prompt").textContent = "Mt. Vernon Square";
        document.getElementById("stat-img").src ="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Mt_Vernon_Metro.jpg/1200px-Mt_Vernon_Metro.jpg"
    }
    if (textcontent === "Pentagon") {
        document.getElementById("prompt").textContent = "Pentagon";
        document.getElementById("stat-img").src ="https://media.bizj.us/view/img/11085799/img0012*1200xx4032-2268-0-378.jpg"
    }
    if (textcontent === "Shaw-Howard Uni") {
        document.getElementById("prompt").textContent = "Shaw-Howard Uni";
        document.getElementById("stat-img").src ="https://live.staticflickr.com/2722/5830672381_38e914772c_b.jpg"
    }
}

function stat2() {
    var textcontent2 = document.getElementById("stat2").textContent;
    if (textcontent2 === "Faragut North") {
        document.getElementById("prompt").textContent = "Faragut North";
        document.getElementById("stat-img").src = "https://upload.wikimedia.org/wikipedia/commons/4/47/Farragut_North_Station_2.jpg"
    }
    if (textcontent2 === "Faragut West") {
        document.getElementById("prompt").textContent = "Faragut West";
        document.getElementById("stat-img").src ="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/USA-Metro_Farragut_West0.jpg/640px-USA-Metro_Farragut_West0.jpg"
    }
    if (textcontent2 === "Gallery Pi") {
        document.getElementById("prompt").textContent = "Gallery Pi";
        document.getElementById("stat-img").src ="https://i.redd.it/ltvh31rynrz91.jpg"
    }
    if (textcontent2 === "Arlington") {
        document.getElementById("prompt").textContent = "Arlington";
        document.getElementById("stat-img").src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPkuuKaEVyVsV0Sv-vNdSDCYryoUzaA6FaK23Df5b6Q&s"
    }
    if (textcontent2 === "U Street") {
        document.getElementById("prompt").textContent = "U Street";
        document.getElementById("stat-img").src ="https://i.pinimg.com/originals/58/59/e7/5859e726521bee8977bb0c5c1be9c282.jpg"
    }
}

function stat3() {
    var textcontent2 = document.getElementById("stat3").textContent;
    if (textcontent2 === "Gallery Pi") {
        document.getElementById("prompt").textContent = "Gallery Pi";
        document.getElementById("stat-img").src = "https://thumbs.dreamstime.com/b/washington-dc-august-sign-marker-gallery-place-chinatown-metro-station-entrance-downtown-district-columbia-155751504.jpg"
    }
    if (textcontent2 === "McPherson Square") {
        document.getElementById("prompt").textContent = "McPherson Square";
        document.getElementById("stat-img").src ="https://fastly.4sqi.net/img/general/600x600/2854894_ZwJKf7zZErkE73EfgiqJMrGkMOoNW0PVZdWkntoZo74.jpg"
    }
    if (textcontent2 === "Navy Archives") {
        document.getElementById("prompt").textContent = "Navy Archives";
        document.getElementById("stat-img").src ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Archives-Navy_Memorial-Penn_Quarter_pylon.jpg/640px-Archives-Navy_Memorial-Penn_Quarter_pylon.jpg"
    }
    if (textcontent2 === "Rosslyn") {
        document.getElementById("prompt").textContent = "Rosslyn";
        document.getElementById("stat-img").src ="https://img.ctykit.com/cdn/va-rosslyn/images/tr:w-1800/24798428020_69a317418a_w-(1).jpg"
    }
    if (textcontent2 === "Colombia Heights") {
        document.getElementById("prompt").textContent = "Colombia Heights";
        document.getElementById("stat-img").src ="https://www.wmata.com/rider-guide/stations/images/Columbia_Heights_escalator_X05-01.jpg"
    }
}

function stat4() {
    var textcontent2 = document.getElementById("stat4").textContent;
    if (textcontent2 === "Judiciary Square") {
        document.getElementById("prompt").textContent = "Judiciary Square";
        document.getElementById("stat-img").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Judiciary_Square_Metro%2C_Building_Museum.jpg/1280px-Judiciary_Square_Metro%2C_Building_Museum.jpg"
    }
    if (textcontent2 === "Metro Center") {
        document.getElementById("prompt").textContent = "Metro Center";
        document.getElementById("stat-img").src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Y65MOu4gsav0gclYfOCxjkaXr36Ju2criFDLxqjLUQ&s"
    }
    if (textcontent2 === "L'enfant Plaza") {
        document.getElementById("prompt").textContent = "L'enfant Plaza";
        document.getElementById("stat-img").src ="https://files.structurae.net/files/photos/wikipedia/Entrance_to_LEnfant_Plaza_station_-01-_(50066962127).jpg"
    }
    if (textcontent2 === "Foggy Bottom") {
        document.getElementById("prompt").textContent = "Foggy Bottom";
        document.getElementById("stat-img").src ="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/WMATA_Foggy_Bottom%E2%80%93GWU.jpg/1200px-WMATA_Foggy_Bottom%E2%80%93GWU.jpg"
    }
    if (textcontent2 === "Georgia Avenue") {
        document.getElementById("prompt").textContent = "Georgia Avenue";
        document.getElementById("stat-img").src ="https://www.wmata.com/rider-guide/stations/images/Georgia_Ave_E05X0_-021016-1166.jpg"
    }
}

