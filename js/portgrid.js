var width = 1000,
	height = 700;
var xoffset = 8;
var yoffset = 8;
var numColumns = 5;
var itemwidth = 247;
var itemheight = 185;
var itempadding = 8;

var filter = "all";

// var grid = d3.layout.grid()
//	.cols(3)
//	.padding(10)
//	.size(700,200);

var gridcontainer = d3.select("body")
	.append("div")
	.attr('class','gridcontainer');
	// .attr(
	//	{
	//		width: width,
	//		height: height
	//	}
	// )
	//.append('g');

var butz = d3.selectAll('.filters li')


// butz.on('mouseover', function (d,i){

//	butz.filter(function (d, idx){
//			return i==idx;
//		})
//		.transition()
//		.duration(300)
//		.style('background','#e6e6e6')
// })

// butz.on('mouseout', function (d,i){

//	butz.filter(function (d, idx){
//		return i==idx;
//	})
//	.transition()
//	.duration(300)
//	.style('background','white')
// })

butz.on('click', function (d,i){

	var selectbutton = butz.filter(function (d,idx){

		return i==idx;
	})

	applyFilters(selectbutton.html());

	selectbutton.transition()
	.duration(300)
	.style('background','black')
	.style('color','white')
	.attr('class', 'active')

	butz.filter(function (d,idx){
		return i!=idx;
	})
	.transition()
	.duration(300)
	.style('background','white')
	.style('color','black')
	.attr('class','inactive')


})

// var filtall =d3.select("[data-filter=all]")
//	.append('svg').append('g');

// filtall.append('rect')
//	.attr('x', 10)
//	.attr('y', 10)
//	.attr('width', 75)
//	.attr('height', 40);

// filtall.append('text')
//	.attr('transform','translate(25,100)')
//	// .class('filter-btn')
//	.text('all')
//	.attr('class','filtertext');

// var filtphys = d3.select("[data-filter=physical]")
//	.append('svg').append('g')

// filtphys.append('rect')
//	.attr('x', 95)
//	.attr('y', 10)
//	.attr('width', 75)
//	.attr('height', 40);

// filtphys.append('text')
//	.attr('transform','translate(110,100)')
//	// .class('filter-btn')
//	.text('print')
//	.attr('class','filtertext');

// var filtdig = d3.select("[data-filter=digital]")
//	.append('svg').append('g');

// filtdig.append('rect')
//	.attr('x', 180)
//	.attr('y', 10)
//	.attr('width', 75)
//	.attr('height', 40);

// filtdig.append('text')
//	.attr('transform', 'translate(195,100)')
//	.text('interactive')
//	.attr('class','filtertext');


d3.csv('data/portfolio.csv', function(d){

	var node = gridcontainer.selectAll('.griditem')
		.data(d)
		.enter()
		.append('div')		
		
		.classed({
			'griditem':true,
			'active':true
		})

		.attr('data-xpos', function (d,i){
			x = i % numColumns;
			d.xPos = x;
			return x;
		})
		.attr('data-ypos', function (d,i){
			y = Math.floor(i / numColumns);
			d.yPos = y;
			return y;
		})
		.style('left', function (d,i){

			

			return((d.xPos*itemwidth)+(d.xPos*itempadding)) + xoffset + "px";
			
			
		})
		.style('top', function (d,i){

			return((d.yPos*itemheight)+(d.yPos*itempadding)) + yoffset + "px";
			
			
		})
	var link = node.append('a')
		.attr('href',function (d,i){
			return "work/"+d.projectname+".html"
		})
	link.append('img')
		.attr('src', function(d){
			return 'images/'+d.projectname+'.png';
		})
		.on('error', function(d){
			d3.select(this).attr('src','images/testgrid1.jpg');
		})

	var titlebox = node.append('div')
		.attr('class', 'titlebox')

		// 

	var title = titlebox.append('div')
		.attr('class','title')
		.attr('fill','white')
		
		title.append('div')
		// .html(function (d,i){
		//	return d.projectname
		// })
		.html(function (d,i){
			return d.projecttitle
		})
		.style('padding-left','5px')
		.style('padding-top','3px');

	// title.append('text')
	//	.text(function (d,i){
	//		return d.projectname
	//	})
	//	.attr('class', 'titletext')

	
		//.style('height','0%')	



	node.on('mouseover',function (d,i){

		//console.log(d3.select(this).select('titlebox'));

		//d3.select(this).select('titlebox').select('title')
	
		title.filter(function (d, idx){
			return idx == i 
		})
		.transition()
		.duration(300)
		.style('height','24px');
	})

	node.on('mouseout',function (d,i){

		title.filter(function (d, idx){
			return idx == i
		})
		.transition()
		.duration(300)
		.style('height','0px')
	})
	
	d3.select(window).on('resize', renderGrid);
});
renderGrid();

var filterButtons = d3.selectAll('.filter-btn')
	.on('click',function(d){
		d3.event.preventDefault();
		filter = this.dataset.filter;
		update();
	});



function update() {


}

function applyFilters(selector) {



	var gridselect = d3.selectAll('.griditem')

	//console.log(gridselect)

	if(selector=="all"){
		gridselect.transition()
		.duration(300)
		.style('opacity','1')

	}

	else{


		gridselect.filter(function (d,i){
			//console.log(d);
			
			
			return d.projecttype!=selector;
		})
		.transition()
		.duration(300)
		.style('opacity','0.5')

		gridselect.filter(function (d,i){
			//console.log(d);
			
			
			return d.projecttype==selector;
		})
		.transition()
		.duration(300)
		.style('opacity','1')

	}
}

function renderGrid() {

	var nodes = d3.select('.gridcontainer');
	var gridwidth = nodes.property("clientWidth");
	//console.log(gridwidth);
	var column_count = Math.min(Math.max(Math.floor(gridwidth/(itemwidth + itempadding)),1),5);
	var left = column_count == 1 ? itempadding : (d3.select(window).property('innerWidth') % (itemwidth + itempadding)) / 2;
	
	nodes.selectAll('.griditem')
	.attr('data-xpos',function (d,i){
		x = i % column_count;
		d.xPos = x;
		return x;
	})
	.attr('data-ypos', function (d,i){
		y = Math.floor(i / column_count);
		d.yPos = y;
		return y;
	})
	.style('left', function (d,i){

		

		return((d.xPos*itemwidth)+(d.xPos*itempadding)) + xoffset + "px";
		
		
	})
	.style('top', function (d,i){

		return((d.yPos*itemheight)+(d.yPos*itempadding)) + yoffset + "px";
		
		
	})
	console.log(d3.select(window).property('innerWidth') + "," + gridwidth);

	var shiftcalc = ((d3.select(window).property('innerWidth')-(column_count*itemwidth)-((column_count+1)*itempadding))/2);	
	nodes.style('left',function () {
		return shiftcalc + "px";  
	});
	d3.select('.filterwrapper').style('left',shiftcalc+xoffset+"px")
	.style('width',gridwidth);
	d3.select('.infowrapper').style('right',shiftcalc+xoffset+"px");
	d3.select('.nametitle').style('left',shiftcalc+xoffset+"px");


}