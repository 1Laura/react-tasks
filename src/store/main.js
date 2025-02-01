import {create} from "zustand";

const useUserStore = create((set) => ({
    username: null,//default
    userPassword: null,
    error:null,
    setUsername:(newUserName)=>set({username:newUserName}),
    setUserPassword:(UserPassword)=>set({userPassword:UserPassword}),
    setError: (newError) => set({error: newError}),
}))
export default useUserStore;