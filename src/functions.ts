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

  setPointerEvents = function()
  {
    let style = document.createElement('style')
    style.textContent = `[data-toggle-from] *, [data-add-to] *, [data-remove-from] * { pointer-events: none; }`
    document.head.appendChild(style)
  }
}
