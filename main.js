

var i=0
$("#btnadd").click(function(){
    
    $("#table").append("<tr><th id='nn"+i+"'>"+$('#newstudent').val()+"</th><th><input type='number' id='p"+i+"'></th><th><input type='number' id='a"+i+"'></th><th><input type='text' id='w"+i+"'</th><th><input type='text' id='c"+i+"'</th><th><input type='text' id='pr"+i+"'</th><th><input type='text' id='as"+i+"'</th><th><input type='text' id='av"+i+"'</th><th><input type='text' id='ev"+i+"'></th><th><button type='button' id='del'>Remove</button></th></tr>")
    $('#newstudent').val("") 
i++
})





$("#bt").click(function(e){
    e.preventDefault()
    for(var k=0;k<i;k++){
    var averg=((($("#w"+k).val()*1)*1.5)+($("#c"+k).val()*1)+(($("#pr"+k).val()*1)*4)+(($("#as"+k).val()*1)*3))/9.5
    console.log(averg)
    $("#av"+k).val(averg.toFixed(2))
    if(averg>10){
        $("#ev"+k).val("Pass")
    }
    
    else {
        $("#ev"+k).val("Fail") 
    }
    }
  
})





/*$("#del").click(function() {
    
    $("#table").deleteRow(1);
    }
  )*/

/*$("#best").click(function(){
    var max=$("#av0").val()
    for(var k=0;k<i;k++){
    if($("#av"+k).val()>$("#av0").val()){
        max=$("#av"+k).val()
    }
}
    
})*/

