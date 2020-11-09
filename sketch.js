var bullet, wall, thickness;
var speed, weight;

function setup(){
    
     canvas = createCanvas(1600,400);
     speed=random(223,331);
     weight=random(30,52);
     thickness=random(22,83);
    
    bullet = createSprite(50,200,50,50);
    bullet.velocityX = speed;
    wall = createSprite(1600,200,thickness,height/2);
    wall.shapeColor=color(80,80,80);

   
    }
    function draw(){
        background(0);
    
        if(hasCollided(bullet,wall)){
            bullet.velocityX=0;
            var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

            if(damage>10){
                wall.shapeColor= "red";
            }

            if(damage<10){
                wall.shapeColor= "green";
            }

        }
        
        drawSprites();
       
    }

    hasCollided();

    function hasCollided(){
        bulletRightEdge=bullet.x + bullet.width;
        wallLeftEdge=wall.x;
        if(bulletRightEdge>=wallLeftEdge)
        {
            return true;
        }

        return false;
    }

       

       

    