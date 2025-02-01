import {create} from "zustand";

const useColorStore = create((set) => ({
    color: "blue",//default
    setColor: (newColor) => set({color: newColor}),
}))
export default useColorStore;