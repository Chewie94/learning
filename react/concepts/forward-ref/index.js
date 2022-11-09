// https://reactjs.org/docs/forwarding-refs.html

// Ref forwarding is a technique for automatically passing a ref through a component to one of its children. This is typically not necessary for most components in the application. 
// However, it can be useful for some kinds of components, especially in reusable component libraries. The most common scenarios are described below.

// Ref forwarding is an opt-in feature that lets some components take a ref they receive, and pass it further down (in other words, “forward” it) to a child:

// In the example below, FancyButton uses React.forwardRef to obtain the ref passed to it, and then forward it to the DOM button that it renders:

const FancyButton = React.forwardRef((props, ref) => (  <button ref={ref} className="FancyButton">    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;

//This way, components using FancyButton can get a ref to the underlying button DOM node and access it if necessary—just like if they used a DOM button directly.