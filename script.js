var data = [];
$( "#searchInput" ).autocomplete({
    source: data
});

//Add new button click handler
var id = 0;
$('#addCarButton').click( () => {
    let model = $('#modelInput').val();
    let color = $('#colorInput').val();
    let price = $('#priceInput').val();

    if(!data.includes(model))data.push(model);
    if(!data.includes(color))data.push(color);
    $( "#searchInput" ).autocomplete( "option", "source", data );

    id++;
    $('#right-tab').append($('<div></div>').addClass('box border')
    .append($('<div></div>').attr('id', id))//.addClass('hidden')
    .append($('<div></div>').addClass('title').text(model))
    .append($('<div></div>').addClass('label').text(color))
    .append($('<div></div>').addClass('label').text(price))
    .append(
        $('<button></button>').addClass('right').text('Rent')
        .click(function() {
            let date = new Date();
            let term = prompt('How long (hours) do u want to use the car?', 24);
            date.setSeconds(date.getSeconds() + parseInt(term, 10));
            if(date == 'Invalid Date') return;
            $(this).parent().attr('date', date);
            $(this).parent().children().hide();
            $(this).parent().addClass('rented');
            $(this).parent().append($('<div></div>').text('Rented to ' + $(this).parent().attr('date')).attr('id', 'rent'));
        })
    )
    .append(
        $('<button></button>').addClass('right').text('Delete')
        .click(function() {
            $(this).parent().remove();
        })
    )
    );
});

//Search
$('#searchInput').change(function() {
    $("#right-tab").children().hide();
    $( ".box:contains('"+ $('#searchInput').val() +"')" ).show();
})

//Rent term lost checking
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

var brands = [
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Bugatti",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Citroën",
    "Dacia",
    "Daewoo",
    "Daihatsu",
    "Dodge",
    "Donkervoort",
    "DS",
    "Ferrari",
    "Fiat",
    "Fisker",
    "Ford",
    "Honda",
    "Hummer",
    "Hyundai",
    "Infiniti",
    "Iveco",
    "Jaguar",
    "Jeep",
    "Kia",
    "KTM",
    "Lada",
    "Lamborghini",
    "Lancia",
    "Land Rover",
    "Landwind",
    "Lexus",
    "Lotus",
    "Maserati",
    "Maybach",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "MG",
    "Mini",
    "Mitsubishi",
    "Morgan",
    "Nissan",
    "Opel",
    "Peugeot",
    "Porsche",
    "Renault",
    "Rolls-Royce",
    "Rover",
    "Saab",
    "Seat",
    "Skoda",
    "Smart",
    "SsangYong",
    "Subaru",
    "Suzuki",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo"
]
var colors = [
    'red',
    'green',
    'black',
    'red',
    'white',
    'gray',
    'brown',
    'purple',
    'blue'
]

$( "#modelInput" ).autocomplete({
    source: brands,
    minLength: 2
});

$( "#colorInput" ).autocomplete({
    source: colors,
    minLength: 0
});