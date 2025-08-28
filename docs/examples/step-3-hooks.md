# Step 3 — React Hooks (Modern React) — Overview

This step moves from local state to the **core Hooks** that power modern React: `useEffect`, `useRef`, `useContext`, `useMemo`, `useCallback`, and **custom hooks**. You’ll learn **when** to use each hook, the **rules** that keep them correct, common **pitfalls**, and a practical checklist to implement in your app.

> No code examples here—this file is an overview you can use with your code generator. Links below point to the **official React docs** and MDN articles for deeper reading.  

---

## Why Hooks?

- **Encapsulate logic** inside function components without classes.  
- **Share reusable logic** via custom hooks instead of ad-hoc utilities.  
- **Make side effects explicit** (fetching, subscriptions, timers).  
- **Optimize performance** carefully with memoization when needed.  
Sources: React Hooks Intro & Philosophy (react.dev) — <https://react.dev/learn> , <https://react.dev/reference/react>

---

## What to Build in This Step (Suggested Routes / Demos)

Create a new page route (e.g., `/hooks-examples`) and add small sections for:

1. **`useEffect` basics** — run on mount; run when a prop/state changes; proper cleanup.  
2. **`useEffect` pitfalls** — stale closures; missing/extra dependencies; how to fix with dependency arrays and functional updates.  
3. **`useRef` for DOM** — focus an input; read layout values; store mutable “boxes” that don’t re-render.  
4. **`useRef` for instance state** — store timers, previous values, counters that shouldn’t trigger re-renders.  
5. **`useContext`** — build a theme or auth context; avoid prop drilling; show provider/consumer pattern.  
6. **`useMemo`** — memoize an expensive derived value; demonstrate before/after render timing.  
7. **`useCallback`** — stabilize callbacks passed to children; show how it interacts with `React.memo`.  
8. **Custom Hook** — extract repeated effect + state into `useXyz` (e.g., `useLocalStorage`, `useOnlineStatus`, or `useDebouncedValue`).  

Each demo should be **small, isolated, and focused on one idea**.

---

## Hook-by-Hook Overview

### 1) `useEffect` — Side Effects
- **Purpose**: Synchronize a component with external systems (network, DOM, subscriptions, timers).  
- **Patterns**:
  - **Mount-only effect** (empty `[]`) for one-time setup; **clean up** on unmount.  
  - **Effect on change** (deps array) for reacting to props/state changes.  
  - **Cleanup** function to stop timers, abort fetches, unsubscribe listeners.  
- **Rules**:
  - List **all reactive values** in the dependency array; don’t “silence” warnings by omission.  
  - Prefer **functional updates** inside effects if you depend on prior state.  
- **Pitfalls**:  
  - **Stale closures** (effect reads old values) → fix deps, or use refs/functional updates.  
  - **Redundant fetch loops** from missing deps or updating state used by the effect.  
Sources: Effects (react.dev) — <https://react.dev/learn/synchronizing-with-effects> , Dependencies — <https://react.dev/learn/lifecycle-of-reactive-effects>

---

### 2) `useRef` — Persistent, Mutable Box (No Re-render)
- **Purpose**: Hold a **mutable value** that survives re-renders **without** causing re-renders when it changes.  
- **Use cases**:
  - **DOM access** (`ref` to input for focus/measure).  
  - **Instance state** (timer IDs, previous value, imperatively updated counters).  
- **Rule**: Updating `ref.current` **does not** trigger a re-render.  
Sources: Refs (react.dev) — <https://react.dev/learn/referencing-values-with-refs> , DOM refs — <https://react.dev/learn/manipulating-the-dom-with-refs>

---

### 3) `useContext` — Avoid Prop Drilling
- **Purpose**: Share a value (theme, user, settings) across the tree without threading it through every level.  
- **Pattern**: Create a Context, wrap with a **Provider**, read with `useContext`.  
- **Guidance**:
  - Keep context values **stable** (memoize provider value) to avoid unnecessary re-renders.  
  - Use for **app-wide** or **section-wide** state; prefer local `useState` for purely local concerns.  
Sources: Context (react.dev) — <https://react.dev/learn/passing-data-deeply-with-context> , <https://react.dev/reference/react/useContext>

---

### 4) `useMemo` — Memoize Derived Values
- **Purpose**: Cache an **expensive computation** so it’s recomputed only when inputs change.  
- **Use cases**: Filtering/sorting large lists; heavy calculations; derived models.  
- **Rules**:
  - Use **only** for expensive work or referential stability; avoid premature memoization.  
  - Ensure **complete dependency lists** for correctness.  
