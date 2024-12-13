var btn = document.querySelectorAll(".drum").length ;
for(i=0 ; i<btn ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function () {

 var buttoninner= this.innerHTML ;


 makeSound(buttoninner) ;
buttonAnimation(buttoninner) ;
    
    });
}
document.addEventListener("keydown", function (buttoninner) {
    makeSound(buttoninner.key) ;
    buttoninner(buttoninner.key) ;
}) ;

function makeSound(key){
switch(key){
        case "w" :  
    var tom1 = new Audio ('sounds/tom-1.mp3') ;
     tom1.play();
      break ;

        case "a" :  
         var tom2 = new Audio('sounds/tom-2.mp3') ;
         tom2.play();
         break ;

        case "s" :  
         var tom3 = new Audio ('sounds/tom-3.mp3') ;
         tom3.play();
         break ;

         case "d" :  
         var tom4 = new Audio ('sounds/tom-4.mp3') ;
         tom4.play();
         break ;

        case "j" :  
         var snare = new Audio ('sounds/snare.mp3') ;
         snare.play();
         break ;

        case "k" :  
         var crach = new Audio ('sounds/crash.mp3') ;
         crach.play();
         break ;

        case "l" :  
         var kick = new Audio ('sounds/kick-bass.mp3') ;
         kick.play();
         break ;

        case "i" :  
         var kick = new Audio ('sounds/piano.mp3') ;
         kick.play();
         break ;

        case "v" :  
         var kick = new Audio ('sounds/violoncello.mp3') ;
         kick.play();
         break ;

        case "t" :  
         var kick = new Audio ('sounds/trombone.mp3') ;
         kick.play();
         break ;
         
        case "f" :  
         var kick = new Audio ('sounds/saxophone.mp3') ;
         kick.play();
         break ;
                    
         
            default : console.log("hi") ;
       
}
}
function buttonAnimation (key){
    var activeButton = document.querySelector("."+key) ;
    activeButton.classList.add("pressed") ;
    setTimeout(function (){
activeButton.classList.remove("pressed") ;
    },100)

}

