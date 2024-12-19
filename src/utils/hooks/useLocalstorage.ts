import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useLocalstorage(initialValue: any, key: string) {
    const getValue = () => {
        const storage = localStorage.getItem(key);

        if (storage) {
            return JSON.parse(storage)
        }

        return initialValue;
    };

    const [value, setValue] = useState(getValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    },[value])

    return [value, setValue];
}