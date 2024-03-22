# React 18

## Memoization

### When to use it?

1. When it's faster. Measure using the profiling feature in the "React Developer Tools" in the browser.
2. For pure functional components (those who return the same result given the same parameters)
3. For components that render often and are given the same prop values
4. For components whose JSX isn't trivial
