//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 }    
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRotation < 1.1) {
            this.data.speedOfRotation += 0.01;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRotation > -1.1) {
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
  
  
  AFRAME.registerComponent("diver-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfAscent: { type: "number", default: 0 },     
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        // these variables make it so we dont need to type this.data.(something, something)
        this.data.speedOfRotation = this.el.getAttribute("rotation");
  
        this.data.speedOfAscent = this.el.getAttribute("position");
  
        var scubaRotate = this.data.speedOfRotation
  
        var scubaUp = this.data.speedOfAscent
        // function to make scuba move to the side
        if (e.key === "ArrowRight") {
          if (scubaRotate.x < 10) {
            scubaRotate.x += 0.5;
            this.el.setAttribute("rotation", scubaRotate);
          }
        }
        // function to make scuba move to the side
        if (e.key === "ArrowLeft") {
          if (scubaRotate.x > -10) {
            scubaRotate.x -= 0.5;
            this.el.setAttribute("rotation", scubaRotate);
          }
        }
        // function to make scuba move up
        if (e.key === "ArrowUp") {
          if (scubaRotate.z < 20) {
            scubaRotate.z += 0.5; 
            this.el.setAttribute("rotation", scubaRotate);
          }
          if (scubaUp.y < 2) {
            scubaUp.y += 0.01;
            this.el.setAttribute("position", scubaUp);
          }
        }
        // function to make scuba move down
        if (e.key === "ArrowDown") {
          if (scubaRotate.z > -10) {
            scubaRotate.z -= 0.5;
            this.el.setAttribute("rotation", scubaRotate);
          }
          if (scubaUp.y > -2) {
            scubaUp.y -= 0.01;
            this.el.setAttribute("position", scubaUp);
          }
        }
      });
    }
  });