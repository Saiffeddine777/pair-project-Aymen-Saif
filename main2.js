var data=[
    {
        userName:'admin',
        password:'admin'
    }
]
$("#sign").click(function(){
    if(data[0].userName===$("#username").val() && data[0].password===$("#password").val() ){
        window.location.replace("plat.html")
    }
    else{
        alert("Login or password are wrong !!!!")
    }
})
$("#singup").click(function(){
    window.location.replace("sign-up-page.html")
})
$("#create").click(function(){
    window.location.replace("plat.html")
})