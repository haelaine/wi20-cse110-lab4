let statistics = {
 redCars: 21, 
 blueCars: 45,
 greenCars: 12, 
 raceCars: 5,
 blackCars: 40, 
 rareCars: 2
};

var intervalID = window.setInterval(func, 1000);
function func()
{
 	let d = new Date(); 
   let time = d.toLocaleTimeString();
   console.log(time);
    
}

