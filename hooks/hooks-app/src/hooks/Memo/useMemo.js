const memorizedValue = useMemo(() => {
  return expensiveCalculation(a, b);
}, [a, b]);

// Path: src\hooks\useCallback.js

const memorizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

// Path: src\hooks\useRef.js

const refContainer = useRef(initialValue);

// Path: src\hooks\useImperativeHandle.js

useImperativeHandle(ref, () => ({
  focus() {
    // ...
  },
}));
