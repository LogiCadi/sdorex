import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

type SetType<T> = { [key in keyof T]: Set<Dispatch<SetStateAction<T[key]>>> };

export default function sdorex<T extends Record<string, any>>(store: T): T {
    Object.keys(store).forEach((key: keyof T) => {
        if (typeof store[key] === "object") {
            store[key] = sdorex(store[key]);
        }
    });

    const set: SetType<T> = {} as SetType<T>;

    const State = (key: keyof T) => {
        const [state, setState] = useState(store[key]);
        // Component creation, add set
        useMemo(() => {
            if (!set[key]) set[key] = new Set();
            set[key].add(setState);
        }, [key]);
        // Component destruction, delete set
        useEffect(() => () => set[key].delete(setState) as unknown as void, [key]);

        return state;
    };

    return new Proxy(store, {
        get(target, key: keyof T) {
            try {
                return State(key);
            } catch (e) {
                return target[key];
            }
        },
        set(target, key: keyof T, val) {
            if (val !== target[key]) {
                target[key] = val;
                set[key]?.forEach((s) => s(val));
            }

            return true;
        }
    } as ProxyHandler<T>);
}
