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
      this.modifyElements(element.dataset.toggleFrom, element.dataset.toggleClass, 'toggle')
    },
    "removeFrom": function(element) {
      this.modifyElements(element.dataset.removeFrom, element.dataset.removeClass, 'remove')
    },
    "addTo": function(element) {
      this.modifyElements(element.dataset.addTo, element.dataset.addClass, 'add')
    }
  }

  formatAttributeValues = function(data)
  {
    let result = data.split('|').map(selector => {
      return selector.split(',').map(element => element.trim())
    })
    return result
  }

  modifyElements = function(selectors, classes, action)
  {
    if (!selectors || !classes) {
      alert('Please check the required attributes and make sure they are not empty. \n\n For more details, check the documentation at https://github.com/martincipriano/html-class-modifier')
      return
    }

    selectors = this.formatAttributeValues(selectors)
    classes = this.formatAttributeValues(classes)

    // Value might be an ID or a class
    // Loop through the array of selectors to accommodate classes
    selectors.forEach(function(selector, key) {
      let targetElements = document.querySelectorAll(selector)

      // Check if the target element exists
      if (targetElements.length) {

        // Loop through the target elements
        // This will handle multiple target elements having the same class
        targetElements.forEach(function(targetElement) {
          classes[key].forEach(className => {
            switch (action) {
              case 'toggle':
                targetElement.classList.toggle(className)
                break
              case 'remove':
                targetElement.classList.remove(className)
                break
              case 'add':
                targetElement.classList.add(className)
                break
            }
          })
        })
      }
    })
  }

  setPointerEvents = function()
  {
    let style = document.createElement('style')
    style.textContent = `[data-toggle-from] *, [data-add-to] *, [data-remove-from] * { pointer-events: none }`
    document.head.appendChild(style)
  }
}
