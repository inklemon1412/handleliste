var x = 0;
var array = Array();

view()
function view(){
    document.getElementById('app').innerHTML = `
    <div class="container">
    <input type="text" id="cart"></input>
   <input type="button" id="button1" value="putt i handlevognen" onclick="add_item_to_cart();"></input>
   <input type="button" id="button2" value="sjekk vogna!" onclick="display_cart();"></input>
   <div id="Result" class=result>Handlevogna:</div>
   </div>
    `
}

function add_item_to_cart(){
    array[x] = document.getElementById('cart').value;

    alert("Vare: " + array[x] + "ble puttet i handlevognen " + x);
    x++;
    document.getElementById('cart').value = "";
}

function display_cart(){
    var e = "<hr/>";
    for(var y = 0; y < array.length; y++){
        e += "Vare " + y + " = " + array[y] + "<br/>";
    }
    document.getElementById('Result').innerHTML = e;
} view();