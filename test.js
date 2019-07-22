
<script>

winHT = window.innerHeight;
winWI = window.innerWidth;

</script>

<!-- viewBox='0 0 1920 936' -->
        
<svg id="interface"   style="display:none; height:100%; width:100%">
        <circle id="Acirc" cx='50%' cy='50%'  r="400" fill="rgb(250,250,250)"/>
        <circle cx='50%' cy='50%'  r="10" fill="rgb(233, 4, 4)" stroke="rgb(50,50,50)"/>

</svg>
<!-- style="position: absolute; margin: 0 auto; height: 90vh; width: 90vh; background-color:rgb(158, 157, 157); border-radius: 12px; display:none;" -->
<!-- style="position: absolute; margin: 0 auto; background-color:rgb(158, 157, 157); border-radius: 12px; display:none;" -->

</body>



<script>

        var state = {
            introMain : true,
            introHeader: true,
            options: true,
            descriptions: true,
            rememberSelected: false
        }

        var shots = [];

        bullX = winWI/2;
        bullY = winHT/2;
        var bulleye = [{PointX : bullX,
                        PointY : bullY}]
    
        var GUIOPT = document.getElementById('guiOption');
        var SQLOPT =  document.getElementById('sqlOption');
        var MAIN = document.getElementById('mainInterface');
    
    
        document.getElementById('guiOption').addEventListener('click', function(){
            MAIN.style.display="none";
            SQLOPT.style.display="none";
            document.getElementById('interface').style.display="block";
            var GetBulls = function() {
            HT = window.innerHeight;
                console.log(window.innerWidth);
            }
    
        });


        document.getElementById('interface').addEventListener('click', function(event){

                            var x = event.clientX;     // Get the horizontal coordinate
                var y = event.clientY;     // Get the vertical coordinate
                var coor = "X coords: " + x + ", Y coords: " + y;
                console.log( window.innerHeight);
                console.log(window.innerWidth);
                console.log(coor)

                






            var A = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            CX = x
            CY = y
            RAD = 10
            A.setAttribute('cx',CX)
            A.setAttribute('cy', CY);
            A.setAttribute('r',RAD);
            A.setAttribute('fill','rgb(50,50,50)');
            document.getElementById('interface').appendChild(A);
            console.log(A.innerHTML);
            shots.push({PointX:x, PointY:y});


            



        });
    
    
    
        </script>


