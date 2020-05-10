 let input ="";


function ShowValue(btn){
input = input + btn.value;

document.getElementById('output').innerHTML = input;
};

function equals(){

document.getElementById('output').innerHTML = 
eval(input);

}

function reset(btn){

document.getElementById('output').innerHTML = "0"
input="" ;

}
function rem1(){

	input = input.replace(input.slice(-1),"");
	document.getElementById('output').innerHTML = input;
}