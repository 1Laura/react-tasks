import {create} from "zustand";

const useStore = create((set) => ({
    username: "Laura",
    age: 41,
    // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    changeName: () => set({ username: "Erta" }),
    updateUserName: (newUsername) => set({username: newUsername}),
}))
export default useStore;