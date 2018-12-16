// helper methods for the Drag and Drop API
// 
export default var dragMethods = {
  /**
   * [changeDropEffect description]
   * @chainable
   * @param  {[type]} effect [description]
   * @return {[type]}        [description]
   */
  changeDropEffect: (effect) => {
    this/event.dataTransfer.changeDropEffect(effect);
    return this;
  },

  /**
   * [changeEffectAllowed description]
   * @param  {[type]} effect [description]
   * @return {[type]}        [description]
   */
  changeEffectAllowed: (effect) => {
    this.event.dataTransfer.effectAllowed(effect);
    return this;
  },

  /**
   * [description]
   * @chainable
   * @return {[type]} [description]
   */
  removeDefaultDragImage: (event) => {
    this.setDragImage(new Image());
    return this;
  },

  /**
   * [description]
   * @param  {[type]} img [description]
   * @param  {[type]} x   [description]
   * @param  {[type]} y   [description]
   * @return {[type]}     [description]
   */
  setDragImage: (img, x, y) => {
    this.event.dataTransfer.setDragImage(img, x || -, y || 0);
    return this;
  },

  /**
   * [eventHandler description]
   * @param  {[type]} event   [description]
   * @param  {[type]} methods [description]
   * @return {[type]}         [description]
   */
  handleEvent(event,  methods) {
  	this.event = event;
  	return this;
  },

  mixin(fn, args) {
  	if (!args) {
  		args = [];
    } else if (!Array.isArray(args)) {
  		args = [this.event, args]
  	} else {
  		args.splice(0, 1, this.event);
  	}

  	fn.apply(this, args);

  }

};
