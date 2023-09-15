<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <style>
        header{
            border-bottom: 2px solid burlywood;
        }
        body{
            width:96%;
            background-color:white;
            margin: 20px auto;
            border: 1px solid black;
        }
        main{
           width:60%;
           height:350px;
           border-right: 2px solid burlywood; 
           float:left;
        }
        aside{
            width:36%;
            float:right;
        }
        footer{
            clear:both;
            border-top:2px solid burlywood
        }
    </style>
    <header>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="box" style="height:500px;
    width:1000px;
    position:relative;
  "></div>
<script>
    var arr=[["PacMan1.png","PacMan2.png"],["PacMan3.png","PacMan4.png"]]
    var img = document.createElement("img")
    document.getElementById("box").appendChild(img)
    var position=0;
    var flag=0;
    var velocity=100;
    var direction=0;

    function moving(){
        img.src=arr[direction][flag]

        if(position>window.innerWidth || position<0){
            direction= 1-direction
        }
        if(direction===0){
            position += velocity
        }
        else{
            position -= velocity
        }

        img.style.left=position+"px"
        flag= 1-flag
        img.style.width="100px"
        img.style.height="100px"
        img.style.position="absolute"
    }
    setInterval(moving,1000)
</script>    
</body>
</html>