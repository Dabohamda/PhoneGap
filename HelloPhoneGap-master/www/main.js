var CONTACTS=[];
var SELECTED_CONTACT;

var VALIDATION_RULES={
    name:/[a-zA-Z0-9]{4,}/,
    email:/^[a-zA-Z0-9.]+@gn.ehealthafrica.org$/,
    phone:/[0-9]{9,13}/
};



function validate(data){
    for(var i=0;i<data.length;i++){
        if(!data[i].patern.test(data[i].val))
            return false;        
    }
    return true;
}


$(document).ready(function(){
    $("#main").bind("panelbeforeload", startApp);
    
            

});


function startApp(){
    // clears all back button history
    $.afui.clearHistory();
    $.ui.useOSThemes = true;
    

}

function register(){
    var name=$("#name").val();
    var email=$("#email").val();
    var phone=$("#phone").val();
    
     var data=[
        {'patern':VALIDATION_RULES.name, 'val':name},
        {'patern':VALIDATION_RULES.email, 'val':email},
        {'patern':VALIDATION_RULES.phone, 'val':phone}
    ];
    
    // SIGNUP SERVER CALL CODE GOES HERE
    $.post("http://keepr.evansofts.com/signup",{'name': name,'email': email, 'phone': phone},
    function(data, status){
        if(data==='ok'){
            $.afui.loadContent("#main", null, null, "fade");
            var opts={
                message:"Account Created Successfully",
                position:"tc",
                delay:2000,
                autoClose:true,
                type:"success"
            };
            $.afui.toast(opts);
        }else{
            var opts={
                message:"Some errors occured !",
                position:"tc",
                delay:2000,
                autoClose:true,
                type:"error"
            };
            $.afui.toast(opts);
        }
    }); 

}