Sources: Memoization (react.dev) — <https://react.dev/reference/react/useMemo> , Performance — <https://react.dev/learn/escape-hatches#performance-optimizations>

---

### 5) `useCallback` — Stable Function Identity
- **Purpose**: Return a **memoized callback** whose identity only changes when deps change.  
- **Use cases**: Passing handlers to memoized children or to dependency-sensitive effects.  
- **Rule**: Pair with `React.memo` (or equality checks) **only** when a changing function identity causes wasted work.  
- **Pitfalls**: Overusing it adds complexity without improving performance.  
Sources: `useCallback` (react.dev) — <https://react.dev/reference/react/useCallback> , `React.memo` — <https://react.dev/reference/react/memo>

---

### 6) Custom Hooks — Reusable Logic
- **Purpose**: Package state/effect logic for reuse (`useXyz`).  
- **Patterns**:
  - **Input/Output contract**: parameters in, values & callbacks out.  
  - Compose other hooks internally (`useEffect`, `useState`, `useRef`).  
  - Keep them **pure** (no global singletons; return data/functions).  
- **Examples**: `useLocalStorage(key, initial)`, `useMediaQuery(query)`, `useDebouncedValue(value, delay)`.  
Sources: Building custom hooks (react.dev) — <https://react.dev/learn/reusing-logic-with-custom-hooks>

---

## Rules of Hooks (Must-Follow)

- **Only call hooks at the top level** of your component or custom hook (not inside loops, conditions, or nested functions).  
- **Only call hooks from React functions** (components or custom hooks).  
- Keep **dependency arrays accurate** to avoid bugs and stale values.  
Sources: Rules of Hooks — <https://react.dev/warnings/rules-of-hooks> , ESLint plugin — <https://www.npmjs.com/package/eslint-plugin-react-hooks>

---

## Common Pitfalls & How to Avoid Them

- **Stale closures** in effects → include all reactive values in deps; or use a `ref`/functional update when appropriate.  
- **Missing cleanup** → always return a cleanup function for subscriptions, timers, and in-flight requests.  
- **Over-memoization** → add `useMemo`/`useCallback` **only** when you’ve measured an issue.  
- **Context value causing re-renders** → memoize the provider value (e.g., `useMemo(() => value, [deps])`).  
- **Ref misuse** → don’t store values in refs that the UI must reflect; those belong in `useState`.  
Sources: Effects lifecycle & cleanup — <https://react.dev/learn/synchronizing-with-effects#step-3-add-cleanup-if-needed> , Memoization guidance — <https://react.dev/learn/escape-hatches#performance-optimizations>

---

## Practice Checklist (Implementation Plan)

Create `/hooks-examples` page with sections (one per bullet):

1. **Effect — mount & cleanup**: start a timer on mount, clear on unmount.  
2. **Effect — reacting to deps**: fetch (or mock) data when a `query` changes; abort on re-run.  
3. **Ref — DOM**: autofocus an input; scroll to an element; measure size.  
4. **Ref — instance state**: store a previous value and display “changed from X → Y”.  
5. **Context**: theme provider with `light/dark`; a child button toggles theme without prop drilling.  
6. **Memo**: expensive `computeScore(items)` derived value; show render time before/after.  
7. **Callback**: memoize a row `onSelect` passed to a memoized `List` child; compare renders.  
8. **Custom hook**: `useDebouncedValue(value, delay)` used by a search box demo.  

**Acceptance criteria**:
- Each section self-contained and documented.  
- Clear visual cue when re-renders happen (e.g., counters or timestamps).  
- Correct dependency arrays and cleanups.  
- No unnecessary memoization.

---

## References (Authoritative)

- React Docs (react.dev)  
  - Hooks Reference: <https://react.dev/reference/react>  
  - Effects: <https://react.dev/learn/synchronizing-with-effects>  
  - Refs: <https://react.dev/learn/referencing-values-with-refs> , <https://react.dev/learn/manipulating-the-dom-with-refs>  
  - Context: <https://react.dev/learn/passing-data-deeply-with-context> , <https://react.dev/reference/react/useContext>  
  - Memoization: <https://react.dev/reference/react/useMemo> , <https://react.dev/reference/react/useCallback> , <https://react.dev/reference/react/memo>  
  - Custom Hooks: <https://react.dev/learn/reusing-logic-with-custom-hooks>  
  - Rules of Hooks: <https://react.dev/warnings/rules-of-hooks>

- MDN (JavaScript fundamentals relevant to hooks)  
  - Closures: <https://developer.mozilla.org/docs/Web/JavaScript/Closures>  
  - Event loop & tasks (mental model for async effects): <https://developer.mozilla.org/docs/Web/JavaScript/Event_loop>

