AFRAME.registerComponent("swimming-fish", {

    init :function () {
        // this make a random number value set for a fish
        for (var i =1; i<=20; i++){
            var id= `hurdle${i}`
            var posX = Math.floor(Math.random()*3000 + -1000)

            var posY = Math.floor(Math.random()*2 + -1)

            var posZ = Math.floor(Math.random()*3000 + -1000)

            var position = {x: posX, y: posY, z: posZ}
            this.swimmingFish(id, position)

        }

    },
    // setting attributes for the birds
    swimmingFish:(id, position)=> {
        var terrainE1 = document.querySelector("#terrain")
        var fishE1 = document.createElement("a-entity")
        fishE1.setAttribute("id", id)

        fishE1.setAttribute("position", position)

        fishE1.setAttribute("scale", {x: 500, y:500, z:500})

        fishE1.setAttribute("gltf-model","./project153Ongoing/models/shiny_fish/scene.gltf")

        fishE1.setAttribute("animation-mixer", {})

        terrainE1.appendChild(fishE1)
    }
})