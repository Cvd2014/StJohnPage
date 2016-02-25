function login_validate(){
    var file = 'MembersData.json'
    var personal=[];
    var duty=[];
    var training=[];
    var account=[];
    $.ajax({
        url: file,
        dataType:"json",
        success: function(Data) {
        $.each(Data, function(key, oPerson){
            //console.log(key);
            name=oPerson.Name;
            email=oPerson.Email;
            pin=oPerson.St+%20+John+%20+PIN;
            phone=oPerson.Phone
            personal[name]=[pin, email, phone]
            console.log(personal)
           
            });  
            //console.log(loginData)  
        }

    });
}      