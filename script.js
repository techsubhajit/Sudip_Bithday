const typed= new Typed('.multiple-text',{
    strings:['Sudip Mondal','Frontend Developer','Boka'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})



// const wish=document.querySelector('.wish')
// wish.addEventListener("click", (e) => {
    
  
//         (function frame() {
//           confetti({
//             particleCount: 2,
//             angle: 60,
//             spread: 55,
//             origin: { x: 0 },
//             colors: colors,
//           });
  
//           confetti({
//             particleCount: 2,
//             angle: 120,
//             spread: 55,
//             origin: { x: 1 },
//             colors: colors,
//           });
  
//           if (Date.now() < end) {
//             requestAnimationFrame(frame);
//           }
//         })();
  
       
//     })
      

const wish=document.querySelector('.wish');
wish.addEventListener('click',()=>{
    alert("Happy Birthday Sudip");
})