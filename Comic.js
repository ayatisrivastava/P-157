AFRAME.registerComponent("comics", {
    init: function() {
        this.pagesContainer = this.el;
    },
    createCards: function() {
        const thumbnailsRef = [
            {
                id: 'wonder-woman',
                title: 'Wonder Woman',
                url: './assets/wonder_woman.jpg'
            },
            {
                id: 'iron-man',
                title: 'Iron Man',
                url: './assets/iron_man.jpg'
            },
            {
                id: 'thor',
                title: 'Thor',
                url: './assets/thor.jpg'
            },
            {
                id: 'tmi',
                title: 'The Mortal Instruments',
                url: './assets/shadowhunters.jpg'
            }
        ]

        let prevoiusXPosition = -60;

        for (var item of thumbNailsRef) {
          const posX = prevoiusXPosition + 25;
          const posY = 10;
          const posZ = -40;
          const position = { x: posX, y: posY, z: posZ };
          prevoiusXPosition = posX;
        }

        const thumbNail = this.createThumbNail(item);
        const titleEl = this.createTitleEl(position, item);
    },
    createPosters: function(item){
        const entityEL = document.createElement("a-entity")
        entityEL.setAttribute("visible", true)
        entityEL.setAttribute("geometry", {primitive:"plane", width:20, hieght:28})
        entityEL.setAttribute("position", {x:0, y:5, z:0.1})
        entityEL.setAttribute("material", {src: item.url})
        return entityEL
      },

      createThumbnail: function(item){
        const entityEL = document.createElement("a-entity")
        entityEL.setAttribute("visible", true)
        entityEL.setAttribute("geometry", {primitive:"rectangle", width:20, hieght:28})
        entityEL.setAttribute("material", {src: item.url})
        return entityEL
      },
    
      createTitleEL: function(position, item){
        const entityEL = document.createElement("a-entity")
        entityEL.setAttribute("text", {
          font : "exo2bold",
          align : "center",
          width : 60,
          color : "#E65100",
          value : "item.title"
        })
        const elPosition = position
        elPosition.y = -20
        entityEL.setAttribute("postion", elPosition)
        entityEL.setAttribute("visible", true)
        return entityEL
      }
    });
    