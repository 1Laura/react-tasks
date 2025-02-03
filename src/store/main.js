import {create} from "zustand";

const useUserStore = create((set) => ({
    users: [],
    currentUser: null,
    error: null,

    registerUser: (newUsername, newPassword) => {
        set((state) => {
            // JavaScript metodas .some(), kuris naudojamas patikrinti, ar bent vienas elementas masyve atitinka nurodytą sąlygą
            if (state.users.some(user => user.username === newUsername)) {
                return {error: "Username is already in use."}
            }
            const newUser = {
                username: newUsername,
                password: newPassword,
                avatar: "https://picsum.photos/200/300.jpg"
            };
            return {
                users: [...state.users, newUser],
                error: null,
                currentUser: newUser,
            }
        });
    },
    setError: (newError) => set({error: newError}),
}));

export default useUserStore;