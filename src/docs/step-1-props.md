# Step 1 — Props

**Props** are inputs to components—just like arguments to a function. A parent passes props down; the child renders based on those values.

## What You’ll Use

- Displaying data (text, numbers, lists, media)
- Configuring behavior or appearance (variant, size, disabled)
- Passing **event handlers** (functions) from parent to child
- Composing UI with `props.children`

## Key Features / Rules

- **Read-only**: components **must not mutate** their props.
- **Any JS value**: primitives, arrays/objects, functions, JSX.
- **`children`**: render arbitrary nested content between tags.
- **Defaults**: prefer function default parameters for optional props.
- **Type-checking** (optional): PropTypes for JS or TypeScript for larger apps.
- **Avoid prop drilling**: if the same prop is passed through many layers, use **Context**.

## When to Use

- Reusable UI that changes via inputs
- Passing data **down** or handlers **up**
- Composing layouts while the parent controls structure

## Why

- **Encapsulation & reuse** with explicit, predictable data flow
- Encourages **composition over inheritance**
- Clear boundaries between parent and child responsibilities

## Practice Checklist (in this repo)

- Open `/props-example`.
- Add a new visual prop to any component (e.g., `variant="primary"`).
- Replace hard-coded strings with props to make components reusable.
- Compose a layout using `props.children` to slot content.

## References (Official / Reputable)

- **React** — Passing props to a component: <https://react.dev/learn/passing-props-to-a-component>  
- **React** — Writing markup with JSX: <https://react.dev/learn/writing-markup-with-jsx>
