function changeBold(){
var textState =document.getElementById('message').style.fontWeight; 

if (textState != 'bold'){
 document.getElementById('message').style.fontWeight = 'bold';
} else {
    document.getElementById('message').style.fontWeight = 'normal';
}

}

function changeItalic(){
    var textstylish =document.getElementById('message').style.fontStyle;
    
    if (textstylish != 'italic'){
        document.getElementById('message').style.fontStyle = 'italic' ;
    }else{
        document.getElementById('message').style.fontStyle = 'normal';
    }
}
function changeunderline(){
    var textdeco=document.getElementById('message').style.textDecoration;
    if (textdeco != 'underline'){
        document.getElementById('message').style.textDecoration = 'underline' ;      
    }else{
        document.getElementById('message').style.textDecoration = 'none' ; 
    }
}

function changesize(event){
    document.getElementById('message').style.fontSize = event.value;
}
function changefont(event){
    document.getElementById('message').style.fontFamily = event.value;
}
