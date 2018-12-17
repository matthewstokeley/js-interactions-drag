
var dragMethods = {
  /**
   * [changeDropEffect description]
   * @chainable
   * @param  {string} effect [description]
   * @return {Object}        [description]
   */
  changeDropEffect: function(effect) {
    this.event.dataTransfer.dropEffect = effect;
    return this;
  },

  /**
   * [changeEffectAllowed description]
   * @param  {String} effect [description]
   * @return {Object}        [description]
   */
  changeEffectAllowed: function(effect) {
    this.event.dataTransfer.effectAllowed = effect;
    return this;
  },

  /**
   * [description]
   * @chainable
   * @return {Object} [description]
   */
  removeDefaultDragImage: function() {
    this.setDragImage(new Image(), 0, 0);
    return this;
  },

  /*
   * [description]
   * @param  {Image}  img [description]
   * @param  {Number} x   [description]
   * @param  {Number} y   [description]
   * @return {Object}     [description]
   */
  setDragImage: function(img, x, y) {
    this.event.dataTransfer.setDragImage(img, x, y);
    return this;
  },

  /**
   * [eventHandler description]
   * @param  {EventObject} event   [description]
   * @return {Object}         [description]
   */
  handleEvent: function(event) {
    this.event = event;
    return this;
  },

  /**
   * [description]
   * @param  {Function} fn   [description]
   * @param  {Mixed}    args [description]
   * @return {Object}        [description]
   */
  mixin: function(fn, args) {
    if (!args) {
      args = [this.event];
    } else if (!Array.isArray(args)) {
      args = [this.event, args]
    } else {
      args.splice(0, 0, this.event);
    }

    fn.apply(this, args);

    return this;
  }

};