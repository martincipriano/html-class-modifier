# HTML Class Modifier

A script that allows developers to modify a target element's class attribute by applying specific data attributes to the corresponding element.

These modifications include:

* Toggling classes
* Adding classes
* Removing classes

## Toggling classes

### Toggling a class

```
<div id="target-element" class="show">Target Element</div>
<button data-toggle-from="#target-element" data-toggle-class="show" type="button">Toggle Target Element</button>
```

### Toggling multiple classes

```
<div id="target-element" class="show">Target Element</div>
<button data-toggle-from="#target-element" data-toggle-class="show, hide" type="button">Toggle Target Element</button>
```

### Toggling multiple classes from multiple elements

```
<div id="target-element" class="show">Target Element</div>
<div id="target-element-2" class="show">Target Element 2</div>
<button data-toggle-from="#target-element, #target-element-2" data-toggle-class="[show-1, hide-1], [show-2, hide-2]" type="button">Toggle Target Element</button>
```