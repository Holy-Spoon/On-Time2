window.onload =  {

}


function calculateVolume() {

    let height = document.getElementById("height").value;
    let length = document.getElementById("length").value;
    let width = document.getElementById("width").value;

    height = parseFloat(height);
    length = parseFloat(length);
    width = parseFloat(width);

    if (height == NaN || length == NaN || width == Nan){
        console.log("Please Enter in valid numbers");
        return;
    }

    let volume = height * length * width;
    console.log(volume);
} 

