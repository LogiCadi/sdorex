# sdorex

[![npm](https://img.shields.io/npm/v/sdorex?style=flat-square)](https://www.npmjs.com/package/sdorex)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/sdorex?style=flat-square)](https://bundlephobia.com/result?p=sdorex)

### probably the most minimalist state management in react

- only 1 API
- reactive, no unnecessary re-render
- easy, intuit GET and SET state

## Install

```sh
npm i sdorex
# OR
yarn add sdorex
```

## Usage

basic usage

```tsx
import sdorex from "sdorex";

// init store
const store = sdorex({ count: 0 });

export default function App() {
  return (
    <>
      <p>{store.count}</p>
      <button onClick={() => store.count++}>ADD</button>
    </>
  );
}
```

[![DEMO](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/sdorex-demo-ruz0zt?file=/src/App.tsx)

define function

```tsx
const store = sdorex({
  count: 0,
  inc: () => store.count++,
});

export default function App() {
  return (
    <>
      <p>{store.count}</p>
      <button onClick={() => store.inc()}>ADD</button>
    </>
  );
}
```

reactive

`count` change but `User` will not re-render

```tsx
const store = sdorex({
  count: 0,
  user: "Tom",
});

function Count() {
  console.log("Count render.");
  return <p>{store.count}</p>;
}

function User() {
  console.log("User render.");
  return <p>{store.user}</p>;
}

export default function App() {
  return (
    <>
      <Count />
      <User />
      <button onClick={() => store.count++}>ADD</button>
    </>
  );
}
```

define object

```tsx
const store = sdorex({
  user: {
    name: "Tom",
  },
});

function User() {
  return (
    <>
      <p>{store.user.name}</p>
      <p>{store.user.gender}</p>
    </>
  );
}

export default function App() {
  return (
    <>
      <User />
      <button
        onClick={() => {
          store.user.name = "Jerry";
          store.user.gender = "girl";
        }}
      >
        GO
      </button>
    </>
  );
}
```

### very simple, try it!
