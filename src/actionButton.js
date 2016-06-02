ActionButton = (function(){
	var options = {
		mainContainer : 'body',
		actionClass : '.action-btn',
		actionMethods : null,
		actionEvents : ['click']
	},
	settings = {
		isSupported : false
	},
	app = {
		pub : {
			init : function(opts){
				if ( 'querySelector' in document && 'addEventListener' in window ) {
					settings.isSupported = true;
					options = app.priv.extend(true, options, opts);
					app.priv.findUserEvents();
					for(var i in options.actionEvents){
						var items = document.querySelectorAll(options.actionClass);
						var totalItems = items.length;
						for(var j = 0; j < totalItems; j++){
							if(typeof items[j].dataset.event !== 'undefined'){
								var dataVal = items[j].dataset.event;
								if(dataVal == options.actionEvents[i]){
									items[j].addEventListener(options.actionEvents[i], app.priv.doAction, false);
								}
							}
						}	
					}
				}else{
					alert('ActionButton not supported in this browser.');
					console.error('ActionButton not supported.');
				}
			},
			add : function(obj){
				app.priv.testSupport();
				if(obj){
					var actionMethods = (obj.actionMethods) ? obj : {'actionMethods':obj};
					options = app.priv.extend(true, options, actionMethods);
				}else{
					console.error('ActionButton.add() ERROR - Attempted to add methods but none supplied');
				}
			},
			isSupported : function(){ return settings.isSupported; }
		},
		priv : {
			testSupport : function(){
				if(settings.isSupported === false){
					console.error('ActionButton not supported.');
					return false;
				}
			},
			doAction : function(event){
				var action = this.dataset.action,
				ev = this.dataset.event;
				var evList = ev.split(',');
				if(options.actionEvents.indexOf(event.type.toLowerCase()) > -1){
					if(typeof options.actionMethods[action] !== undefined && typeof options.actionMethods[action] !== null){
						options.actionMethods[action].call(this, this);
					}else{
						console.error('app.priv.doAction() ERROR - Missing method:' + action);
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
				var items = document.querySelectorAll(options.actionClass);
				var totalItems = items.length;
				for(var i = 0; i < totalItems; i++){
					var ev = items[i].dataset.event;
					var evList = ev.split(',');
					if(evList){
						for(var j in evList){
							if(options.actionEvents.indexOf(evList[j]) === -1){
								options.actionEvents.push(evList[j]);	
							}
						}
					}
				}
			}
		}
	};

	return app.pub;
})();