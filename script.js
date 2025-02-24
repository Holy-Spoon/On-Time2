
public static void main(String[] args)
{
    window.onload = function() {
        var origin = document.getElementById('origin').value;
        console.log(origin);

        var height = document.getElementById('height').value
        console.log(height);

        var length = document.getElementById('length').value
        console.log(length);

        var width = document.getElementById('width').value
        console.log(width);

        var cost = (height * length * width);
        console.log(cost);
    } 
}