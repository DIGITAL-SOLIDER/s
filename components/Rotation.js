AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 }    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.01;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});

AFRAME.registerComponent("astronaut-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
    speedOfAccent: {type:"number", default:0}  
  },
  init: function () {
    this.data.speedOfRotation=this.el.getAttribute("rotation")

    this.data.speedOfAccent=this.el.getAttribute("position")

    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation.x < 10) {
          this.data.speedOfRotation.x += 0.5;
          this.el.setAttribute("rotation",this.data.speedOfRotation)
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation.x > -10) {
          this.data.speedOfRotation.x -= 0.5;
          this.el.setAttribute("rotation",this.data.speedOfRotation)
        }
      }
      if (e.key === "ArrowUp") {
        if (this.data.speedOfRotation.z < 20) {
          this.data.speedOfRotation.z += 0.5;
          this.el.setAttribute("rotation",this.data.speedOfRotation)
        }
        if (this.data.speedOfAccent.y < 2) {
          this.data.speedOfAccent.y += 0.01;
          this.el.setAttribute("position",this.data.speedOfAccent)
        }
      }
      if (e.key === "ArrowDown") {
        if (this.data.speedOfRotation.z > -20) {
          this.data.speedOfRotation.z -= 0.5;
          this.el.setAttribute("rotation",this.data.speedOfRotation)
        }
        if (this.data.speedOfAccent.y > -2) {
          this.data.speedOfAccent.y -= 0.01;
          this.el.setAttribute("position",this.data.speedOfAccent)
        }
      }
    });
  }
})