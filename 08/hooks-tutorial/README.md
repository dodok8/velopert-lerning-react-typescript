# 그 외 Hook

## [`useImperativeHandle`](https://ko.reactjs.org/docs/hooks-reference.html#useimperativehandle)

`ref`가 부모 컴포넌트에서 노출될 때, 그 인스턴스를 커스텀해서 사용할 수 있습니다. [`forwardRef`](https://ko.reactjs.org/docs/react-api.html#reactforwardref)와 같이 사용하세요.

```typescript react

function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
      console.log("ref를 통해 포커스 됨.")
    }
  }));
  return <input ref={inputRef} ... />;
}

FancyInput = forwardRef(FancyInput);
```

## [`useLayoutEffect`](https://ko.reactjs.org/docs/hooks-reference.html#uselayouteffect)

`useLayoutEffect`는 DOM 변경 후에, **동기적**으로 발생하는 `useEffect`입니다. `useLayoutEffect`의 내부에 예정된 갱신은 브라우저가 화면을 그리기 이전 시점에 동기적으로 수행될 것입니다. 화면 갱신 차단의 방지가 가능할 때 표준 `useEffect`를 먼저 사용하세요.

## [`useDebugValue`](https://ko.reactjs.org/docs/hooks-reference.html#usedebugvalue)

useDebugValue는 React 개발자도구에서 사용자 Hook 레이블을 표시하는 데에 사용할 수 있습니다.

```typescript react
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // ...

  // Show a label in DevTools next to this Hook
  // e.g. "FriendStatus: Online"
  useDebugValue(isOnline ? 'Online' : 'Offline');

  return isOnline;
}
```

## 다양한 커뮤니티 훅

사용 플랫폼, 라이브러리에 따라 여러가지 유용한 훅의 형태로 배포되는 라이브러리들이 많습니다.
