let h=0, m=0, s=0, ms=0;
let startState = false;

let lapCount = 0;
let sCal;

function calculate() {
    if(s == 0 && ms == 0) {
        sCal = setInterval(()=>{
            ms++;
            //console.log(s);

            if (ms<10) {
                document.getElementById('miliSeconds').innerHTML = '0'+ms;
            } else {
                document.getElementById('miliSeconds').innerHTML = ms;
            }

            if (ms === 99) {
                ms = 0;
                s++;
            }

            if (s<10) {
                document.getElementById('seconds').innerHTML = '0'+s;
            } else {
                document.getElementById('seconds').innerHTML = s;
            }

            if (s === 60) {
                s = 0;
                m++;
            }

            if (m<10) {
                document.getElementById('minits').innerHTML = '0'+m;
            } else {
                document.getElementById('minits').innerHTML = m;
            }

            if (m === 60) {
                m = 0;
                h++;
            }

            if (h<10) {
                document.getElementById('hou').innerHTML = '0'+h;
            } else {
                document.getElementById('hou').innerHTML = h;
            }
            
        }, 10)
    }
}

function makeLap() {
    if (lapCount < 8) {
        lapCount++;
        let lap 
            = document.getElementById("hou").innerHTML
            + ' - ' + document.getElementById("minits").innerHTML
            + ' - ' + document.getElementById("seconds").innerHTML
            + ' - ' + document.getElementById("miliSeconds").innerHTML
        ;

        document.getElementById("lapTime"+lapCount).innerHTML = "Lap "+
        lapCount +" >>>>> " + lap + "<br>";

        var randomColor = Math.floor(Math.random()*16777215).toString(16);

        document.getElementById("lapTime"+lapCount).style.background = 
        "#"+randomColor;

        document.getElementById("lapTime"+lapCount).hidden = false;

    } else {
        alert("Maximum lap count is 8 !");
    }
    
}

function reset() {
    clearInterval(sCal);
    ms=0; s=0; m=0; h=0;
    document.getElementById('miliSeconds').innerHTML = 'MS';
    document.getElementById('seconds').innerHTML = 'SS';
    document.getElementById('minits').innerHTML = 'MM';
    document.getElementById('hou').innerHTML = 'HH';

    for(let i=1;i<=lapCount;i++) {
        document.getElementById('lapTime'+i).hidden = true;
    }
    lapCount = 0;
}