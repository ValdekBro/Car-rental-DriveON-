var id = 0;

$('#addCarButton').click( () => {
    id++;
    $('#right-tab').append($('<div></div>').addClass('box border')
    .append($('<div></div>').attr('id', id))//.addClass('hidden')
    .append($('<div></div>').addClass('title').text($('#modelInput').val()))
    .append($('<div></div>').addClass('label').text($('#colorInput').val()))
    .append($('<div></div>').addClass('label').text($('#priceInput').val()))
    .append($('<button></button>').addClass('right').text('Rent').click(function() {
        let date = new Date();
        let term = prompt('How long (hours) do u want to use the car?', 24);
        if(term == null) return;
        date.setSeconds(date.getSeconds() + parseInt(term, 10));
        $(this).parent().attr('date', date);
        $(this).parent().children().hide();
        $(this).parent().addClass('rented');
        $(this).parent().append($('<div></div>').text('Rented to ' + $(this).parent().attr('date')).attr('id', 'rent'));
    }))
    .append($('<button></button>').addClass('right').text('Delete').click(function() {
        $(this).parent().remove();
    }))
    );
});

$('#searchInput').change(function() {
    $("#right-tab").children().hide();
    $( ".box:contains('"+ $('#searchInput').val() +"')" ).show();
})

setInterval(()=>{   
    $('.box').each(function( index ) {
        if((Date.parse($(this).attr('date'))) < (new Date())) {
            $(this).attr('date', 0);
            $(this).children('#rent').remove();
            $(this).children().show();
            $(this).removeClass('rented');
        };
    });
}, 100)