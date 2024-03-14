export abstract class Component {
  selector: string;
  template: string = '';
  element!: HTMLElement;
  constructor(selector: string) {
    this.selector = selector;
  }

  // eslint-disable-next-line no-undef
  render(position: InsertPosition = 'beforeend') {
    const targetElement = document.querySelector<HTMLElement>(this.selector);
    if (!targetElement) return;
    targetElement.insertAdjacentHTML(position, this.template);
    if (position === 'beforeend') {
      this.element = targetElement.lastElementChild! as HTMLElement;
    } else if (position === 'afterbegin') {
      this.element = targetElement.firstElementChild! as HTMLElement;
    } else if (position === 'beforebegin') {
      this.element = targetElement.previousElementSibling! as HTMLElement;
    } else if (position === 'afterend') {
      this.element = targetElement.nextElementSibling! as HTMLElement;
    }
  }

  replace() {
    this.element.outerHTML = this.template;
  }

  unRender() {
    this.element.outerHTML = '';
  }
}

// Uso de insertAdjacentHTML
// beforeBeguin
// <div>
// afterBeguin

// beforeEnd
// </div>
// afterEnd
