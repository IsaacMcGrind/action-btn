# action-btn

#### Overview
action-btn is a quick and easy way to apply mouse actions to html elements. 
Add the class of "action-btn" to your element with an associated "data-action" whose value represents a function to call

The methods you call are passed in on "init" via the "actionMethods" object or added via the ActionButton.add() method

### Supported Browsers: 
* IE9+
* Firefox 3.5+
* Opera 9+
* Safari 4+
* Chrome 1+
* iPhone and iPad iOS1+
* Android phone and tablets 2.1+
* Blackberry OS6+
* Windows 7.5+
* Mobile Firefox
* Opera Mobile



### Basic Example:

##### HTML:

```html
    <a class="action-btn" data-action="showDetail" data-event="click" data-prodId="1">Action Button 1</a>
```
##### Javascript

```js
    $(document).ready(function(){
		ActionButton.init({
			actionMethods : {
				showDetail : function(obj, args){
					alert('show details');
				},
				secondFunc : function(){
					alert('secondFunc');
				}
			}
		});
	});
```

##### Adding your own action methods

```js
	var methods = {
		showDetail : function(obj, args){
			addLabel('showDetail() called' );
			console.log(obj, args);
		},
			secondFunc : function(){
			addLabel('secondFunc() called' );
		}
	}

	ActionButton.add(methods);
```

### Methods
Method | Arguments | Return
------ | ---- | -----------
init | obj : An Object of options to initialize ActionButton | none
add | object : An Object of functions that will be available via AvtionButton | none
isSupported | none : returns a true/false if supported by browser | Boolean


### data-attributes
Data attributes are used to determine what method to call and on what event. The following are required.

Attribute | Type | Default | Description
--------- | ---- | ------- | -----------
action | String |  | a method that was supplied as an actionMethod
event | String | click | a valid html event


### Options 
Option | Type | Default | Description
------ | ---- | ------- | -----------
mainContainer | String | body | Container we attach our listener
actionClass | |String | .action-btn | Class that accepts action calls
actionMethods | Object | null | An object representing the functions available to buttons
actionEvents | Array | ['click'] | An array of valid html events

