
export var dragMethods = {
  /**
   * 
   * @chainable
   * @param  {string}   effect
   * @return {Object}
   */
  changeDropEffect: ( effect ) => {
    if ( typeof effect !== 'string') {
        throw new Error( 'Invalid Argument Type' );
    }
    
    this.event.dataTransfer.dropEffect = effect
    return this
  },

  /**
   *
   * @chainable
   * @param  {String}    effect
   * @return {Object}
   */
  changeEffectAllowed: ( effect ) => {    
    if ( typeof effect !== 'string') {
        throw new Error( 'Invalid Argument Type' );
    }
    
    this.event.dataTransfer.effectAllowed = effect
    return this
  },

  /**
   * 
   * @chainable
   * @return {Object}
   */
  removeDefaultDragImage: () => {
    this.setDragImage( new Image(), 0, 0 );
    return this;
  },

  /*
   * 
   * @param  {Image}    img
   * @param  {Number}   x 
   * @param  {Number}   y
   * @return {Object}
   */
  setDragImage: ( img, x, y ) => {
    if ( typeof x !== 'number' ) {
        throw new Error( 'Invalid Argument Type' );
    }
    
    if ( typeof y !== 'number' ) {
        throw new Error( 'Invalid Argument Type' );
    }
    
    this.event.dataTransfer.setDragImage( img, x, y )
    return this
  },

  /**
   * 
   * @param  {EventObject}   event
   * @return {Object}
   */
  handleEvent: ( event ) => {
    this.event = event
    return this
  },

  /**
   * 
   * @param  {Function}    fn
   * @param  {Mixed}       args
   * @return {Object} 
   */
  mixin: (fn, args)=> {
    if ( ! args) {
      args = [ this.event ]
    } else if ( ! Array.isArray( args ) ) {
      args = [ this.event, args ]
    } else {
      args.splice( 0, 0, this.event )
    }

    fn.apply( this, args )

    return this
    
  }

};
