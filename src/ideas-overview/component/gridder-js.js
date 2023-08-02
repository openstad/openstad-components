// This is GridderJs from https://github.com/oriongunning/gridder-js with a few changes
// - add a camelize function; this is a bug in the original code
// - add a (cancel) resize option
// - add a reinit function: the original cannot handle changes in the list of items, while we have filters that do change that list
// ToDo: send these changes as PRs back to the repo above

import merge from "merge";

let defaultOptions = {

  /*
  // expander placement
  'bottom' is how google use to do
  'right' is how google images does now
  */
  display: 'bottom',

  // number of columns
  columns: 8,
  
  // the gap between the columns
  gap: 20,

  /*
  // breakpoints responsive
  // must be from highest to lowest width
  example:
  breakpoints: {
  960: {
  columns: 4,
  gap: 15,
  },
  700: {
  columns: 3,
  gap: 5,
  },
  400: {
  columns: 2,
  gap: 5,
  display: 'bottom',
  }
  },
  */
  breakpoints: {},
  
  // activate debug logging
  debug: false,
  
  // navigation text
  nextText: "Next",
  prevText: "Previous",
  closeText: "Close", 
  loadingText: "Loading...",


  // elements classes
  gridClass: "gridder-list",
  itemClass: "gridder-item",
  expanderClass: "gridder-show",
  openExpanderClass: "gridder-open",

  resize: true,
  
  // Called when gridder instance is ready
  init() {},
  
  // Called when gridder instance is open
  // you can access: 
  // this.clickedElement
  // this.expanderElement
  open() {},
  
  // Called when gridder expander is closed
  close() {},
  
}

function camelize(str) {
  return str.replace(/-(\w)/g, ($0, $1) => $1 ? $1.toUpperCase() : '')
}

export default class GridderJS {

  constructor(el, options) {

    let left;
    this.element = el;

    this.clickableElements = [];
    this.listeners = [];
    this.clickedElement = null;
    this.expanderElement = null;
    this.listElement = null;
    this.breakpoints = [];

    if (typeof this.element === "string") {
      this.element = document.querySelector(this.element);
    }

    if (this.element.gridderjs) {
      throw new Error("GridderJS already attached.");
    }

    // Now add this gridder to the global instances.
    GridderJS.instances.push(this);

    // Put the gridder inside the element itself.
    this.element.gridderjs = this;

    let elementOptions =
        (left = GridderJS.optionsForElement(this.element)) != null ? left : {};

    // set options
    this.options = merge(
      true,
      {},
      defaultOptions,
      elementOptions,
      options != null ? options : {}
    );

    // init
    this.init();
  }

  // The function that gets called when GridderJS is initialized. You
  // can (and should) setup event listeners inside this function.
  init() {

    // GET GRIDDER LIST
    this.listElement = this.element.querySelector('.'+this.options.gridClass)

    // get elements
    for (let i = 0; i < this.listElement.children.length; i++) {
      this.addElement(this.listElement.children[i], i)
    }

    if (this.clickableElements == null || !this.clickableElements.length) {
      throw new Error(
        `Invalid \`${this.options.gridClass}\` option provided. Please provide a CSS selector, a plain HTML element or a list of those.`
      );
    }

    // parse breakpoints;
    this.parseBreakpoints();

    // Initial Resize
    GridderJS.resizeGridder();

    // Enable Gridder
    this.enable();

    // init callback
    return this.options.init.call(this, this.element);
  }

  // The function that gets called when GridderJS is initialized. You
  // can (and should) setup event listeners inside this function.
  reinit() {

    let self = this;
    let changes = [];

    let columns = window.getComputedStyle(self.listElement).gridTemplateColumns.split(' ').length;
    self.options.columns = columns;

    // remove
    let currentEelements = [ ...self.listElement.children ];
    self.clickableElements.forEach((el) => {
      if (currentEelements.indexOf(el) == -1 && el != self.expanderElement) {
        changes.push({ action: self.removeElement, params: [el] });
      }
    })

    // add
    for (let i = 0; i < self.listElement.children.length; i++) {
      let el = self.listElement.children[i];
      if (self.clickableElements.indexOf(el) == -1 && el != self.expanderElement) {
        changes.push({ action: self.addElement, params: [self.listElement.children[i], i] });
      }

    }

    if (changes.length) {
      self.close();
      changes.forEach(change => {
        change.action.apply(self, change.params)
      });
    }

  }

  addElement(el, index) {
    let self = this;
    self.clickableElements.splice(index, 0, el);
    el.listener = el.addEventListener('click', e => self.open(e), false)
  }
  
  removeElement(el) {
    el.removeEventListener(el, el.listener)
    let index = this.clickableElements.indexOf(el);
    this.clickableElements.splice(index, 1);
  }
  
  // parse breakpoint to be able to use later on each resize
  parseBreakpoints(){
    var _this9 = this;
    var breakpoints = this.options.breakpoints;
    this.breakpoints.push(["default", this.options]);
    if (breakpoints) {
      for (const width in breakpoints) {
        _this9.breakpoints.push([
          parseInt(width),
          merge(true, {}, _this9.options, breakpoints[width])
        ]);
      };
    }
  }

