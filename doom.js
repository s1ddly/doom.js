//Js file for Doom
/*
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
| Shared Classes																				|
| The following lines of code are classes made in js to abstract/represent c data types			|
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
*/
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
			throw "enum type error";
		}
	}
	get num(){
		return this.PinputList.length;
	}
}

class enum_t extends enum_tProto {
	constructor(inputArgument, inputList){
		super();
		this.PinputList = inputList;
		this.val = inputArgument;
	}
}

/*
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
| Doom Definitions																				|
| The following lines of code are ported from the doomdef.h and doomdef.c						|
| These lines define the global data structures used across other sections of the game			|
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
*/
//Below declares all static variables that are declared in the doomdef file
var VERSION = 110;
var TICRATE = 35;
var INVULNTICS = (30*TICRATE);
var INVISTICS = (60*TICRATE);
var INFRATICS = (120*TICRATE);
var IRONTICS = (60*TICRATE);
var BASE_WIDTH = 320;
var SCREEN_MUL = 1;
var INV_ASPECT_RATIO = 0.625;
var SCREENWIDTH = 320;
var SCREENHEIGHT = 200;
var MAXPLAYERS = 4;
var MTF_EASY = 1;
var MTF_NORMAL = 2;
var MTF_HARD = 4;
var MTF_AMBUSH = 8;


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

class card_t extends enum_t {
	constructor(inputArgument){
		super(inputArgument, ['it_bluecard','it_yellowcard','it_redcard','it_blueskull','it_yellowskull','it_redskull']);
	}
}

class weapontype_t extends enum_t {
	constructor(inputArgument){
		super(inputArgument, ['wp_fist','wp_pistol','wp_shotgun','wp_chaingun','wp_missile','wp_plasma','wp_bfg','wp_chainsaw','wp_supershotgun','wp_nochange']);
	}
}

class ammotype_t extends enum_t {
	constructor(inputArgument){
		super(inputArgument, ['am_clip','am_shell','am_cell','am_misl','am_noammo']);
	}
}

/*
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
| Doom Data																						|
| The following lines of code are ported from the doomdata.h									|
| These lines define the global data structures used across other sections of the game			|
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
*/
//Doomdata static variables
var ML_LABEL = 0;
var ML_THINGS = 1;
var ML_LINEDEFS = 2;
var ML_SIDEDEFS = 3;
var ML_VERTEXES = 4;
var ML_SEGS = 5;
var ML_SSECTORS = 6;
var ML_NODES = 7;
var ML_SECTORS = 8;
var ML_REJECT = 9;
var ML_BLOCKMAP = 10;
var ML_BLOCKING = 1;
var ML_BLOCKMONSTERS = 2;
var ML_TWOSIDED = 4;
var ML_DONTPEGTOP = 8;
var ML_DONTPEGBOTTOM = 16;
var ML_SECRET = 32;
var ML_SOUNDBLOCK = 64;
var ML_DONTDRAW = 128;
var ML_MAPPED = 256;
var NF_SUBSECTOR = 32768;