# sdorex

### 或许是史上最简约的 react 状态管理

- 仅 1 个 API
- 响应式，没有不必要的渲染
- 简约的，符合直觉的取值和赋值

## 安装

```sh
npm i sdorex
# OR
yarn add sdorex
```

## 使用

基本使用

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

定义函数

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

响应式的

`count` 改变了 但是 `User` 不会重新渲染

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

定义对象

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