  enable() {

    if (this.options.resize) {
      this.listElement.parentNode.style.display = 'flex';

      // init gridder style and css
      this.listElement.style.width = '100%';
      this.listElement.style.display = 'grid';
      this.listElement.style.gridTemplateColumns = 'repeat('+this.options.columns+', 1fr)';
      this.listElement.style.gridAutoFlow = 'row dense';
      this.listElement.style.gap = this.options.gap+'px';
      this.listElement.style.gridTemplateRows= 'min-content';

      // set explander style if exists
      let existingExpander = this.element.querySelector('.'+this.options.expanderClass);
      if(existingExpander){
        this.setExpanderStyles(existingExpander);
      }

    }
    
    delete this.disabled;
    this.clickableElements.forEach((element) =>
      element.classList.add("gridder-item")
    );
    // return this.setupEventListeners();
  }

  // Activates all listeners stored in @listeners
  setupEventListeners() {
    // TODO
    return this.listeners.map((elementListeners) =>
      (() => {
        let result = [];
        for (let event in elementListeners.events) {
          let listener = elementListeners.events[event];
          result.push(
            elementListeners.element.addEventListener(event, listener, false)
          );
        }
        return result;
      })()
    );
  }

  // Deactivates all listeners stored in @listeners
  removeEventListeners() {
    return this.listeners.map((elementListeners) =>
      (() => {
        let result = [];
        for (let event in elementListeners.events) {
          let listener = elementListeners.events[event];
          result.push(
            elementListeners.element.removeEventListener(event, listener, false)
          );
        }
        return result;
      })()
    );
  }

  // Disable event
  disable() {
    // TODO
    this.removeEventListeners();
  }

  // Open Expander
  async open(e) {

    let el = e.target;

    // make sure we have the grid item
    if(!el.classList.contains(this.options.itemClass)){
      el = el.closest('.'+this.options.itemClass);
    }

    // close expander if open
    if(this.expanderElement){

      // if same grid item is selected, close it
      if(el.classList.contains('active')){
        this.close(el);  
        return false;
      }

      // else just close
      this.close(el); 
    }

    // then set all as inactive and activate clicked grid item
    this.listElement.querySelectorAll('.'+this.options.itemClass).forEach( div => {
      div.classList.remove('active');
    });
    el.classList.add('active');

    // insert expander
    let template = this.insertExpander(el);

    // get expander content
    const innerHtml = await this.getExpanderContent(el);

    // create navigation
    let gridderNavigation = this.createNavigationElements(el);

    // create content
    let gridderContent = document.createElement('div');
    gridderContent.classList.add('gridder-content');
    gridderContent.innerHTML = innerHtml;

    // append content
    template.innerHTML = "";
    template.appendChild(gridderNavigation);
    template.appendChild(gridderContent);

    // initialize navigation events
    this.initializeNavigationEvents(template, el);

    // set base var
    this.clickedElement = el;
    this.expanderElement = template;
    // 
    if(this.options.display === 'right'){
      this._columns = this.options.columns;
      this.update({ columns: this.options.columns - Math.round(this.options.columns/4) })
    }

    // scroll into view
    if(this.options.display === 'bottom'){
      el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    //
    this.setExpanderStyles(template);

    // open callback
    this.options.open.call(this)
  }

  setExpanderStyles(template) {
    // set css for display == right
    if(this.options.display === 'right'){
      this.listElement.style.flex = "65%";
      template.style.overscrollBehavior = 'contain' ; /* Prevent SCROLL-CHAINING to parent elements. */
      template.style.flex = " calc(35% - "+this.options.gap+"px)";
      template.style.position = ' sticky ';
      template.style.alignSelf = 'flex-start';
      template.style.top = ' 0 ';
      template.style.marginLeft = this.options.gap+"px";
      template.style.overflowY = 'scroll';
      template.style.overflowX = 'hidden';
      template.style.maxHeight = '100vh';
    }
    // set css for display == bottom
    if(this.options.display === 'bottom'){
      template.style.gridColumn = '1 / span '+this.options.columns;
      template.style.gridRow = ' span 1 ';
    } 
  }

  insertExpander(el) {

    // create expander
    let template = document.createElement('div');

    // style expander
    template.classList.add(this.options.expanderClass);
    template.classList.add("gridder-"+this.options.display);

    // 
    template.innerHTML = this.options.loadingText;

    //
    if(this.options.display === 'right'){
      this.insertAfter(template, this.listElement);
    }

    if(this.options.display === 'bottom'){
      this.insertAfter(template, el);
    }

    el.parentNode.classList.add(this.options.openExpanderClass);
    
    return template;
  }

  close() {

    if (!this.clickedElement || !this.expanderElement) return;

    let el = this.clickedElement;

    // remove grid item active class
    el.classList.remove('active');

    // remove expander bloc
    this.expanderElement.remove();

    // TODO: deze if klopt natuurlijk niet
    this.listElement.classList.remove(this.options.openExpanderClass);

    // remove any unwated styles
    this.listElement.style.width = '100%';
    this.update();

    // set base var
    this.clickedElement = null;
    this.expanderElement = null;

    // 
    if(this.options.display === 'right'){
      this.update({ columns: this._columns })
    }

    // close expander callback
    this.options.close.call(el)

  }

  async getExpanderContent(el) {

    // bloc content
    if(el.dataset.target){
      let target = el.dataset.target;
      let targetElement = document.getElementById(target);
      return targetElement.innerHTML.trim();
    }

    // url content
    let url = el.dataset.url;
    let response = await fetch(url);
    return response.text();
    
  }

  createNavigationElements(parent) {

    // create navigation container
    let el = document.createElement('div');
    el.classList.add('gridder-navigation');

    // add prev button
    if(this.getPreviousSibling(parent, '.'+this.options.itemClass)){
      let prev = document.createElement('a');
      prev.classList.add('gridder-prev');
      prev.innerHTML = this.options.prevText;
      el.appendChild(prev);
    }

    // add next button
    if(this.getNextSibling(parent, '.'+this.options.itemClass)){
      let next = document.createElement('a');
      next.classList.add('gridder-next');
      next.innerHTML = this.options.nextText;
      el.appendChild(next);
    }

    // add close button
    let close = document.createElement('a');
    close.classList.add('gridder-close');
    close.innerHTML = this.options.closeText;
    el.appendChild(close);

    return el;
  }

  initializeNavigationEvents(template, parent) {

    template.querySelector('.gridder-close').addEventListener('click', () => {
      this.close(parent);
    });

    let next = template.querySelector('.gridder-next');
    if(next){
      next.addEventListener('click', () => {
        let target = this.getNextSibling(parent, '.'+this.options.itemClass);
        if(target) {
          const event = new Event('click', {bubbles: true});
          target.dispatchEvent(event);
        }
      });
    }

    let prev = template.querySelector('.gridder-prev');
    if(prev){
      prev.addEventListener('click', () => {
        let target = this.getPreviousSibling(parent, '.'+this.options.itemClass);
        if(target) {
          const event = new Event('click', {bubbles: true});
          target.dispatchEvent(event);
        }
      });
    }
    
  }

  insertBefore(newNode, existingNode) {
    existingNode.parentNode.prepend(newNode);
  }

  insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }

