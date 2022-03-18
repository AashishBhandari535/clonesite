var a=document.getElementById("box")
var b=document.getElementById("content")
var c=document.getElementById("carouselContainer1")
var d=document.getElementById("carouselContainer2")
var e=document.getElementsByClassName("slick-prev")
var f=document.getElementsByClassName("slick-next")
a.addEventListener("mouseover",mouseOver1)
a.addEventListener("mouseout",mouseOut1)
c.addEventListener("mouseover",mouseOver2)
c.addEventListener("mouseout",mouseOut2)
d.addEventListener("mouseover",mouseOver2)
d.addEventListener("mouseout",mouseOut2)


function mouseOver1()
{
    a.style.border="dotted black";
    b.style.textDecoration="underline";
}
function mouseOut1()
{
    if((a.style.border=="dotted black") && (b.style.textDecoration=="underline"))
           {
                a.style.border="solid #950C17";
                b.style.textDecoration="none" ;   
           }
}
function mouseOver2()
{
    for(i=0;i<2;i++)
    {
        e[i].style.opacity='1';
        f[i].style.opacity='1';
    }
    
}
function mouseOut2()
{
    for(i=0;i<2;i++)
    {
        e[i].style.opacity='0';
        f[i].style.opacity='0';
    }
}
document.getElementById("box").addEventListener("mouseover",function()
{
    document.getElementById("content1").style.transition="0.9s ease";
    document.getElementById("content1").style.left="10px";   
})   
document.getElementById("box").addEventListener("mouseleave",function()
{
    document.getElementById("content1").style.left="0px";
}) 
function abc(a, b) {
    const x = document.getElementById(a)
    const y = document.getElementById(b)
    x.style.right = "3px"
    x.style.transition = "0.10s "
    x.style.borderBottom="solid white"
    y.style.left = "3px"
    y.style.transition = "0.10s"
}
function abc1(a,b) {
    const x = document.getElementById(a)
    const y = document.getElementById(b) 
    x.style.right="0px"
    y.style.left="0px"
    x.style.borderBottom="none"
}
function def(a,b)
{
    const x = document.getElementById(a)
    const y = document.getElementById(b)
    x.style.borderBottom="solid #950C17"
    y.style.left="4px"
    y.style.transition = "0.10s "
}
function def1(a,b)
{
    const x = document.getElementById(a)
    const y = document.getElementById(b)
    x.style.borderBottom="none"
    y.style.left="0px"
}
$(".megamenu").click(function()
{ 

    $(".dropdowncontent").toggle()
})

$(".dropdowncontent a").css("borderBottom","none")
$(".navbar a i").click(function()
{
    $(".navbar .ul2").toggle()
})




