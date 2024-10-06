export class HTML_Class_Modifier {
  constructor() {
    this.setPointerEvents();
    this.eventListeners();
  }

  modifiers: {
    [key: string]: (element: HTMLElement) => void;
  } = {
    toggleFrom: (element: HTMLElement) => {
      this.modifyElements(element.dataset.toggleFrom!, element.dataset.toggleClass!, 'toggle');
    },
    removeFrom: (element: HTMLElement) => {
      this.modifyElements(element.dataset.removeFrom!, element.dataset.removeClass!, 'remove');
    },
    addTo: (element: HTMLElement) => {
      this.modifyElements(element.dataset.addTo!, element.dataset.addClass!, 'add');
    },
  };

  formatAttributeValues(data: string): string[][] {
    return data.split('|').map(selector => {
      return selector.split(',').map(element => element.trim());
    });
  }

  modifyElements(selectors: string, classes: string, action: 'toggle' | 'add' | 'remove'): void {
    if (!selectors || !classes) {
      alert('Please check the required attributes and make sure they are not empty. \n\n For more details, check the documentation at https://github.com/martincipriano/html-class-modifier');
      return;
    }

    const formattedSelectors = this.formatAttributeValues(selectors);
    const formattedClasses = this.formatAttributeValues(classes);

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
  }

  setPointerEvents(): void {
    const style = document.createElement('style');
    style.textContent = `
      [data-toggle-from] *, 
      [data-add-to] *, 
      [data-remove-from] * { 
        pointer-events: none; 
      }`;
    document.head.appendChild(style);
  }

  eventListeners(): void {
    document.body.addEventListener('click', (event: MouseEvent) => {
      const element = event.target as HTMLElement;

      if (element.hasAttribute('data-toggle-from') || element.hasAttribute('data-add-to') || element.hasAttribute('data-remove-from')) {
        for (const key in element.dataset) {
          if (Object.prototype.hasOwnProperty.call(element.dataset, key) && this.modifiers[key]) {
            this.modifiers[key](element);
          }
        }
      }
    });
  }
}
