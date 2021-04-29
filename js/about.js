$(function(){
    // about visual canvas--------------------------------------
    var bridge = document.getElementById("bridge"),
    bridgeCanvas = bridge.getContext('2d'),
    brushRadius = (bridge.width / 100) * 1,
    img = new Image();

    if (brushRadius < 40) { brushRadius = 40 }

    img.onload = function(){  
    bridgeCanvas.drawImage(img, 0, 0, bridge.width, bridge.height);
    }

    if (window.devicePixelRatio >= 2) {
        img.src = './imgs/about_main_visual4.jpg';
        } else {
        img.src = './imgs/about_main_visual4.jpg';
        }

    function detectLeftButton(event) {
        if ('buttons' in event) {
            return event.buttons === 1;
        } else if ('which' in event) {
            return event.which === 1;
        } else {
            return event.button === 1;
        }
    }

    function getBrushPos(xRef, yRef) {
    var bridgeRect = bridge.getBoundingClientRect();
        return {
        x: Math.floor((xRef-bridgeRect.left)/(bridgeRect.right-bridgeRect.left)*bridge.width),
        y: Math.floor((yRef-bridgeRect.top)/(bridgeRect.bottom-bridgeRect.top)*bridge.height)
        };
    }
        
    function drawDot(mouseX,mouseY){
    bridgeCanvas.beginPath();
        bridgeCanvas.arc(mouseX, mouseY, brushRadius, 0, 2*Math.PI, true);
        bridgeCanvas.fillStyle = '#000';
        bridgeCanvas.globalCompositeOperation = "destination-out";
        bridgeCanvas.fill();
    }

    bridge.addEventListener("mousemove", function(e) {
    var brushPos = getBrushPos(e.clientX, e.clientY);
    var leftBut = detectLeftButton(e);
    if (leftBut == 1) {
        drawDot(brushPos.x, brushPos.y);
    }
    }, false);

    bridge.addEventListener("touchmove", function(e) {
        e.preventDefault();
        var touch = e.targetTouches[0];
        if (touch) {
        var brushPos = getBrushPos(touch.pageX, touch.pageY);
            drawDot(brushPos.x, brushPos.y);
        }
    }, false);
    // about visual canvas--------------------------------------

    
});