# HTML Class Modifier

A script that enables developers to dynamically modify the class attribute of target elements by adding specific data attributes to the trigger element. These modifications can include:

- Toggling classes:
    - [Toggle a single class from a single target](#toggle-1)
    - [Toggle multiple classes from a single target](#toggle-2)
    - [Toggle multiple classes from multiple targets](#toggle-3)
- Adding classes:
    - [Add a single class to a single target](#add-1)
    - [Add multiple classes to a single target](#add-2)
    - [Add multiple classes to multiple targets](#add-3)
- Removing classes:
    - [Remove a single class from a single target](#remove-1)
    - [Remove multiple classes from a single target](#remove-2)
    - [Remove multiple classes from multiple targets](#remove-3)

# Usage

## Class Modification Data Attributes

| Target | Class |
|----------|----------|
|data-toggle-from | data-toggle-class|
|data-add-to | data-add-class|
|data-remove-from | data-remove-class|

## Multiple Classes and Targets
Group the targets and classes by using the **|** symbol as a group delimeter. Every target element must have a set of corresponding classes.

```html
data-toggle-from="#element-1, #element-2 | .element-3 | #element-4, .element-5 " data-toggle-class="active, inactive | show, hide | visible, hidden"
```

Below is a visual representation of the grouped data attribute values:

| Target Elements | Class |
|----------|----------|
|#element-1, #element-2| active, inactive|
|.element-3 | show, hide|
|#element-4, .element-5| visible, hidden|

## Order of Execution
Various modification attributes can be assigned to a trigger element. When the trigger element is clicked, it will sequentially execute the class modifiers in the same order as the data attributes..

# Examples

<a name="toggle-1"></a>
### Toggle a single class from a single target
Toggle the class "show" from "#element"

```html
<div id="element" class="show">Element</div>
<button data-toggle-from="#element" data-toggle-class="show" type="button">Trigger Element</button>
```

<a name="toggle-2"></a>
### Toggle multiple classes from a single target
Toggle the classes "show" and "hide" from "#element"

```html
<div id="element" class="show">Element</div>
<button data-toggle-from="#element" data-toggle-class="show, hide" type="button">Trigger Element</button>
```
<a name="toggle-3"></a>
### Toggle multiple classes from multiple targets
Toggle the classes "show", "hide" from "#element-1" and classes "active", "inactive" from "#element-2".

```html
<div id="element-1" class="show">Element 1</div>
<div id="element-2" class="show">Element 2</div>
<button data-toggle-from="#element-1 | #element-2" data-toggle-class="show, hide | active, inactive" type="button">Trigger Element</button>
```

Toggle the classes "show", "hide" from "#element-1" and "#element-2" and classes "active", "inactive" from every ".element-3".

```html
<div id="element-1" class="show">Element 1</div>
<div id="element-2" class="show">Element 2</div>

<div class="element-3" class="show">Element 3-1</div>
<div class="element-3" class="show">Element 3-2</div>
<div class="element-3" class="show">Element 3-3</div>

<button data-toggle-from="#element-1, #element-2 | .element-3" data-toggle-class="show, hide | active, inactive" type="button">Trigger Element</button>
```

<a name="add-1"></a>
### Add a single class to a single target
Add the class "show" to "#element"

```html
<div id="element" class="show">Element</div>
<button data-add-to="#element" data-add-class="show" type="button">Trigger Element</button>
```

<a name="add-2"></a>
### Add multiple classes to a single target
Add the classes "show" and "hide" to "#element"

```html
<div id="element" class="show">Element</div>
<button data-add-to="#element" data-add-class="show, hide" type="button">Trigger Element</button>
```

<a name="add-3"></a>
### Add multiple classes to multiple targets
Add the classes "show", "hide" to "#element-1" and classes "active", "inactive" to "#element-2".

```html
<div id="element-1" class="show">Element 1</div>
<div id="element-2" class="show">Element 2</div>
<button data-add-to="#element-1 | #element-2" data-add-class="show, hide | active, inactive" type="button">Trigger Element</button>
```

Add the classes "show", "hide" to "#element-1" and "#element-2" and classes "active", "inactive" to every ".element-3".

```html
<div id="element-1" class="show">Element 1</div>
<div id="element-2" class="show">Element 2</div>

<div class="element-3" class="show">Element 3-1</div>
<div class="element-3" class="show">Element 3-2</div>
<div class="element-3" class="show">Element 3-3</div>

<button data-add-to="#element-1, #element-2 | .element-3" data-add-class="show, hide | active, inactive" type="button">Trigger Element</button>
```

<a name="remove-1"></a>
### Remove a single class from a single target
Remove the class "show" from "#element"

```html
<div id="element" class="show">Element</div>
<button data-remove-from="#element" data-remove-class="show" type="button">Trigger Element</button>
```

<a name="remove-2"></a>
### Remove multiple classes from a single target
Remove the classes "show" and "hide" from "#element"

```html
<div id="element" class="show">Element</div>
<button data-remove-from="#element" data-remove-class="show, hide" type="button">Trigger Element</button>
```

<a name="remove-3"></a>
### Remove multiple classes from multiple targets
Remove the classes "show", "hide" from "#element-1" and classes "active", "inactive" from "#element-2".

```html
<div id="element-1" class="show">Element 1</div>
<div id="element-2" class="show">Element 2</div>
<button data-remove-from="#element-1 | #element-2" data-remove-class="show, hide | active, inactive" type="button">Trigger Element</button>
```

Remove the classes "show", "hide" from "#element-1" and "#element-2" and classes "active", "inactive" from every ".element-3".

```html
<div id="element-1" class="show">Element 1</div>
<div id="element-2" class="show">Element 2</div>

<div class="element-3" class="show">Element 3-1</div>
<div class="element-3" class="show">Element 3-2</div>
<div class="element-3" class="show">Element 3-3</div>

<button data-remove-from="#element-1, #element-2 | .element-3" data-remove-class="show, hide | active, inactive" type="button">Trigger Element</button>
```