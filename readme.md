# ActionButtonJS

#### Overview
ActionButtonJS is a quick and easy way to apply click actions to html elements. Add the class of "action-btn" to your element with an associated "data-action" whose value represents a function to call

The methods you call are passed in on "init" via the "actionMethods" object

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
