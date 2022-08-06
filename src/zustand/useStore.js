import create from 'zustand'

export const useUsersStore = create((set) => ({
    users: [],
    currentUser: { username: '', password: '', _id: '', avatar: '' },
    setUsers: (users) => set((state) => ({ users: users })),
    setCurrentUser: (currentUser) => set((state) => ({ currentUser: currentUser }))
}));
