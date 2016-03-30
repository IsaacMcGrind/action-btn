ActionButton = (function(){
	var me = this;
	var options = {
		mainContainer : 'body',
		actionClass : '.action-btn',
		actionMethods : null,
		actionEvents : ['click']
	},
	settings = {

	},
	app = {
		pub : {
			init : function(opts){
				options = app.priv.extend(true, options, opts);
				app.priv.findUserEvents();
				for(var i in options.actionEvents){
					$(options.mainContainer).on(options.actionEvents[i], options.actionClass, app.priv.doAction);	
				}
			}
		},
		priv : {
			doAction : function(event){
				var action = $(this).data('action'),
				ev = $(this).data('event');
				if(event.type.toLowerCase() === ev.toLowerCase()){
					if(typeof options.actionMethods[action] !== 'undefined'){
						options.actionMethods[action].call(this, $(this));
					}
				}
			},
			extend : function () {
				// Variables
				var extended = {};
				var deep = false;
				var i = 0;
				var length = arguments.length;

				// Check if a deep merge
				if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
					deep = arguments[0];
					i++;
				}

				// Merge the object into the extended object
				var merge = function (obj) {
					for ( var prop in obj ) {
						if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
				            // If deep merge and property is an object, merge properties
							if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
								extended[prop] = app.priv.extend( true, extended[prop], obj[prop] );
							} else {
								extended[prop] = obj[prop];
							}
						}
					}
				};

				// Loop through each object and conduct a merge
				for ( ; i < length; i++ ) {
				    var obj = arguments[i];
				    merge(obj);
				}

				return extended;

			},
			findUserEvents : function(){
				$(options.actionClass).each(function(){
					var ev = $(this).data('event');
					if(options.actionEvents.indexOf(ev) === -1){
						console.log('add evnt',ev);
						options.actionEvents.push(ev);	
					}
					
				});
			}
		}
	};

	return app.pub;
})();