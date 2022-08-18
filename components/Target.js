// Registering component in Target.js

AFRAME.registerComponent("target-scrap", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `scrap${i}`;

      //position variables     
      var posX =(Math.random() * 3000 + (-1000));      
      var posY = (Math.random() * 2 + (-1));
      var posZ = (Math.random() * 3000 + -1000);

      var position = { x: posX, y: posY, z: posZ };

      //call the function
      this.createscraps(id, position);
    }
  } ,

  createscraps: function(id, position) { 
    
    var terrainEl = document.querySelector("#terrain");

    var scrapEl = document.createElement("a-entity");

    scrapEl.setAttribute("id",id);
    scrapEl.setAttribute("position",position);
    
    scrapEl.setAttribute("material","color","grey");
    
    scrapEl.setAttribute("geometry",{ primitive: "box",radius: 8 });
    
    scrapEl.setAttribute("static-body",
      {shape:"sphere",
        sphereRadius:2
      }
    )

    terrainEl.appendChild(scrapEl);
  }
});

