///*** Sources that assisted project came from Canvas, previous assignments, Stackoverflow, Codepen, W3schools, and YouTube ***///

$(document).ready(function() {
    // Start of Local Storage 
    var $ul = $('#list');
    if (localStorage.getItem('Items')) {
        $ul.html(localStorage.getItem('Items'));
    }
    // Adding text to input box
    $('input[name=getItem]').focus(function() {
            $(this).val('');
        })
        // Adding the string to the list box
    $('#add').click(function() {
        var $input = $('input[name=getItem]').val();
        if ($input.length > 0) {
            $('#list').append('<li class=' + 'close' + '>' +
                $input + '</li>');
        }
        // Saves changes to LocalStorage
        localStorage.setItem('Items', $ul.html());
        // Reset input box to no text
        $('input[name=getItem]').val('');
    });
    // Remove list from item both visualy and from Local Storage
    $('#list').on('click', '.close', function() {
        $(this).hide('2000', function() {
            $(this).remove();
            localStorage.setItem('Items', $ul.html());
        });
    });
});