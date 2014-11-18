d3.selectAll('.selectimg').on('click',function (d,i){

	//console.log('yo');
	d3.selectAll('.imagecontainer img').classed({
		'opaque':false
	});
	d3.selectAll('.imagecontainer img').filter(function (d,idx){
		return i==idx;
	}).classed({
		'opaque':true
	})

});