  getNextSibling(elem, selector) {
    var sibling = elem.nextElementSibling;
    if (!selector) return sibling;
    while (sibling) {
      if (sibling.matches(selector)) return sibling;
      sibling = sibling.nextElementSibling
    }
  };

  getPreviousSibling(elem, selector) {
    var sibling = elem.previousElementSibling;
    if (!selector) return sibling;
    while (sibling) {
      if (sibling.matches(selector)) return sibling;
      sibling = sibling.previousElementSibling;
    }
  };

  //////////////// PUBLIC METHODS //////////////////
  
  update(options) {
    this._options = this.options;
    this.options = merge(
      true,
      {},
      this.options,
      options != null ? options : {}
    );
    this.enable();
  }

  destroy() {
    this.disable();
    delete this.element.gridderjs;
    return GridderJS.instances.splice(GridderJS.instances.indexOf(this), 1);
  }
  
}

GridderJS.options = {};

// Returns the options for an element or undefined if none available.
GridderJS.optionsForElement = function (element) {
  // Get the `GridderJS.options.elementId` for this element if it exists
  if (element.getAttribute("id")) {
    return GridderJS.options[camelize(element.getAttribute("id"))];
  } else {
    return undefined;
  }
};

// Resize all gridder instances.
// terrible, but works : to be refactored once I found a way to make it work
GridderJS.resizeGridder = function () {
  let wWidth = window.innerWidth;
  GridderJS.instances.forEach((gridder) => {
  console.log('breakpoints', gridder.breakpoints);
    // if additional breakpoint specified
    if(gridder.breakpoints.length < 2) return false;
    // find closest breakpoint options
    for(const n in gridder.breakpoints) {
      if(n > 0){
        let breakpoint = gridder.breakpoints[n];
        if(wWidth <= breakpoint[0]){
          gridder.update(breakpoint[1]);
          break;
        }
      }
      // else use default
      gridder.update(gridder.breakpoints[0][1]);
    };
  });
};

// Holds a list of all gridder instances
GridderJS.instances = [];

// Augment jQuery
if (typeof jQuery !== "undefined" && jQuery !== null) {
  jQuery.fn.gridderjs = function (options) {
    return this.each(function () {
      return new GridderJS(this, options);
    });
  };
}

// Resize Event
// terrible, but works : to be refactored once I found a way to make it work
var resizeTimer;
window.addEventListener('resize', function(e){
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    GridderJS.resizeGridder();     
  }, 500);  
});

export { GridderJS };
