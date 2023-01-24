var results =  []

var i=0
$("#btnadd").click(function(){
    $("#table").append("<tr id='jj"+i+"'><th id='nn"+i+"'>"+$('#newstudent').val()+"</th><th><input type='number' id='p"+i+"'></th><th><input type='number' id='a"+i+"'></th><th><input type='text' id='w"+i+"'</th><th><input type='text' id='c"+i+"'</th><th><input type='text' id='pr"+i+"'</th><th><input type='text' id='as"+i+"'</th><th><input type='text' id='av"+i+"'</th><th><input type='text' id='ev"+i+"'></th><th><input type='button' id='del"+i+"' onclick='del("+i+")' value='remove'></th></tr>")
    $('#newstudent').val("") 
i++
})





$("#bt").click(function(e){
    e.preventDefault()
    for(var k=0;k<i;k++){
    var averg=((($("#w"+k).val()*1)*1.5)+($("#c"+k).val()*1)+(($("#pr"+k).val()*1)*4)+(($("#as"+k).val()*1)*3))/9.5
    
    var obj = {}
    obj.name = $("#nn"+k).text()
    obj.average = averg
    results.push(obj)
    $("#av"+k).val(averg.toFixed(2))
    if(averg>10){
        $("#ev"+k).val("Pass")
    }
    
    else {
        $("#ev"+k).val("Fail") 
    }
    }
  
})



$("#best").click(function(results){
    var temp
    var max=results[0].average
    for(var j=0;j<=i;j++){
        
    if(results[j].average>=max){
        max=results[j].average 
        temp = result[j].name

    }

}

alert (temp+" is the best with an average of"+max )
})

function del (i){
    $("#jj"+i).remove()
    
}

console.log(results)