import create from 'zustand';
import {persist} from 'zustand/middleware';


const authStore = (set: any) => ({
    NumberOfIssues: 0,
    AllIssues: [],

    // increasePopulation: () => set((state: any) => ({bears : state.bears + 1})),
    // addUser: (user:any) => set({userProfile: user}),
    // removeUser: () => set({userProfile: null}),
})



const useAuthStore = create(
    persist(authStore, {
        name: 'auth'
    })
);

export default useAuthStore;