export const setSession = (key, value) => {
    sessionStorage.setItem(key, value);
};

export const clearSession = () => {
    sessionStorage.clear();
};
