const ctlL = document.getElementById("ctlL");
const ctlR = document.getElementById("ctlR");
const txt = document.getElementById("txt");
const txt2 = document.getElementById("txt2");
const txt3 = document.getElementById("txt3");
const txt4 = document.getElementById("txt4");

const camera = document.getElementById("camera");

// const peerd = new Peer({key: apiKey, debug: 1});
let dataConnection = null;

//Getting Position of Right Controller.
const timer = setInterval(() => {
  if(remoteId==null){
    console.log("remoteId is null");
  }else if(dataConnection == null){
    dataConnection = peer.connect(remoteId);
  }else{
    var p=ctlR.object3D.position;
    // txt2.setAttribute("value","R-Position: "+ p.x.toFixed(2)+", "+p.y.toFixed(2)+", "+p.z.toFixed(2));
    var y = camera.getAttribute("rotation").y;
    // console.log("camera rot: "+ y.toFixed(2));
    txt3.setAttribute("value","camera rot: "+ y.toFixed(2));
  
    // dataConnection = peer.connect(remoteId);
    // dataConnection.on("open", () => {
    //   const data = {
    //     name: "head pitch",
    //     msg: y.toFixed(2),
    //   };
    //   dataConnection.send(data);
    //   // console.log("data send");  
    // });

    const data = {
      name: "head pitch",
      msg: y.toFixed(2),
    };
    dataConnection.send(data);
  }
    
}, 100);

//Stick Moved
ctlL.addEventListener('axismove',function(event){
  txt.setAttribute("value", "L Stick  x:"+event.detail.axis[0].toFixed(2)+", y:"+event.detail.axis[1].toFixed(2));
});
ctlR.addEventListener('axismove',function(event){
  txt.setAttribute("value", "R Stick  x:"+event.detail.axis[0].toFixed(2)+", y:"+event.detail.axis[1].toFixed(2));
});

//Trigger Touch Started
ctlL.addEventListener('triggertouchstart', function (event) {
  txt.setAttribute("value","Left touch started ");
});
ctlR.addEventListener('triggertouchstart', function (event) {
  txt.setAttribute("value","Right touch started");
});

//Trigger Touch Ended
ctlL.addEventListener('triggertouchend', function (event) {
  txt.setAttribute("value","Left touch ended ");
});
ctlR.addEventListener('triggertouchend', function (event) {
  txt.setAttribute("value","Right touch ended");
});

//Trigger Pressed
ctlL.addEventListener('triggerdown', function (event) {
  txt.setAttribute("value","Left trigger down");
});

ctlR.addEventListener('triggerdown', function (event) {
  txt.setAttribute("value","Right trigger down");
});

//Trigger Released
ctlL.addEventListener('triggerup', function (event) {
  txt.setAttribute("value","Left trigger up");
});
ctlR.addEventListener('triggerup', function (event) {
  txt.setAttribute("value","Right trigger up");
});

//Grip Pressed
ctlL.addEventListener('gripdown', function (event) {
  txt.setAttribute("value","Left gripdown down");
});
ctlR.addEventListener('gripdown', function (event) {
  txt.setAttribute("value","Right gripdown down");
});

//Grip Released
ctlL.addEventListener('gripup', function (event) {
  txt.setAttribute("value","Left gripdown up");
});
ctlR.addEventListener('gripup', function (event) {
  txt.setAttribute("value","Right gripdown up");
});


//A-buttorn Pressed 
ctlR.addEventListener('abuttondown', function (event) {
  txt.setAttribute("value","Right A-button down");
});

//A-buttorn Released 
ctlR.addEventListener('abuttonup', function (event) {
  txt.setAttribute("value","Right A-button up");
});

//B-buttorn Pressed 
ctlR.addEventListener('bbuttondown', function (event) {
  txt.setAttribute("value","Right B-button down");
});

//B-buttorn Released 
ctlR.addEventListener('bbuttonup', function (event) {
  txt.setAttribute("value","Right B-button up");
});

//Y-buttorn Pressed 
ctlL.addEventListener('ybuttondown', function (event) {
  txt.setAttribute("value","Left Y-button down");
});

//Y-buttorn Released 
ctlL.addEventListener('ybuttonup', function (event) {
  txt.setAttribute("value","Left Y-button up");
});

//X-buttorn Pressed 
ctlL.addEventListener('xbuttondown', function (event) {
  txt.setAttribute("value","Left X-button down");
});

//X-buttorn Released 
ctlL.addEventListener('xbuttonup', function (event) {
  txt.setAttribute("value","Left X-button up");
});
