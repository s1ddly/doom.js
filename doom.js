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

class struct_proto {
	short_gen(inval){
		if(typeof inval == 'number' && inval <= 32767 && inval >= -32767){
			return inval; 
		} else {
			throw "struct type error";
		}
	}
	
	array_gen(inval, inlength, intype){
		if (inval.length == inlength){
			inval.forEach(element => {if(typeof element != intype){throw "struct type error"}});
			return inval;
		}
		throw "struct type error"
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


//Below are the classes for each "struct" in the doomdata.h file
class mapvertex_t extends struct_proto{
	//has 2 properties, x and y, both are supposed to be C `shorts`, meaning numbers between -32767 and 32767.
	constructor(xin, yin) {
		super()
		this.x = xin;
		this.y = yin;
	}
	
	set x(xin) {
		this._x = this.short_gen(xin);
	}
	
	set y(yin) {
		this._y = this.short_gen(yin);
	}
	
	get x() {
		return this._x;
	}
	
	get y() {
		return this._y;
	}
}

class mapsidedef_t extends struct_proto{
	//Has 6 properties, 2 shorts for texture and row offset, 3 char arrays of length 8 representing top, middle and bottom textures, and a short representing the `sector`
	constructor(textureoffsetin, rowoffsetin, toptexturein, bottomtexturein, midtexturein, sectorin){
		super();
		this.textureoffset = textureoffsetin;
		this.rowoffset = rowoffsetin;
		this.toptexture = toptexturein;
		this.bottomtexture = bottomtexturein;
		this.midtexture = midtexturein;
		this.sector = sectorin;
	}
	
	set textureoffset(textureoffsetin) {
		this._textureoffset = this.short_gen(textureoffsetin);
	}
	
	set rowoffset(rowoffsetin) {
		this._rowoffset = this.short_gen(rowoffsetin);
	}
	
	set toptexture(toptexturein){
		this._toptexture = this.array_gen(toptexturein, 8, 'string');
	}
	
	set bottomtexture(bottomtexturein){
		this._bottomtexture = this.array_gen(bottomtexturein, 8, 'string');
	}
	
	set midtexture(midtexturein){
		this._midtexture = this.array_gen(midtexturein, 8, 'string');
	}
	
	set sector(sectorin) {
		this._sector = this.short_gen(sectorin)
	}
	
	get textureoffset(){
		return this._textureoffset;
	}
	
	get rowoffset(){
		return this._rowoffset;
	}
	
	get bottomtexture(){
		return this._bottomtexture;
	}
	
	get midtexture(){
		return this._midtexture;
	}
	
	get toptexture(){
		return this._toptexture;
	}
	
	get sector(){
		return this._sector;
	}
}

class maplinedef_t extends struct_proto{
	constructor(v1in, v2in, flagsin, specialin, tagin, sidenumin){
		super();
		this.v1 = v1in;
		this.v2 = v2in;
		this.flags = flagsin;
		this.special = specialin;
		this.tag = tagin;
		this.sidenum = sidenumin;
	}
	
	set v1(v1in){
		this._v1 = this.short_gen(v1in);
	}
	
	set v2(v2in){
		this._v2 = this.short_gen(v2in);
	}
	
	set flags(flagsin){
		this._flags = this.short_gen(flagsin);
	}
	
	set special(specialin){
		this._special = this.short_gen(specialin);
	}
	
	set tag(tagin){
		this._tag = this.short_gen(tagin);
	}
	
	set sidenum(sidenumin){
		this._sidenum = this.array_gen(sidenumin, 2, 'number');
	}
	
	get v1(){
		return this._v1;
	}
	
	get v2(){
		return this._v2;
	}
	
	get flags(){
		return this._flags;
	}
	
	get special(){
		return this._special;
	}
	
	get tag(){
		return this._tag;
	}
	
	get sidenum(){
		return this._sidenum;
	}
}

class mapsector_t extends struct_proto {
	constructor(floorheightin, ceilingheightin, floorpicin, ceilingpicin, lightlevelin, specialin, tagin){
		super()
		this.floorheight = floorheightin;
		this.ceilingheight = ceilingheightin;
		this.floorpic = floorpicin;
		this.ceilingpic = ceilingpicin;
		this.lightlevel = lightlevelin;
		this.special = specialin;
		this.tag = tagin;
	}
	
	set floorheight(floorheightin){
		this._floorheight = this.short_gen(floorheightin);
	}
	
	set ceilingheight(ceilingheightin){
		this._ceilingheight = this.short_gen(ceilingheightin);
	}
	
	set floorpic(floorpicin){
		this._floorpic = this.array_gen(floorpicin, 8, 'string');
	}
	
	set ceilingpic(ceilingpicin){
		this._ceilingpic = this.array_gen(ceilingpicin, 8, 'string');
	}
	
	set lightlevel(lightlevelin){
		this._lightlevel = this.short_gen(lightlevelin);
	}
	
	set special(specialin){
		this._special = this.short_gen(specialin);
	}
	
	set tag(tagin){
		this._tag = this.short_gen(tagin);
	}
	
	get floorheight(){
		return this._floorheight;
	}

	get ceilingheight(){
		return this._ceilingheight;
	}

	get floorpic(){
		return this._floorpic;
	}

	get ceilingpic(){
		return this._ceilingpic;
	}

	get lightlevel(){
		return this._lightlevel;
	}

	get special(){
		return this._special;
	}

	get tag(){
		return this._tag;
	}
}

class mapsector_t extends struct_proto {
	constructor(numsegsin, firstsegin){
		this.numsegs = numsegsin;
		this.firstseg = firstsegin;
	}
	
	set numsegs(numsegsin){
		this._numsegs = this.short_gen(numsegsin);
	}
	
	set firstseg(firstsegin){
		this._firstseg = this.short_gen(firstsegin);
	}
	
	get numsegs(){
		return this._numsegs;
	}
	
	get firstseg(){
		return this._firstseg;
	}
}

class mapseg_t extends struct_proto{
	constructor(v1in, v2in, anglein, linedefin, sidein, offsetin){
		super();
		this.v1 = v1in;
		this.v2 = v2in;
		this.angle = anglein;
		this.linedef = linedefin;
		this.side = sidein;
		this.offset = offsetin;
	}
	
	set v1(v1in){
		this._v1 = this.short_gen(v1in);
	}
	
	set v2(v2in){
		this._v2 = this.short_gen(v2in);
	}
	
	set angle(anglein){
		this._angle = this.short_gen(anglein);
	}
	
	set linedef(linedefin){
		this._linedef = this.short_gen(linedefin);
	}
	
	set side(sidein){
		this._side = this.short_gen(sidein);
	}
	
	set offset(offsetin){
		this._offset = this.short_gen(offsetin);
	}
	
	get v1(){
		return this._v1;
	}
	
	get v2(){
		return this._v2;
	}
	
	get angle(){
		return this._angle;
	}
	
	get linedef(){
		return this._linedef;
	}
	
	get side(){
		return this._side;
	}
	
	get offset(){
		return this._offset;
	}
}
