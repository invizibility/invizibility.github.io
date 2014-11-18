var itemwidth = 247;
var itemheight = 185;
var itempadding = 8;


calcshift();	

d3.select(window).on('resize', calcshift);

function calcshift(){
	var column_count = Math.max(Math.floor(d3.select(window).property('innerWidth')/(itemwidth + itempadding)),1);
	var shiftcalc = ((d3.select(window).property('innerWidth')-(column_count*itemwidth)-((column_count+1)*itempadding))/2);
	d3.select('.topbar').style('left',shiftcalc+itempadding+"px");
	d3.select('.nametitle').style('left',shiftcalc+itempadding+"px");
	d3.select('.contentwrapper').style('left',shiftcalc+itempadding+"px");
}