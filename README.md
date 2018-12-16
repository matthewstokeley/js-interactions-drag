## js-interactions-drag

A set of opinions and encapsulation for working with the browser's Drag and Drop API.

### API

```
handleEvent
```

The only relatively novel method in this object is the `handleEvent` method, which accepts an array of objects that define a method and, optionally, arguments. 

This enables quickly creating plugins using configuration.

### Quick Start

```

// define a mixin - a functionality that we want to happen on a drag event.

var layerZIndex = (event) => { event.target.style.zIndex = '9999' } 

```

```
<!-- define a drag handler -->
<div draggable="true" ondrag="handleDrag(event)">div</div>

```

```
// use the `dragMethods` api to pipe in drag methods and the mixin.
// currently using chaining, although it's possible there is a better syntax

import { dragMethods as d } from './src/index'

var handleDrag = (event) => {

	d.handleEvent(event).changeEffectAllowed('none').mixin(layerZIndex);

}

```