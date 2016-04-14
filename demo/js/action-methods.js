ActionButton.addMethods({
	showDetail : function(obj, args){
		addLabel('showDetail() called' );
	},
	secondFunc : function(){
		addLabel('secondFunc() called' );
	}
});


window.addLabel = function(label){
	if(label){
		$('.events').text(label + '/n');	
	}
	
};