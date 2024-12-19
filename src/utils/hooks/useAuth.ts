import { useLocalstorage } from "./useLocalstorage";

export function useAuth() {
    const [isAuth, setIsAuth] = useLocalstorage({
        login: "",
        loggedIn: false,
    }, 'user');

    return { isAuth, setIsAuth }
}