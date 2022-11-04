
function szamolj(muvelet) {
    var aszam=document.getElementById("elsoSzam").value;
    var bszam=document.getElementById("masodikSzam").value;
    if (muvelet=="+") {
        var eredmeny=parseFloat(aszam)+parseFloat(bszam);
    }
    else if (muvelet=="-") {
    var eredmeny=parseFloat(aszam)-parseFloat(bszam);
    }
    else if (muvelet=="*") {
    var eredmeny=parseFloat(aszam)*parseFloat(bszam);
    }   
    else {
    var eredmeny=parseFloat(aszam)/parseFloat(bszam);
    }
    document.getElementById("eredmeny").innerHTML=eredmeny;
}

function osszeadas () {
    szamolj("+")
}

function kivonas () {
    szamolj("-")
}

function szorzas () {
    szamolj("*")
}

function osztas () {
    szamolj("/")
}