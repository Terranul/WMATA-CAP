function waffle(){
    document.getElementById("station-img").src = "https://preview.redd.it/the-best-part-of-my-commute-is-ogling-at-the-waffle-design-v0-cpkdqzublhna1.jpg?width=1080&crop=smart&auto=webp&s=cf9be85076da365f2ff113225822b7a422977ee9"
    document.getElementById("station-img").style.display = "block"
    document.getElementById("arch").style.backgroundColor = "#E7FFFF"
    document.getElementById("waffle").style.backgroundColor = "#8CA7A7"
    document.getElementById("TwinTube").style.backgroundColor = "#E7FFFF"
    document.getElementById("gull").style.backgroundColor = "#E7FFFF"
    document.getElementById("peak").style.backgroundColor = "#E7FFFF"

    document.getElementById("station-info").textContent = "The waffle is the most abundant and impressive underground station type. The waffle design first appearned when the system first opened (1976) and is distinguished by the large coffers that line the wall"

}

function arch(){
    document.getElementById("station-img").src = "https://ggwash.org/images/posts/201410-012230.jpg"
    document.getElementById("station-img").style.display = "block"
    document.getElementById("waffle").style.backgroundColor = "#E7FFFF"
    document.getElementById("arch").style.backgroundColor = "#8CA7A7" /* This is the clicked colour */
    document.getElementById("TwinTube").style.backgroundColor = "#E7FFFF"
    document.getElementById("gull").style.backgroundColor = "#E7FFFF"
    document.getElementById("peak").style.backgroundColor = "#E7FFFF"

    document.getElementById("station-info").textContent = "In an effort to save money, the WMATA only lines the overhead areas of the station with coffers. These stations first appeared in 1981 and are only present on the red line. "
}

function twintube(){
    document.getElementById("station-img").src = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Forest_Glen_Station.jpg"
    document.getElementById("station-img").style.display = "block"
    document.getElementById("waffle").style.backgroundColor = "#E7FFFF"
    document.getElementById("TwinTube").style.backgroundColor = "#8CA7A7"
    document.getElementById("arch").style.backgroundColor = "#E7FFFF"
    document.getElementById("gull").style.backgroundColor = "#E7FFFF"
    document.getElementById("peak").style.backgroundColor = "#E7FFFF"

    document.getElementById("station-info").textContent= "This style appears only in the deepest stations to accomodate the fact that each direction  of track was bored seperatly. Northbound and southbound are in different compartments as a result. One of these stations, Wheaton, boasts the longest-continous escalator at 70 metres of elevation gain."
}

function gull(){
    document.getElementById("station-img").src = "https://images.cf.nycsubway.org/images/icon/title_world_us_washdc_orange.jpg"
    document.getElementById("station-img").style.display = "block"
    document.getElementById("waffle").style.backgroundColor = "#E7FFFF"
    document.getElementById("gull").style.backgroundColor = "#8CA7A7"
    document.getElementById("arch").style.backgroundColor = "#E7FFFF"
    document.getElementById("TwinTube").style.backgroundColor = "#E7FFFF" 
    document.getElementById("peak").style.backgroundColor = "#E7FFFF"

    document.getElementById("station-info").textContent = "The gull design, coined for the ressemblance to a seagull, is the most common overground station desgin. The two arches pay homage to the underground platforms"
}

function peak(){
    document.getElementById("station-img").src = "https://visitalexandria.com/wp-content/uploads/2022/03/Plan-Default-Header_0ed2e435-bc59-4868-ba5c-60dce74947ac.jpg"
    document.getElementById("station-img").style.display = "block"
    document.getElementById("waffle").style.backgroundColor = "#E7FFFF"
    document.getElementById("peak").style.backgroundColor = "#8CA7A7"
    document.getElementById("arch").style.backgroundColor = "#E7FFFF"
    document.getElementById("TwinTube").style.backgroundColor = "#E7FFFF"
    document.getElementById("gull").style.backgroundColor = "#E7FFFF"

    document.getElementById("station-info").textContent = "This style originates from complaints to the first station to hold this design (1983). Residents of alexandria were worried the defualt gull style would clash with the architecture of their town. These stations have a skylight pointing upwards"
}
