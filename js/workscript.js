var main = d3.select('body');



main.append('h1')
	.html('aprameya');

var centered = main.append('div')
	.attr('class','centercontainer')

var myimgcontainer = centered.append('div')
	.attr('class','imagecontainer')


myimgcontainer.append('img')
	.attr('src','images/500pxtestimage1.jpg')
	.attr('class','opaque');

// var myimgcontainer = main.append('div')
//	.attr('class','imagecontainer')
//	.style('float','left')

myimgcontainer.append('img')
	.attr('src','images/500pxtestimage2.jpg');

myimgcontainer.append('img')
	.attr('src','images/500pxtestimage3.jpg');

myimgcontainer.append('img')
	.attr('src','images/500pxtestimage4.jpg');




var desc = centered.append('div')
	.attr('class', 'desccontainer');

	

var title = desc.append('div')
	.attr('class','desctitle')
	.html('Music Visualization');

var attributes = desc.append('div')
	.attr('class','attributes');



attributes.append('div')
	.attr('class','attrlabel')
	.html('Project Description:');

attributes.append('div')
	.attr('class','attritem')
	.style('margin-bottom','15px')
	.html('Visualize my personal 1 terabyte collection of music in a way that tells the narrative of how it was collected and how it is used. Display file structure and map colors of folders to date created, modified, and last accesed.');

attributes.append('div')
	.attr('class','attrlabel')
	.html('Tools Used:');

var toolslist = attributes.append('ul')
	.attr('class','attrlist');
	

toolslist.append('li')
	.attr('class','attritem')
	.html('Python');

toolslist.append('li')
	.attr('class','attritem')
	.html('Processing');

toolslist.append('li')
	.attr('class','attritem')
	.html('Java');


var selectcontainer = centered.append('div')
	.attr('class','selectcontainer')

selectcontainer.append('img')
	.attr('class','selectimg')
	.attr('src','images/select_image1.png')

selectcontainer.append('img')
	.attr('class','selectimg')
	.attr('src','images/select_image2.png')

selectcontainer.append('br')

selectcontainer.append('img')
	.attr('class','selectimg')
	.attr('src','images/select_image3.png')

selectcontainer.append('img')
	.attr('class','selectimg')
	.attr('src','images/select_image4.png')

d3.selectAll('.selectimg').on('click',function (d,i){

	console.log('yo');
	d3.selectAll('.imagecontainer img').classed({
		'opaque':false
	});
	d3.selectAll('.imagecontainer img').filter(function (d,idx){
		return i==idx;
	}).classed({
		'opaque':true
	})

});

// $(document).ready(function(){
//	$('selectimg').on('click',function(){
//		$('imagecontainer img').removeClass('opaque');
//		var newImage = $(this).index();
//		console.log(newImage);
//		$('imagecontainer img').eq(newImage).addClass('opaque');

//	});
// });
// $(document).ready(function(){
//	$('.imagecontainer').slick({
  		
//		infinite:true,
//		arrows: false,
//		fade: true	
//	});
  	
// });


