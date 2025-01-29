import {create} from "zustand/react";

const useStore = create((set) => ({
    username: "Laura",
    // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    // removeAllBears: () => set({ bears: 0 }),
    updateBears: (newUsername) => set({username: newUsername}),
}))