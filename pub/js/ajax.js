const ajaxPost=(path, callback, sendArgs)=>{
    var xhr = new XMLHttpRequest();
    xhr.open('POST', path, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.onloadend=function(res){
        var res=JSON.parse(res.currentTarget.response);
        if(callback!=undefined){
            callback(res);
        }
    };
    xhr.send(JSON.stringify(sendArgs));
}

const ajaxGet=(path, callback)=>{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            var str=xmlhttp.responseText;
            var json=JSON.parse(str);
            if(callback){
                callback(json);
            }
        }
    };
    xmlhttp.open("GET",path,true);
    xmlhttp.send();
}