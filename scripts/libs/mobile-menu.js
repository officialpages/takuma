class MobileMenu {
  constructor() {
      this.DOM = {};
      this.DOM.btn = document.querySelector('.mobile-menu__btn');
      this.DOM.container = document.querySelector('#global-container');
      this.DOM.menu = document.querySelector('.mobile-menu');
      this.DOM.header = document.querySelector('.header');
      this.eventType = this._getEventType();
      this._addEvent();
  }

  _getEventType() {
      return window.ontouchstart ? 'touchstart' : 'click';
  }

  _toggle() {
      this.DOM.menu.classList.toggle('menu-open');
      this.DOM.header.classList.toggle('open');
  }

  _addEvent() {
      this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
  }
}
