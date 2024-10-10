/// <reference types="../@types/jquery"/>

// !----------open -----------------------------------------------

$(".openNav").on("click",function () {
    $(".openNav").animate({left:"260px"},500)
    $(".slide-left").animate({left:"0px"},500)
}
)

// !----------close --------------------------------------------

$(".close").on("click",function () {
    $(".openNav").animate({left:"20px"},500)
    $(".slide-left").animate({left:"-250px"},500)
})


// !----------Accordion ---------------------------------------
$(".toggle").on("click",function (e) {
    $(e.target).next().slideToggle(500)
    $('.inner-first').not($(e.target).next()).slideUp()
})


// !----------Details --------------------------------------------
let time=setInterval(() => {

    let countDown=new Date("10 october 2021 9:56:00").getTime()
    countDown=countDown/1000
    // console.log(countDown);

    let now = new Date().getTime()
    now=now/1000
    // console.log(now);

    timeDifference = countDown - now;
    

    // console.log(timeDifference);

    let days = Math.floor( timeDifference / (24*60*60));
    let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
    let minutes = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
    let seconds = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (minutes * 60)))




    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ minutes } m`);
    $('.seconds').html(`${ seconds} s`)

}, 1000);




// !----------Click ------------------------------------


$(".link a").on("click",function (e) {
    const currentHref=$(e.target).attr("href")

    // console.log(currentHref);
    
    const sectionOffset=$(currentHref).offset().top

    // console.log(sectionOffset);

    $("html,body").animate({scrollTop:sectionOffset},2000)
})




// !----------textarea ---------------------------------------



const maxText=100;
$(".textarea").on("keyup",function ({target}) {
    let myText=$(target).val().length

    // console.log(myText);

    let remainder=maxText-myText;
    // console.log(remainder);


    if(remainder>0){
        $(".num").text(remainder)
    }
    else{
        $(".num").text("your available character finished");
    }
})
