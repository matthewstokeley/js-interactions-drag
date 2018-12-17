
var dragMethods = {
  /**
   * [changeDropEffect description]
   * @chainable
   * @param  {[type]} effect [description]
   * @return {[type]}        [description]
   */
  changeDropEffect: function(effect) {
    this.event.dataTransfer.dropEffect = effect;
    return this;
  },

  /**
   * [changeEffectAllowed description]
   * @param  {[type]} effect [description]
   * @return {[type]}        [description]
   */
  changeEffectAllowed: function(effect) {
    this.event.dataTransfer.effectAllowed = effect;
    return this;
  },

  /**
   * [description]
   * @chainable
   * @return {[type]} [description]
   */
  removeDefaultDragImage: function() {
    this.setDragImage(new Image(), 0, 0);
    return this;
  },

  /*
   * [description]
   * @param  {[type]} img [description]
   * @param  {[type]} x   [description]
   * @param  {[type]} y   [description]
   * @return {[type]}     [description]
   */
  setDragImage: function(img, x, y) {
    this.event.dataTransfer.setDragImage(img, x, y);
    return this;
  },

  /**
   * [eventHandler description]
   * @param  {[type]} event   [description]
   * @param  {[type]} methods [description]
   * @return {[type]}         [description]
   */
  handleEvent: function(event) {
    this.event = event;
    return this;
  },

  /**
   * [description]
   * @param  {Function} fn   [description]
   * @param  {[type]}   args [description]
   * @return {[type]}        [description]
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