var names, i;

    names = ["Ulo Young Tortle",
        "rhys-the-davies",
        "Rhys Davies",
        "Developer Advocate",
        "Product Manager", 
        "Writer",
        "Mechanical Engineer",
        "Dungeon Master", 
        "Book Worm", 
        "Ulo Young Tortle"];
    i = 0;

function namechanger() {
    ++i;
      document.getElementById("jumboheader").innerHTML = names[i];
      if (i >= names.length - 1){
          i = -1;
      }
}
namechanger();


 /* wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {

    function ground() {
  
      var tl = new TimelineMax({
        repeat: -1
      });
  
      tl.to("#ground", 20, {
          backgroundPosition: "1301px 0px",
          force3D:true,
          rotation:0.01,
          z:0.01,
          autoRound:false,
          ease: Linear.easeNone
        });
  
      return tl;
    }
  
    function clouds() {
  
      var tl = new TimelineMax({
        repeat: -1
      });
  
      tl.to("#clouds", 52, {
        backgroundPosition: "-2247px bottom",
        force3D:true,
        rotation:0.01,
        z:0.01,
        //autoRound:false,
        ease: Linear.easeNone
      });
      
      return tl;
    }
  
    var masterTL = new TimelineMax({
      repeat: -1
    });
    
    // window load event makes sure image is 
  // loaded before running animation
  window.onload = function() {
    
    masterTL
    .add(ground(),0)
    .add(clouds(),0)
    .timeScale(0.7)
    .progress(1).progress(0)
    .play();
  
  };
    
  });*/