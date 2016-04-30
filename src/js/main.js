// Load wetfish basic
var $ = require('wetfish-basic');
require('dragondrop');

// Load custom modules
var Webcam = require('./webcam');


$(document).ready(function()
{
    $('.start-webcam').on('click', function()
    {
        var webcam = new Webcam('.webcam');
    });

    $('.add-image').on('click', function()
    {
        var src = prompt("Enter an image URL");
        var image = document.createElement('img');

        $(image).attr('src', src);
        $(image).dragondrop();

        $('.workspace').el[0].appendChild(image);
    });

    $('body').on('mousedown', 'img', function(event)
    {
        // If right click was pressed
        if(event.buttons == 2)
        {
            $(this).remove();
        }
    });

    $('body').on('contextmenu', 'img', function(event)
    {
        event.preventDefault();
    });
});
