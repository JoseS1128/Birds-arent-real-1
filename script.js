$("#birb").click(function() {
  $("#food").text("Double Click the text to feed the birb");
});

$("#food").dblclick(function() {
  $(".reward").show();
  $(".happyburb").show();
  $("#birb").hide();
  $("#food").text("thank you for the food, now take this key and map");
});

$(".reward").mouseover(function() {
    $(".happyburb").fadeOut();
    $("#food").text("now lets follow the map(click on it)");
});

$(".reward").click(function() {
    $("#forest").show();
    $(".reward").hide();
    $("#food").text("dblclick on the green chest");
});

$("#forest").dblclick(function() {
    $("#open").show();
    $("#chest").show();
    $("#forest").hide();
    $("#food").text("now open the chest");
});    
$("#open").click(function() {
    $(".reward").hide();
    $("#chest").hide();
    $("#inside").show();
    $("#food").text("CONGRATS YOU GOT THE REWARD");
    $("#open").hide(); 
});
    
$("#inside").mouseleave(function() {
     $("#inside").delay("1000").fadeOut();
     $("#food").delay("100000000").text("What is that noise.....");
     $("#zombie").delay("15000").fadeIn();
     $("#zombie").delay("1400").fadeOut();
});