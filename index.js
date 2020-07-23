document.querySelector(".new").addEventListener("click",function(){
    console.log(screen.width)
    if(screen.width<768){
        console.log(screen.width)
    document.querySelector(".right").style.display="unset"
    document.querySelector(".forms").style.display="unset"
    }else{
    document.querySelector(".right").style.display="flex"
    document.querySelector(".forms").style.display="flex"
    }
    document.querySelector(".signin").style.display="none"
    document.querySelector(".or").style.display="none"
    document.querySelector(".logos").style.display="none"
    document.querySelector(".n").style.display="none"
    document.querySelector(".register").style.display="block"
    document.querySelector(".nav").style.display="inline-flex"
    document.querySelector(".steps").style.display="block"
    document.querySelector(".l").style.display="block"
    document.querySelector(".head").innerHTML="Welcome To Yaar Me, Register Here!"
    document.querySelector(".submit").style.display="none"
})
var i=1
document.querySelector(".next").addEventListener("click",function(){
    document.querySelector(".prev").style.display="inline";
    var rn = "r"+i.toString()
    //console.log(rn)
    var st = "Step-"+(i+1).toString()
    document.querySelector(".steps").innerHTML=st
    var r = "r"+(i+1)
    //console.log(r)
    document.querySelector("."+rn).style.display="none"
    document.querySelector("."+r).style.display="inline-block"
    if(r=="r6"){
        document.querySelector(".next").style.display="none";
        document.querySelector(".submit").style.display="block";
        document.querySelector(".submit").setAttribute("value","Register")
        }
    i+=1
})
document.querySelector(".prev").addEventListener("click",function(){
    if(i==6){
    document.querySelector(".next").style.display="inline"
    document.querySelector(".submit").style.display="none"
    }
    if(i==2)
    document.querySelector(".prev").style.display="none"
    var rn = "r"+i.toString()
    //console.log(rn)
    var st = "Step-"+(i-1).toString()
    document.querySelector(".steps").innerHTML=st
    var r = "r"+(i-1)
    //console.log(r)
    document.querySelector("."+rn).style.display="none"
    document.querySelector("."+r).style.display="inline-block"
    i-=1
})
document.querySelector(".ll").addEventListener("click",function(){
    document.querySelector(".right").style.display="flex"
    document.querySelector(".forms").style.display="flex"
    document.querySelector(".signin").style.display="inline-block"
    document.querySelector(".or").style.display="flex"
    document.querySelector(".logos").style.display="flex"
    document.querySelector(".n").style.display="inline-block"
    document.querySelector(".register").style.display="none"
    document.querySelector(".nav").style.display="none"
    document.querySelector(".steps").style.display="none"
    document.querySelector(".l").style.display="none"
    document.querySelector(".head").innerHTML="Login To Yaar Me"
    document.querySelector(".submit").style.display="inline-block"
    document.querySelector(".submit").setAttribute("value","Sign in")
})
document.querySelector(".ab").addEventListener("click",function(){
    var v = document.querySelector(".ei").value;
    v.trim()
    if(v!=""){
        var t = document.querySelector(".edu").innerHTML
        t=t+v+"<br>"
        document.querySelector(".edu").innerHTML=t
        document.querySelector(".ei").value=""
    }
})

document.querySelector(".ee").addEventListener("click",function(){
    var iname = document.querySelector(".in").value;
    var year = document.querySelector(".ac").value;
    iname.trim()
    year.trim()
    if(iname!="" && year!=""){
        var t = `<p><b>${iname}</b></p>
                 <p>${year}<p><br><hr>`
        document.querySelector(".iii").insertAdjacentHTML("beforeend",t)
        document.querySelector(".in").value=""
        document.querySelector(".ac").value=""
    }
})
document.querySelector(".job").addEventListener("click",function(){
    var cname = document.querySelector(".cn").value;
    var pos = document.querySelector(".po").value;
    var y = document.querySelector(".dur").value;
    cname.trim()
    y.trim()
    pos.trim()
    if(cname!="" && y!="" && pos!=""){
        var t = `<p><b>${cname}</b></p>
                 <p>${pos}<p><p>${y}</p><br><hr>`
        document.querySelector(".jjj").insertAdjacentHTML("beforeend",t)
        document.querySelector(".cn").value=""
        document.querySelector(".po").value=""
        document.querySelector(".dur").value=""
    }
})
