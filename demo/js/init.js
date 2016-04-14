$(document).ready(function(){

	var options = {
		actionMethods : {
			showDetail : function(obj, args){
				addLabel('showDetail() called' );
				console.log(obj, args);
			},
			secondFunc : function(){
				addLabel('secondFunc() called' );
			},
			toggleView : function(){
				console.log($('#btn1').is(':visible'));
				if($('#btn1').is(':visible')){
					$('.canHide').hide();
				}else{
					$('.canHide').show();
				}
				addLabel('toggleView() called' );
			},
			alertHi : function(){
				alert('HI');
				addLabel('Alert Hi called' );
			}
		}
	};

	var methods = options.actionMethods;

	ActionButton.init(options);
	// ActionButton.add(methods);
});


window.addLabel = function(label){
	if(label){
		$('.events').append(label + '<br />');	
	}
	
};