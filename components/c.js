// Registering component in Target.js

AFRAME.registerComponent("flying-rocks", {
    init: function () {
      for (var i = 1; i <= 100; i++) {
        //id
        var id = `rocks${i}`;
  
        //position variables     
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createrocks(id, position);
      }
    } ,
  
    createrocks: function(id, position) { 
      
        var terrainEl = document.querySelector("#terrain")
        var rockEl = document.createElement("a-entity") 
        
        rockEl.setAttribute("position",position)
        rockEl.setAttribute("id",id)
        rockEl.setAttribute("scale",{x:500,y:500,z:500})
        rockEl.setAttribute("gltf-model","./assets/models/astroid_bennu/scene.gltf")
        rockEl.setAttribute("static-body",
        {shape:"sphere",
          sphereRadius:3
        }
    )
        terrainEl.appendChild(rockEl)
    }
  });
  
  