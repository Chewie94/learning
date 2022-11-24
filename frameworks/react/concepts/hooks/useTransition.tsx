// https://reactjs.org/docs/hooks-reference.html#usetransition
// https://academind.com/tutorials/react-usetransition-vs-usedeferredvalue

// useTransition() can be used to tell React that certain state updates have a lower priority
// When calling useTransition(), you get back an array with exactly two elements: 
// An isPending boolean value, telling you whether the low-priority state update is still pending, and a startTransition() function that can be wrapped around a state update to tell React, that it is a low-priority update.

// Difference is that useTransition() wraps the state updating code, whilst useDeferredValue() wraps a value that's affected by the state update. You don't need to (and shouldn't) use both together, since they achieve the same goal in the end.
// Instead, it makes sense to prefer useTransition(), if you have some state update that should be treated with a lower priority and you have access to the state updating code. If you don't have that access, use useDeferredValue().

// code example:
function App() {
    const [isPending, startTransition] = useTransition();
    const [filterTerm, setFilterTerm] = useState('');
  
    const filteredProducts = filterProducts(filterTerm);
  
    function updateFilterHandler(event) {
      startTransition(() => {
        setFilterTerm(event.target.value);
      });
    }
  
    return (
      <div id="app">
        <input type="text" onChange={updateFilterHandler} />
        {isPending && <p>Updating List...</p>}
        <ProductList products={filteredProducts} />
      </div>
    );
  }