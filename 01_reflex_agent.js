// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state){
   	if (state=="DIRTY") return "CLEAN";
   	else if (location=="A") return "RIGHT";
   	else if (location=="B") return "LEFT";
}

function test(states){
	var location = states[0];		
	var state = states[0] == "A" ? states[1] : states[2];
	var action_result = reflex_agent(location, state);
	document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat(" | estado: ").concat(globalState);
	if (action_result == "CLEAN"){
		if (location == "A") states[1] = "CLEAN";
		else if (location == "B") states[2] = "CLEAN";
	}
	else if (action_result == "RIGHT") states[0] = "B";
	else if (action_result == "LEFT") states[0] = "A";
	globalState+=1;
	if(globalState<=4){
		setTimeout(function(){ test(states); }, 2000);
	}else{
		document.getElementById("log").innerHTML+="<br> Ensuciando y posicionando aspiradora en B";
		test2(states2);		
	}		
	
}

function test2(states){
	var location = states[0];		
	var state = states[0] == "A" ? states[1] : states[2];
	var action_result = reflex_agent(location, state);
	document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat(" | estado: ").concat(globalState);
	if (action_result == "CLEAN"){
		if (location == "A") states[1] = "CLEAN";
		else if (location == "B") states[2] = "CLEAN";
	}
	else if (action_result == "RIGHT") states[0] = "B";
	else if (action_result == "LEFT") states[0] = "A";	
	globalState+=1;
	if(globalState<=8){
		setTimeout(function(){ test2(states); }, 2000);
	}	
	
}

var states = ["A","DIRTY","DIRTY"];
var states2 = ["B","DIRTY","DIRTY"];
var globalState =1;
document.getElementById("log").innerHTML+="<br> Ensuciando y posicionando aspiradora en A";
test(states);
