# HTML Class Modifier

A script that enables developers to dynamically modify the class attribute of target elements by adding specific data attributes to the trigger element. These modifications can include:

- Toggling classes:
    - Toggle a single class on a single target
    - Toggle multiple classes on a single target
    - Toggle multiple classes on multiple targets
- Adding classes:
    - Add a single class to a single target
    - Add multiple classes to a single target
    - Add multiple classes to multiple targets
- Removing classes:
    - Remove a single class from a single target
    - Remove multiple classes from a single target
    - Remove multiple classes from multiple targets


# Usage

## Toggle

### Toggle a single class from a single target
Toggle the class "show" from "#element"

```
<div id="element" class="show">Element</div>
<button data-toggle-from="#element" data-toggle-class="show" type="button">Toggle Element</button>
```

### Toggle multiple classes from a single target
Toggle the class "show" and "hide" from "#element"

```
<div id="element" class="show">Element</div>
<button data-toggle-from="#element" data-toggle-class="show, hide" type="button">Toggle class from #element</button>
```

### Toggle multiple classes from multiple targets
Group the targets and classes by using the | symbol. Every target element must have a set of corresponding classes

Toggle the class "show", "hide" from "#element-1" and "active", "inactive" from "#element-2".

```
<div id="element-1" class="show">Element 1</div>
<div id="element-2" class="show">Element 2</div>
<button data-toggle-from="#element-1 | #element-2" data-toggle-class="show, hide | active, inactive" type="button">Toggle class from #element-1 and #element-2</button>
```

Toggle the class "show", "hide" from "#element-1" and "#element-2" and "active", "inactive" from every ".element-3".

```html
<div id="element-1" class="show">Element 1</div>
<div id="element-2" class="show">Element 2</div>

<div class="element-3" class="show">Element 3-1</div>
<div class="element-3" class="show">Element 3-2</div>
<div class="element-3" class="show">Element 3-3</div>

<button data-toggle-from="#element-1, #element-2 | .element-3" data-toggle-class="show, hide | active, inactive" type="button">Toggle class from #element-1, #element-2 and every .element-3</button>
```





## Add

### Add a single class to a single target
Add the class "show" from "#element"

```
<div id="element" class="show">Element</div>
<button data-add-to="#element" data-add-class="show" type="button">Add Element</button>
```

### Add multiple classes to a single target
Add the class "show" and "hide" from "#element"

```
<div id="element" class="show">Element</div>
<button data-add-to="#element" data-add-class="show, hide" type="button">Add Element</button>
```

### Add multiple classes to multiple targets
Group the targets and classes by using the | symbol. Every target element must have a set of corresponding classes

Add the class "show", "hide" to "#element-1" and "active", "inactive" to "#element-2".

```
<div id="element-1" class="show">Element 1</div>
<div id="element-2" class="show">Element 2</div>
<button data-add-to="#element-1 | #element-2" data-add-class="show, hide | active, inactive" type="button">Add class to Element 1 and Element 2</button>
```

Toggle the class "show", "hide" from "#element-1" and "#element-2"and "active", "inactive" from every ".element-3".

```html
<div id="element-1" class="show">Element 1</div>
<div id="element-2" class="show">Element 2</div>

<div class="element-3" class="show">Element 3-1</div>
<div class="element-3" class="show">Element 3-2</div>
<div class="element-3" class="show">Element 3-3</div>

<button data-toggle-from="#element-1, #element-2 | .element-3" data-toggle-class="show, hide | active, inactive" type="button">Toggle Element 1 and 2</button>
```