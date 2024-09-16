const newText = document.querySelector('#newText');
gsap.from(newText,{
    y : 300,
    opacity : 0,
    duration : .8,
    scrollTrigger : {
        trigger : newText,
        start : 'top 80%',
        end : 'top 50%',
        toggleActions : 'play none none none'
    }
})

var typed=new Typed(".text-2",{
    strings:["MAKE SURE YOUR GEAR FITS"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true


});
var typed=new Typed(".text",{
    strings:["WALKING IN NATURE AS A RECREATIONAL ACTIVITY"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true


});