var pfirst;
var psecond;
let turn = true;
function start(){
    if(turn){
        document.getElementById("pl2").style.boxShadow = "none";
        document.getElementById("pl1").style.boxShadow = "5px 5px 10px black";
    }
    else{
        document.getElementById("pl1").style.boxShadow = "none";
        document.getElementById("pl2").style.boxShadow = "5px 5px 10px black"
    
    }
    pfirst=document.getElementById("name1").value;
    psecond=document.getElementById("name2").value;
    if(pfirst==""){
        pfirst = "Player 1";
    }
    if(psecond==""){
        psecond = "Player 2";
    }
    document.getElementById("pl1").innerText = pfirst;
    document.getElementById("pl2").innerText = psecond;
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
}

function check(){
    if(turn){
        document.getElementById("pl1").style.boxShadow = "none";
        document.getElementById("pl2").style.boxShadow = "5px 5px 10px black";
    }
    else{
        document.getElementById("pl2").style.boxShadow = "none";
        document.getElementById("pl1").style.boxShadow = "5px 5px 10px black"

    }
    let first=document.getElementById("one").innerText;
    let second=document.getElementById("two").innerText;
    let third=document.getElementById("three").innerText;
    let fourth=document.getElementById("four").innerText;
    let fifth=document.getElementById("five").innerText;
    let sixth=document.getElementById("six").innerText;
    let seventh=document.getElementById("seven").innerText;
    let eighth=document.getElementById("eight").innerText;
    let ninth=document.getElementById("nine").innerText;

    if( (first==second && second==third && first!="") || (first==fourth && fourth==seventh && first!="") || (third==sixth && sixth==ninth && third!="") || (seventh==eighth && eighth==ninth && seventh!="") || (first==fifth && fifth==ninth && first!="") || (third==fifth && fifth==seventh && third!="") || (second==fifth && fifth==eighth && second!="") || (fourth==fifth && fifth==sixth && fourth!="")) {
        return true;
    }
    if(first!="" && second!="" && third!="" && fourth!="" && fifth!="" && sixth!="" && seventh!="" && eighth!="" && ninth!=""){
        alert("Match has Drawn !")
        document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
    }
}
let x;
function one(){
      x =  document.getElementById("one").innerText;
      if(x!=""){
        return;
      }
    if(turn==true){
        if(check()){
            alert( "Congratulations " + pfirst + " has won the match !")
            var audio = document.getElementById("A");
            audio.play();
            document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
        }
        document.getElementById("one").innerText = "*";
        if(check()){
            alert("Congratulations " + pfirst + " won the match !")
            var audio = document.getElementById("A");
            audio.play();
            document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
        }
        turn=false;
    }
    else{
        if(check()){
            alert("Congratulations " +psecond + " won the match !")
        }
        document.getElementById("one").innerText = "O";
        if(check()){
            alert("Congratulations " +psecond + " won the match !")
            document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
        }
        turn=true;
    }
}
function two(){
    x =  document.getElementById("two").innerText;
      if(x!=""){
        return;
      }
    if(turn==true){
        if(check()){
            alert("Congratulations " +pfirst + " won the match !")
        }
        document.getElementById("two").innerText = "*";
        if(check()){
            alert("Congratulations " +pfirst + " won the match !")
            document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
        }
        turn=false;
    }
    else{
        if(check()){
            alert("Congratulations " +psecond + " won the match !")
        }
        document.getElementById("two").innerText = "O";
        if(check()){
            alert("Congratulations " +psecond + " won the match !")
            document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
        }
        turn=true;
    }
}
function three(){
    x =  document.getElementById("three").innerText;
      if(x!=""){
        return;
      }
    if(turn==true){
        if(check()){
            alert("Congratulations " +pfirst + " won the match !")
        }
        document.getElementById("three").innerText = "*";
        if(check()){
            alert("Congratulations " +pfirst + " won the match !")
            document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
        }
        turn=false;
    }
    else{
        if(check()){
            alert("Congratulations " +psecond + " won the match !")
        }
        document.getElementById("three").innerText = "O";
        if(check()){
            alert("Congratulations " +psecond + " won the match !")
            document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
        }
        turn=true;
    }
}
function four(){
    x =  document.getElementById("four").innerText;
      if(x!=""){
        return;
      }
    if(turn==true){
        if(check()){
            alert("Congratulations " +pfirst + " won the match !")
        }
        document.getElementById("four").innerText = "*";
        if(check()){
            alert("Congratulations " +pfirst + " won the match !")
            document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
        }
        turn=false;
    }
    else{
        if(check()){
            alert("Congratulations " +psecond + " won the match !")
        }
        document.getElementById("four").innerText = "O";
        if(check()){
            alert("Congratulations " +psecond + " won the match !")
            document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
        }
        turn=true;
    }
}
function five(){
    x =  document.getElementById("five").innerText;
      if(x!=""){
        return;
      }
    if(turn==true){
        if(check()){
            alert("Congratulations " +pfirst + " won the match !")
        }
        document.getElementById("five").innerText = "*";
        if(check()){
            alert("Congratulations " +pfirst + " won the match !")
            document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
        }
        turn=false;
    }
    else{
        if(check()){
            alert("Congratulations " +psecond + " won the match !")
        }
        document.getElementById("five").innerText = "O";
        if(check()){
            alert("Congratulations " +psecond + " won the match !")
            document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
        }
        turn=true;
    }
}
function six(){
    x =  document.getElementById("six").innerText;
      if(x!=""){
        return;
      }
    if(turn==true){
        if(check()){
            alert("Congratulations " +pfirst + " won the match !")
        }
        document.getElementById("six").innerText = "*";
        if(check()){
            alert("Congratulations " +pfirst + " won the match !")
            document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
        }
        turn=false;
    }
    else{
        
        if(check()){
            alert("Congratulations " +psecond + " won the match !")
        }
        document.getElementById("six").innerText = "O";
        if(check()){
            alert("Congratulations " +psecond + " won the match !")
            document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
        }
        turn=true;
    }
}
function seven(){
    x =  document.getElementById("seven").innerText;
      if(x!=""){
        return;
      }
    if(turn==true){
        if(check()){
            alert("Congratulations " +pfirst + " won the match !")
        }
        document.getElementById("seven").innerText = "*";
        if(check()){
            alert("Congratulations " +pfirst + " won the match !")
            document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
        }
        turn=false;
    }
    else{
        if(check()){
            alert("Congratulations " +psecond + " won the match !")
        }
        document.getElementById("seven").innerText = "O";
        if(check()){
            alert("Congratulations " +psecond + " won the match !")
            document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
        }
        turn=true;
    }
}
function eight(){
    x =  document.getElementById("eight").innerText;
      if(x!=""){
        return;
      }
    if(turn==true){
        if(check()){
            alert("Congratulations " +pfirst + " won the match !")
        }
        document.getElementById("eight").innerText = "*";
        if(check()){
            alert("Congratulations " +pfirst + " won the match !")
            document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
        }
        turn=false;
    }
    else{
        if(check()){
            alert("Congratulations " +psecond + " won the match !")
        }
        document.getElementById("eight").innerText = "O";
        if(check()){
            alert("Congratulations " +psecond + " won the match !")
            document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
        }
        turn=true;
    }
}
function nine(){
    x =  document.getElementById("nine").innerText;
      if(x!=""){
        return;
      }
    if(turn==true){
        if(check()){
            alert("Congratulations " +pfirst + " won the match !")
        }
        document.getElementById("nine").innerText = "*";
        if(check()){
            alert("Congratulations " +pfirst + " won the match !")
            document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
        }
        turn=false;
    }
    else{
        if(check()){
            alert("Congratulations " +psecond + " won the match !")
        }
        document.getElementById("nine").innerText = "O";
        if(check()){
            alert("Congratulations " +psecond + " won the match !")
            document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
        }
        turn=true;
    }
}








