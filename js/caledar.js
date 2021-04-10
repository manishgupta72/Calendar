
var date = new Date();
console.log(date);
function RenderDate() {

    // date.setMonth(1);
    date.setDate(1);
    var day = date.getDay();
    // console.log(date.getDay());

    var endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    // console.log(endDate);

    var prevDate = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    var today = new Date();
    // console.log(today);

    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    // 1st create this
    document.getElementById("date-str").innerHTML = today;
    document.getElementById("months").innerHTML = months[date.getMonth()];

    //start today icon code here   
    document.getElementById("td").onclick = function () { td() };
    function td() {
        document.getElementById("td").innerHTML = today.getDate();
        
    }
    //    today icon code end here
    
    
    // document.getElementById("date-str").onclick = function() {togglePopup()}; //popjavascript

    // console.log(date.getMonth());
    var cells = "";
    for (x = day; x > 0; x--) {
        cells += "<div class='prev-date'>" + (prevDate - x + 1) + "</div>";
    }
    // console.log(prevDate);
    for (i = 1; i <= endDate; i++) {
        if (i == today.getDate() && date.getMonth() == today.getMonth()) {
            cells += "<div class='today' onclick ='togglePopup()'>" + i + "</div>";
            // today.onclick="togglePopup()";

        }
        else {
            cells += "<div>" + i + "</div>";
        }
    }
    // console.log(today.getMonth());
    document.getElementsByClassName("days")[0].innerHTML = cells;

}
function moveDate(para) {
    // console.log(para); tap button then show value of moveDate
    if (para == 'prev') {
        date.setMonth(date.getMonth() - 1);

    }
    else if (para == 'next') {
        date.setMonth(date.getMonth() + 1);

    }
    RenderDate();

}
// function holi()
//     {

//     let holi=document.getElementById("holi");
//     holi.style.width="100px";
//     holi.style.height="100px";
//     holi.style.backgroundColor="blue";
//     // holi.style.position="relative";
//     holi.style.marginLeft="350px";
//     holi.style.marginTop="350px";

//     holi.style.display="block";
//     }



//     function displayDate() {
//         documentgetElementById("sun").innerHTML="blue";
//     }    



// pop code here start
function togglePopup() {
    document.getElementById("pop-up1").classList.toggle("active");
}


    //pop code end here 