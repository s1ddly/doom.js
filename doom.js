//Js file for Doom
/*
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
| Doom Definitions
| The following lines of code are ported from the doomdef.h and doomdef.c
| These lines define the global data structures used across other sections of the game
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
*/
var VERSION = 110;

//Below are the 2 prototype classes for enums in javascript 
//the enum_tProto class lays out the basic functionality of the class, getter and setter for the value and declares the list of potential values
//the enum_t class acts as a middle man between enum_tProto and every child class of enum_t, it simplifies the interface and lets future class definitions get away with 3 lines
class enum_tProto {
	PinputList = [ ];
	get val() {
		return this._val;
	}
	set val(inputArgument){
		if(this.PinputList.indexOf(inputArgument) != -1){
			this._val = inputArgument;
		} else {
			throw "GameMode_t type error";
		}
	}
}

class enum_t extends enum_tProto {
	constructor(inputArgument, inputList){
		super();
		this.PinputList = inputList
		this.val = inputArgument;
	}
}

//Below declares all the classes for the enums in doomdef
class GameMode_t extends enum_t {
	constructor(inputArgument){
		super(inputArgument, ['shareware','registered','commercial','retail','indetermined']);
	}
}

class GameMission_t extends enum_t {
	constructor(inputArgument){
		super(inputArgument, ['doom','doom2','pack_tnt','pack_plut','none']);
	}
}

class Language_t extends enum_t {
	constructor(inputArgument){
		super(inputArgument, ['english','french','german','unknown']);
	}
}

class gamestate_t extends enum_t {
	constructor(inputArgument){
		super(inputArgument, ['GS_LEVEL','GS_INTERMISSION','GS_FINALE','GS_DEMOSCREEN']);
	}
}

class skill_t extends enum_t {
	constructor(inputArgument){
		super(inputArgument, ['sk_baby','sk_easy','sk_medium','sk_hard','sk_nightmare']);
	}
}

class skill_t extends enum_t {
	constructor(inputArgument){
		super(inputArgument, ['sk_baby','sk_easy','sk_medium','sk_hard','sk_nightmare']);
	}
}

var gamemode = new GameMode_t('shareware');