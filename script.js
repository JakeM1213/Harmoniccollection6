function GetRandomGradient() {
    console.log("randomize my background color!");
  
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var a = Math.random();
    var color1 = "rgba(" + r + "," + g + "," + b + "," + a + ")";
  
    var r2 = Math.floor(Math.random() * 256);
    var g2 = Math.floor(Math.random() * 256);
    var b2 = Math.floor(Math.random() * 256);
    var a2 = Math.random();
    var color2 = "rgba(" + r2 + "," + g2 + "," + b2 + "," + a2 + ")";
  
    var randGradient = (document.body.style.backgroundImage =
      "linear-gradient(" + color1 + "," + color2 + ")");
  
    console.log("colors", color1, color2);
  }
  