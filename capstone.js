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
const API_KEY = '3ba908db8eca4b57bb3a46a5ae41c1aa';

function fetchStationInfo(STATION_CODE) {
    const jsonEndpoint = `https://api.wmata.com/StationPrediction.svc/json/GetPrediction/${STATION_CODE}?api_key=${API_KEY}`;

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

function stat1() {
    var textcontent = document.getElementById("stat1").textContent;
    if (textcontent === "Dupont Circle") {
        document.getElementById("prompt").textContent = "Dupont Circle";
        document.getElementById("stat-img").src = "https://th-thumbnailer.cdn-si-edu.com/rKpO-IQ_1hJPcS-kBCTy4_qSy7Y=/1000x750/filters:no_upscale()/https://tf-cmsv2-photocontest-smithsonianmag-prod-approved.s3.amazonaws.com/e31fd0495ca15ba66a294587739fb73222e8a351.jpg"
        
        fetchStationInfo('A03');
        document.querySelector(".read-more").style.display = "block"
        document.querySelector(".hide-container").style.display = "block"
        document.querySelector(".text-openn").textContent = "Dupont Circle Metro Station, nestled in the heart of Washington, D.C., serves as a bustling hub connecting commuters to the vibrant Dupont Circle neighborhood. Known for its distinctive circular design and vibrant cultural scene, the station offers easy access to shops, historic landmarks, and diverse dining options."
    }
    if (textcontent === "Foggy Bottom") {
        document.getElementById("prompt").textContent = "Foggy Bottom";
        document.getElementById("stat-img").src ="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/WMATA_Foggy_Bottom%E2%80%93GWU.jpg/1200px-WMATA_Foggy_Bottom%E2%80%93GWU.jpg"

        fetchStationInfo('C04');
        document.querySelector(".read-more").style.display = "block"
        document.querySelector(".hide-container").style.display = "block"
        document.querySelector(".text-openn").textContent = "Foggy Bottom Metro Station, located in Washington D.C., connects the university district with the city's attractions. Situated near George Washington University, it's a central spot for students and visitors alike. Close to landmarks such as the Lincoln Memorial, it's a convenient starting point for exploring the city."
    }
    if (textcontent === "Mt. Vernon Square") {
        document.getElementById("prompt").textContent = "Mt. Vernon Square";
        document.getElementById("stat-img").src ="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Mt_Vernon_Metro.jpg/1200px-Mt_Vernon_Metro.jpg"

        fetchStationInfo('E01');
        document.querySelector(".hide-container").style.display = "none";
        document.querySelector(".read-more").style.display = "none"
    }
    if (textcontent === "Pentagon") {
        document.getElementById("prompt").textContent = "Pentagon";
        document.getElementById("stat-img").src ="https://media.bizj.us/view/img/11085799/img0012*1200xx4032-2268-0-378.jpg"

        fetchStationInfo('C07');
        document.querySelector(".hide-container").style.display = "none";
        document.querySelector(".read-more").style.display = "none"
    }
    if (textcontent === "Shaw-Howard Uni") {
        document.getElementById("prompt").textContent = "Shaw-Howard Uni";
        document.getElementById("stat-img").src ="https://live.staticflickr.com/2722/5830672381_38e914772c_b.jpg"

        fetchStationInfo('A01');
        document.querySelector(".read-more").style.display = "block"
        document.querySelector(".hide-container").style.display = "block"
        document.querySelector(".text-openn").textContent = "In the center of Washington, D.C., Shaw-Howard University Station skillfully combines old world beauty with contemporary conveniences. Its striking red-brick exterior honors the city's rich architectural history, and the colorful murals that cover its walls showcase the mix of cultures who call this neighborhood home. The lively beats of live musicians welcome commuters as they come off the escalators, bringing a lively touch to their everyday transportation experience."
    }
}

function stat2() {
    var textcontent2 = document.getElementById("stat2").textContent;
    if (textcontent2 === "Faragut North") {
        document.getElementById("prompt").textContent = "Faragut North";
        document.getElementById("stat-img").src = "https://upload.wikimedia.org/wikipedia/commons/4/47/Farragut_North_Station_2.jpg"

        fetchStationInfo('A02');
        document.querySelector(".hide-container").style.display = "none";
        document.querySelector(".read-more").style.display = "none"

    }
    if (textcontent2 === "Faragut West") {
        document.getElementById("prompt").textContent = "Faragut West";
        document.getElementById("stat-img").src ="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/USA-Metro_Farragut_West0.jpg/640px-USA-Metro_Farragut_West0.jpg"

        fetchStationInfo('C03');
        document.querySelector(".read-more").style.display = "block"
        document.querySelector(".hide-container").style.display = "block"
        document.querySelector(".text-openn").textContent = "The architecture of the Faragut West Station in downtown Washington, D.C., is distinguished by its simple, minimalist style. Marble finishes decorate the platform area, and the building of the station is a reflection of the city's popular mid-century modern style. The quiet atmosphere of the station, broken only by the sound of passing trains, is a haven for commuters."
    }
    if (textcontent2 === "Gallery Pi") {
        document.getElementById("prompt").textContent = "Gallery Pi";
        document.getElementById("stat-img").src ="https://i.redd.it/ltvh31rynrz91.jpg"

        fetchStationInfo('B01');
        document.querySelector(".read-more").style.display = "block"
        document.querySelector(".hide-container").style.display = "block"
        document.querySelector(".text-openn").textContent = "One of WMATA's busiest hubs, Gallery Place Station is located at the intersection of 7th and H Streets NW in downtown Washington, D.C., and allows transfers between the Red and Green/Yellow lines to occur with ease. Its significance as a hub for commuters, sports fans, concertgoers, and cultural enthusiasts alike is bolstered by its contemporary architecture, roomy concourses, and near proximity to the Capital One Arena."
    }
    if (textcontent2 === "Arlington") {
        document.getElementById("prompt").textContent = "Arlington";
        document.getElementById("stat-img").src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPkuuKaEVyVsV0Sv-vNdSDCYryoUzaA6FaK23Df5b6Q&s"

        document.querySelector(".hide-container").style.display = "none";
        document.querySelector(".read-more").style.display = "none"
    }
    if (textcontent2 === "U Street") {
        document.getElementById("prompt").textContent = "U Street";
        document.getElementById("stat-img").src ="https://i.pinimg.com/originals/58/59/e7/5859e726521bee8977bb0c5c1be9c282.jpg"

        fetchStationInfo('E02');
        document.querySelector(".read-more").style.display = "block"
        document.querySelector(".hide-container").style.display = "block"
        document.querySelector(".text-openn").textContent = "Located in the U Street Corridor of Washington, D.C., U Street Station is a major transit hub for both residents and commuters. It is accessible by the Green and Yellow lines. Red-brick walls and elaborate ironwork are two design cues that the station has that are a nod to the area's ancient architecture. Access to nearby attractions, such as well-known concert halls, eateries, and historical sites, is made simple by its placement in an area rich in culture."
    }
}

function stat3() {
    var textcontent2 = document.getElementById("stat3").textContent;
    if (textcontent2 === "Gallery Pi") {
        document.getElementById("prompt").textContent = "Gallery Pi";
        document.getElementById("stat-img").src = "https://thumbs.dreamstime.com/b/washington-dc-august-sign-marker-gallery-place-chinatown-metro-station-entrance-downtown-district-columbia-155751504.jpg"

        fetchStationInfo('B01');
        document.querySelector(".read-more").style.display = "block"
        document.querySelector(".hide-container").style.display = "block"
        document.querySelector(".text-openn").textContent = "One of WMATA's busiest hubs, Gallery Place Station is located at the intersection of 7th and H Streets NW in downtown Washington, D.C., and allows transfers between the Red and Green/Yellow lines to occur with ease. Its significance as a hub for commuters, sports fans, concertgoers, and cultural enthusiasts alike is bolstered by its contemporary architecture, roomy concourses, and near proximity to the Capital One Arena."
    }
    if (textcontent2 === "McPherson Square") {
        document.getElementById("prompt").textContent = "McPherson Square";
        document.getElementById("stat-img").src ="https://fastly.4sqi.net/img/general/600x600/2854894_ZwJKf7zZErkE73EfgiqJMrGkMOoNW0PVZdWkntoZo74.jpg"

        fetchStationInfo('C02');
        document.querySelector(".read-more").style.display = "block"
        document.querySelector(".hide-container").style.display = "block"
        document.querySelector(".text-openn").textContent = "Situated in the center of Washington, D.C.'s downtown, McPherson Square Station is an essential transit hub for both tourists and commuters. The city's historical significance and present identity are reflected in its architectural style, which combines modern and classical aspects. The station is a vital component of the capital's transit system since it is close to well-known sights like the White House and the National Mall and offers easy access to important locations."
    }
    if (textcontent2 === "Navy Archives") {
        document.getElementById("prompt").textContent = "Navy Archives";
        document.getElementById("stat-img").src ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Archives-Navy_Memorial-Penn_Quarter_pylon.jpg/640px-Archives-Navy_Memorial-Penn_Quarter_pylon.jpg"

        fetchStationInfo('F02');
        document.querySelector(".hide-container").style.display = "none";
        document.querySelector(".read-more").style.display = "none"
    }
    if (textcontent2 === "Rosslyn") {
        document.getElementById("prompt").textContent = "Rosslyn";
        document.getElementById("stat-img").src ="https://img.ctykit.com/cdn/va-rosslyn/images/tr:w-1800/24798428020_69a317418a_w-(1).jpg"

        fetchStationInfo('C05');
        document.querySelector(".read-more").style.display = "block"
        document.querySelector(".hide-container").style.display = "block"
        document.querySelector(".text-openn").textContent = "Situated at the intersection of Arlington, Virginia, and Washington, D.C., Rosslyn Station is an essential transit hub for the area. Its architecture, which has large glass facades and sleek metal accents, blends contemporary aesthetics with practical design. The station, which serves as a major hub for the Blue, Orange, and Silver lines, makes traveling easier for both commuters and visitors by providing quick access to important locations on both sides of the Potomac River."
    }
    if (textcontent2 === "Colombia Heights") {
        document.getElementById("prompt").textContent = "Colombia Heights";
        document.getElementById("stat-img").src ="https://www.wmata.com/rider-guide/stations/images/Columbia_Heights_escalator_X05-01.jpg"

        fetchStationInfo('E04');
        document.querySelector(".hide-container").style.display = "none";
        document.querySelector(".read-more").style.display = "none"
    }
}

function stat4() {
    var textcontent2 = document.getElementById("stat4").textContent;
    if (textcontent2 === "Judiciary Square") {
        document.getElementById("prompt").textContent = "Judiciary Square";
        document.getElementById("stat-img").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Judiciary_Square_Metro%2C_Building_Museum.jpg/1280px-Judiciary_Square_Metro%2C_Building_Museum.jpg"

        fetchStationInfo('B02');
        document.querySelector(".hide-container").style.display = "none";
        document.querySelector(".read-more").style.display = "none"
    }
    if (textcontent2 === "Metro Center") {
        document.getElementById("prompt").textContent = "Metro Center";
        document.getElementById("stat-img").src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Y65MOu4gsav0gclYfOCxjkaXr36Ju2criFDLxqjLUQ&s"

        fetchStationInfo('C01');
        document.querySelector(".read-more").style.display = "block"
        document.querySelector(".hide-container").style.display = "block"
        document.querySelector(".text-openn").textContent = "Metro Center, nestled in the bustling heart of downtown Washington, D.C., serves as a vital nexus for commuters and visitors alike, offering seamless connections to multiple metro lines. Its central location provides convenient access to iconic landmarks such as the National Mall, Smithsonian museums, and the vibrant dining and shopping scene of the city center. With its sleek modern design and bustling concourses, Metro Center embodies the dynamic energy and pulse of the nation's capital."
    }
    if (textcontent2 === "L'enfant Plaza") {
        document.getElementById("prompt").textContent = "L'enfant Plaza";
        document.getElementById("stat-img").src ="https://files.structurae.net/files/photos/wikipedia/Entrance_to_LEnfant_Plaza_station_-01-_(50066962127).jpg"

        fetchStationInfo('D03');
        document.querySelector(".read-more").style.display = "block"
        document.querySelector(".hide-container").style.display = "block"
        document.querySelector(".text-openn").textContent = "Located in Southwest Washington, D.C., L'Enfant Plaza Station is a major junction that connects several Metro lines and acts as a doorway to the city's most famous sites. Its architecture, which is defined by geometric shapes and simple lines, is a perfect example of mid-century modernism. L'Enfant Plaza, one of the busiest WMATA stations, offers convenient transportation for both travelers and commuters, giving them access to neighboring federal agencies, museums, and cultural organizations."
    }
    if (textcontent2 === "Foggy Bottom") {
        document.getElementById("prompt").textContent = "Foggy Bottom";
        document.getElementById("stat-img").src ="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/WMATA_Foggy_Bottom%E2%80%93GWU.jpg/1200px-WMATA_Foggy_Bottom%E2%80%93GWU.jpg"

        fetchStationInfo('C04');
        document.querySelector(".read-more").style.display = "block"
        document.querySelector(".hide-container").style.display = "block"
        document.querySelector(".text-openn").textContent = "Foggy Bottom Metro Station, located in Washington D.C., connects the university district with the city's attractions. Situated near George Washington University, it's a central spot for students and visitors alike. Close to landmarks such as the Lincoln Memorial, it's a convenient starting point for exploring the city."
    }
    if (textcontent2 === "Georgia Avenue") {
        document.getElementById("prompt").textContent = "Georgia Avenue";
        document.getElementById("stat-img").src ="https://www.wmata.com/rider-guide/stations/images/Georgia_Ave_E05X0_-021016-1166.jpg"

        document.querySelector(".hide-container").style.display = "none";
        document.querySelector(".read-more").style.display = "none"

    }
}

function stat5() {
    var textcontent2 = document.getElementById("stat5").textContent;
    if (textcontent2 === "Union Station") {
        document.getElementById("prompt").textContent = "Union Station";
        document.getElementById("stat-img").src = "https://upload.wikimedia.org/wikipedia/commons/7/75/Union_Station_%28WMATA_station%29.JPG"

        fetchStationInfo('B03');
        document.querySelector(".read-more").style.display = "block"
        document.querySelector(".hide-container").style.display = "block"
        document.querySelector(".text-openn").textContent = "Union Station, located in Washington, D.C., is a famous transportation hub known for its stunning architecture and lively atmosphere. With its grand design and convenient facilities, it welcomes travelers from all over, serving as a central landmark in the city. Offering a mix of history and modern convenience, Union Station is a must-visit destination for both locals and tourists alike."
    }
    if (textcontent2 === "L'Enfant Plaza") {
        document.getElementById("prompt").textContent = "L'Enfant Plaza";
        document.getElementById("stat-img").src ="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/L%27Enfant_Plaza_upper_level%2C_facing_outbound.jpg/1200px-L%27Enfant_Plaza_upper_level%2C_facing_outbound.jpg"

        document.querySelector(".read-more").style.display = "block"
        document.querySelector(".hide-container").style.display = "block"
        document.querySelector(".text-openn").textContent = "L'Enfant Plaza Metro Station, named after city planner Pierre Charles L'Enfant, is a key transit hub in downtown D.C., connecting commuters to various destinations across the capital. Serving federal offices, corporate districts, shopping centers, and cultural landmarks, it's a vital link in Washington's bustling urban network. Positioned at the heart of the city, L'Enfant Plaza captures the essence of D.C.'s dynamic energy and cosmopolitan charm."
        fetchStationInfo('D03');
    }
    if (textcontent2 === "Pentagon") {
        document.getElementById("prompt").textContent = "Pentagon";
        document.getElementById("stat-img").src ="https://upload.wikimedia.org/wikipedia/commons/0/0b/Pentagon_Metro_Station.jpg"

        fetchStationInfo('C07');
        document.querySelector(".hide-container").style.display = "none";
        document.querySelector(".read-more").style.display = "none"
    }
    if (textcontent2 === "Faragut West") {
        document.getElementById("prompt").textContent = "Faragut West";
        document.getElementById("stat-img").src ="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/USA-Metro_Farragut_West0.jpg/640px-USA-Metro_Farragut_West0.jpg"

        fetchStationInfo('C03');
        document.querySelector(".read-more").style.display = "block"
        document.querySelector(".hide-container").style.display = "block"
        document.querySelector(".text-openn").textContent = "The architecture of the Faragut West Station in downtown Washington, D.C., is distinguished by its simple, minimalist style. Marble finishes decorate the platform area, and the building of the station is a reflection of the city's popular mid-century modern style. The quiet atmosphere of the station, broken only by the sound of passing trains, is a haven for commuters."
    }
    if (textcontent2 === "Fort Tottem") {
        document.getElementById("prompt").textContent = "Fort Tottem";
        document.getElementById("stat-img").src ="https://offloadmedia.feverup.com/secretdc.com/wp-content/uploads/2023/07/13051334/WMATA-Green-Line-Fort-Totten-Station-by-Swagging-via-Wikimedia-Commons-1024x597.jpeg"

        fetchStationInfo('B06');
        document.querySelector(".read-more").style.display = "block"
        document.querySelector(".hide-container").style.display = "block"
        document.querySelector(".text-openn").textContent = "Fort Totten Metro Station, situated in Northeast Washington D.C., stands as a testament to both its rich history and contemporary utility. Originally a Civil War fort, it has transformed into a bustling transportation hub, facilitating easy access to surrounding neighborhoods and landmarks. Boasting striking architecture and convenient facilities, Fort Totten remains a pivotal junction in the capital's extensive metro network, offering commuters and travelers a seamless transit experience."
    }
}

function stat6() {
    var textcontent2 = document.getElementById("stat6").textContent;
    if (textcontent2 === "New York Ave") {
        document.getElementById("prompt").textContent = "New York Ave";
        document.getElementById("stat-img").src = "https://upload.wikimedia.org/wikipedia/commons/7/75/Union_Station_%28WMATA_station%29.JPG"

        fetchStationInfo('B04');
        document.querySelector(".read-more").style.display = "block"
        document.querySelector(".hide-container").style.display = "block"
        document.querySelector(".text-openn").textContent = "Located in the Northeast region of Washington, D.C., New York Ave Station is a key station on the WMATA Red Line. Acting as a major transit hub, it provides commuters with easy access to locations all throughout the city and beyond. Its proximity to New York Avenue and important thoroughfares guarantees convenient access to neighboring residential and business districts."
    }
    if (textcontent2 === "Federal Center") {
        document.getElementById("prompt").textContent = "Federal Center";
        document.getElementById("stat-img").src ="https://wmata.com/images/Metrorail-station-with-buses-and-trains.png"

        fetchStationInfo('D03');
        document.querySelector(".read-more").style.display = "block"
        document.querySelector(".hide-container").style.display = "block"
        document.querySelector(".text-openn").textContent = "Situated in Southwest Washington, D.C., Federal Center Station is a significant stop for the Blue, Orange, and Silver lines of the WMATA system. Acting as a major transportation center, it offers access to a number of nearby government offices and agencies, including the Department of Transportation's headquarters. The station's contemporary style and practical layout meet the needs of both tourists and commuters, enabling easy movement around the country's capital."
    }
    if (textcontent2 === "Pentagon Central") {
        document.getElementById("prompt").textContent = "Pentagon Central";
        document.getElementById("stat-img").src ="https://www.leuteriothomas.com/wp-content/uploads/2018/11/Pentagon-Transit-Center-4.jpg"

        fetchStationInfo('C08');
        document.querySelector(".hide-container").style.display = "none";
        document.querySelector(".read-more").style.display = "none"
    }
    if (textcontent2 === "McPherson Central") {
        document.getElementById("prompt").textContent = "McPherson Central";
        document.getElementById("stat-img").src ="https://upload.wikimedia.org/wikipedia/commons/b/bd/12-07-12-wikimania-wdc-by-RalfR-010.jpg"

        fetchStationInfo('C02');
        document.querySelector(".read-more").style.display = "block"
        document.querySelector(".hide-container").style.display = "block"
        document.querySelector(".text-openn").textContent = "Situated in the center of Washington, D.C.'s downtown, McPherson Square Station is an essential transit hub for both tourists and commuters. The city's historical significance and present identity are reflected in its architectural style, which combines modern and classical aspects. The station is a vital component of the capital's transit system since it is close to well-known sights like the White House and the National Mall and offers easy access to important locations."
    }
    if (textcontent2 === "West Hyattesville") {
        document.getElementById("prompt").textContent = "West Hyattesville";
        document.getElementById("stat-img").src ="https://upload.wikimedia.org/wikipedia/commons/4/41/West_Hyattsville_91121.jpg"

        fetchStationInfo('E03');
        document.querySelector(".hide-container").style.display = "none";
        document.querySelector(".read-more").style.display = "none"
    }
}





