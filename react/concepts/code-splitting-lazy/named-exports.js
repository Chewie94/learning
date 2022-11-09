// React.lazy currently only supports default exports. If the module you want to import uses named exports, you can create an intermediate module that reexports it as the default. 
// This ensures that tree shaking keeps working and that you don’t pull in unused components.

// ManyComponents.js
export const MyComponent = /* ... */;
export const MyUnusedComponent = /* ... */;=

// MyComponent.js
export { MyComponent as default } from "./ManyComponents.js";

// MyApp.js
import React, { lazy } from 'react';
const MyComponent = lazy(() => import("./MyComponent.js"));