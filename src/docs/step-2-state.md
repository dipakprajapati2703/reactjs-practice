# Step 2 — State

**State** is a component’s memory. `useState` lets a component remember a value across renders; setting state schedules a re-render with the new value. Think of state as a **snapshot**—after `setValue(x)`, the current render still sees the old value; the next render uses `x`.

## What You’ll Use

- Interactive UI (counters, toggles, tabs, modals)
- Controlled forms (inputs you manage)
- Async flows (loading/error flags)
- Local, component-specific data

## Key Features / Rules

- **`useState` pair**: `[value, setValue]`; calling the setter requests a re-render.  
- **Snapshot behavior**: current render values don’t change immediately after `setState`; the next render reflects the new value.  
- **Functional updates**: when the next value depends on the previous one, use `setValue(v => v + 1)` to avoid stale data.  
- **Immutability**: never mutate arrays/objects in place—**copy, then replace** (e.g., `{ ...user, city }`, `[...items, item]`, `items.map(i => i.id === id ? { ...i, done: true } : i)`).
- **Minimal state**: don’t store values you can derive from existing state/props (derive instead).
- **Lifting state up**: when siblings must stay in sync, move state to the nearest common parent and pass it down via props.
- **Preserve vs reset**: React preserves state as long as the component remains at the same position in the tree; changing keys/types resets it.

## When to Use

- The data **changes over time** (user input, timers, network)
- The data is **local** to a component; if many layers need it, consider Context or a state manager later

## Why

- **Declarative UI**: React recalculates what to show based on state
- **Correctness**: immutable updates + minimal state reduce bugs
- **Clarity**: pairs naturally with props and lifted state

## Practice Checklist (planned in this repo)

Create `/state-examples` with bite-sized demos:
- `useState` basics & **functional updates**
- Boolean flags (show/hide)
- Controlled text input
- Immutable object & array updates (add, remove, edit by id)
- Derived values vs stored state
- Lifting state up between two inputs
- Preserve vs reset using `key`

## References (Official / Reputable)

- **React** — State: a component’s memory (`useState`): <https://react.dev/learn/state-a-components-memory>  
- **React** — Updating objects in state: <https://react.dev/learn/updating-objects-in-state>  
- **React** — Updating arrays in state: <https://react.dev/learn/updating-arrays-in-state>  
- **React** — Choosing the state structure: <https://react.dev/learn/choosing-the-state-structure>  
- **React** — Preserving & resetting state: <https://react.dev/learn/preserving-and-resetting-state>  
- **React** — Sharing (lifting) state between components: <https://react.dev/learn/sharing-state-between-components>
