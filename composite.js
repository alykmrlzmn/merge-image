var jimp = require('jimp');

var images = ['image/body.png', 'image/eyes.png', 'image/mouth.png'];

var jimps = [];

for (var i = 0; i< images.length; i++){
    jimps.push(jimp.read(images[i]));
}

//baca semua and return satu object
Promise.all(jimps).then(function(data){
    return Promise.all(jimps);
}).then(function(data){
    data[0].composite(data[1],0,0);
    data[0].composite(data[2],0,0);

 //string to text to documents
    data[0].write('final-images/test.png'), function()
    {
        console.log("wrote the image");
    }
})