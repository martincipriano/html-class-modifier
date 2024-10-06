// import { eventListenerProps } from './types'

// export function eventListeners({var1, var2, var3}: eventListenerProps) {
//   console.log(var1)
// }

class HTML_Class_Modifier {
  constructor() {
    this.setPointerEvents()
  }

  modifiers = {
    "toggleFrom": function(element) {
    },
    "removeFrom": function(element) {
    },
    "addTo": function(element) {
    }
  }

  formatAttributeValues = function(data)
  {
    let result = data.split('|').map(selector => {
      return selector.split(',').map(element => element.trim())
    })
    return result
  }

  modifyElements = function(selectors, classes, action) {
    if (!selectors || !classes) {
      alert('Please check the required attributes and make sure they are not empty. \n\n For more details, check the documentation at https://github.com/martincipriano/html-class-modifier')
      return
    }

    selectors = this.formatAttributeValues(selectors)
    classes = this.formatAttributeValues(classes)
  }

  setPointerEvents = function()
  {
    let style = document.createElement('style')
    style.textContent = `[data-toggle-from] *, [data-add-to] *, [data-remove-from] * { pointer-events: none }`
    document.head.appendChild(style)
  }
}
