const myarr = [
    {
        name:"Closer by Chainsmokers",
        file:"american-studios_the-chainsmokers-closer-ft-halsey.mp3"
    },
    {
        name:"Fin de la Noche",
        file:"Fin de la Noche - Luna Cantina.mp3"
    },
    {
        name:"Kabhi-Kabhi-Aditi-Zindagi",
        file:"Kabhi-Kabhi-Aditi-Zindagi-Rashid-Ali.mp3"
    },
    {
        name:"Saadda Haq(Rockstar)",
        file:"Saadda Haq (From Rockstar).mp3"        
    },
    {
        name:"National Sweetheart",
        file:"Skating On the Uppers - National Sweetheart.mp3"
    },{
        name:"Ek Chatur Naar",
        file:"Ek Chatur Naar Karke Sringar - Padosan (1968) 128 Kbps.mp3"
    }
];const x = document.getElementById("songtitle")
x.innerHTML="Song name:"+myarr[0].name
const Lib = document.getElementById("lib")
const Songpanel = document.getElementById("songpanel")
const Cross = document.getElementById("cross")
const Items0 = document.getElementById("items0")
const Items1 = document.getElementById("items1")
const Items2 = document.getElementById("items2")
const Items3 = document.getElementById("items3")
const Items4 = document.getElementById("items4")
const Items5 = document.getElementById("items5")
const Ad = document.getElementById("ad")
const str="";const mus="" ; 
Lib.addEventListener("click", function() {
   Songpanel.style.display = "flex";
   Songpanel.style.flexDirection = "column";
   Songpanel.style.marginTop = "2em" ;
   Songpanel.style.marginLeft = "0em" ;
   Songpanel.style.marginBottom = "1em" ; 
   Songpanel.style.width = "70%" ;
   Songpanel.style.justifyContent= "center";
   })
Cross.addEventListener("click",function() {
   Songpanel.style.display = "none";
})
Items0.addEventListener("click", function() {
    x.innerHTML="Song name:"+" "+myarr[0].name
    Ad.src=myarr[0].file
    Ad.load()
 })
Items1.addEventListener("click", function() {
   x.innerHTML="Song name:"+" "+myarr[1].name
   Ad.src=myarr[1].file
   Ad.load()
})
Items2.addEventListener("click", function() {
    x.innerHTML="Song name:"+" "+myarr[2].name
    Ad.src=myarr[2].file
    Ad.load()
 })
 Items3.addEventListener("click", function() {
    x.innerHTML="Song name:"+" "+myarr[3].name
    Ad.src=myarr[3].file
    Ad.load()
 })
 Items4.addEventListener("click", function() {
    x.innerHTML="Song name:"+" "+myarr[4].name
    Ad.src=myarr[4].file
    Ad.load()
   })
Items5.addEventListener("click",function() {
    x.innerHTML="Song name:"+" "+myarr[5].name
    Ad.src=myarr[5].file
    Ad.load()
})


