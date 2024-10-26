window.hcm = {
  setPointerEvents() {
    const style = document.createElement('style');
    style.textContent = `
      [data-toggle-from] *, 
      [data-add-to] *, 
      [data-remove-from] * { 
        pointer-events: none; 
      }`;
    document.head.appendChild(style);
  },

  eventListeners() {
    document.body.addEventListener('click', (event) => {
      const element = event.target;

      if (element.hasAttribute('data-toggle-from') || element.hasAttribute('data-add-to') || element.hasAttribute('data-remove-from')) {
        for (const key in element.dataset) {
          if (Object.prototype.hasOwnProperty.call(element.dataset, key) && window.hcm.modifiers[key]) {
            window.hcm.modifiers[key](element);
          }
        }
      }
    });
  },

  modifiers: {
    toggleFrom(element) {
      window.hcm.modifyElements(element.dataset.toggleFrom, element.dataset.toggleClass, 'toggle');
    },
    removeFrom(element) {
      window.hcm.modifyElements(element.dataset.removeFrom, element.dataset.removeClass, 'remove');
    },
    addTo(element) {
      window.hcm.modifyElements(element.dataset.addTo, element.dataset.addClass, 'add');
    }
  },

  formatAttributeValues(data) {
    return data.split('|').map(selector => {
      return selector.split(',').map(element => element.trim());
    });
  },

  modifyElements(selectors, classes, action) {
    if (!selectors || !classes) {
      alert('Please check the required attributes and make sure they are not empty. \n\n For more details, check the documentation at https://github.com/martincipriano/html-class-modifier');
      return;
    }

    const formattedSelectors = window.hcm.formatAttributeValues(selectors);
    const formattedClasses = window.hcm.formatAttributeValues(classes);

    formattedSelectors.forEach((selectorArray, key) => {
      const targetElements = document.querySelectorAll(selectorArray.join(','));

      if (targetElements.length) {
        targetElements.forEach(targetElement => {
          formattedClasses[key].forEach(className => {
            switch (action) {
              case 'toggle':
                targetElement.classList.toggle(className);
                break;
              case 'remove':
                targetElement.classList.remove(className);
                break;
              case 'add':
                targetElement.classList.add(className);
                break;
            }
          });
        });
      }
    });
  },

  init() {
    window.hcm.setPointerEvents();
    window.hcm.eventListeners();
  }
};

// Initialize the HTML_Class_Modifier equivalent
window.hcm.init();
