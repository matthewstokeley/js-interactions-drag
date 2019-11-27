## js-interactions-drag

0.0.2

A set of opinions and encapsulation for working with the browser's Drag and Drop API.


### Quick Start

```

// define a mixin with a functionality that occurs on a drag event.
const layerZIndex = (event) => { event.target.style.zIndex = '9999' } 

```

```
<!-- define a drag handler -->
<div draggable="true" ondragstart="handleDrag(event)">div</div>

```

```
// use the `dragMethods` api to pipe in the event, the use the `mixin` method
// to add functionality.
import { dragMethods as d } from './src/index'


const handleDragStart = (event) => d.handleEvent(event)
  .changeEffectAllowed('none')
  .mixin(layerZIndex)

```


#### API Documentation

In addition to mixins, several `dragInterface` methods are wrapped as publicly available methods.
`changeDropEffect`  

Enumerated String  


---
`changeEffectAllowed`  

Enumerated String  



---
`removeDefaultDragImage`

Removes the auto-generated,
low opacity image from the 
`DragTransfer` object.



---
`setDragImage`

ImageObject, Int||String, Int||String
 
Accepts an image object and grid coordinates.
  
  
  
 ---
`handleEvent`  
 
 EventObject
  
  
  
  ---
  `mixin`
  
  Function
  
  
  
  
  ---
  
  #### Mixins
  
 
 
 ###### moveElToPointer
  
  
  
  
