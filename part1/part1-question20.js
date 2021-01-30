var intervalID = window.setInterval(func, 1000);
function func()
{
 	let d = new Date(); 
   let time = d.toLocaleTimeString();
   console.log(time);
    
}

