# action-btn

#### Overview
action-btn is a quick and easy way to apply mouse actions to html elements. 
Add the class of "action-btn" to your element with an associated "data-action" whose value represents a function to call

The methods you call are passed in on "init" via the "actionMethods" object or added via the ActionButton.add() method

### Requires: 
* [Jquery](http://jquery.com)

#### Basic Example:

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

##### Adding your own methods

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

### Options 
Option | Type | Default | Description
------ | ---- | ------- | -----------
mainContainer | String | body | Container we attach our listener
actionClass | |String | .action-btn | Class that accepts action calls
actionMethods | Object | null | An object representing the functions available to buttons
actionEvents | Array | ['click'] | An array of valid html events