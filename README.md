## js-interactions-drag

0.0.2

A set of opinions and encapsulation for working with the browser's Drag and Drop API.


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