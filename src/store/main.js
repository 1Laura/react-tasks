import {create} from "zustand";

const useUserStore = create((set) => ({
    users: [],
    currentUser: null,
    error: null,
    logUser: false,
    posts: [],

    registerUser: (newUsername, newPassword) => {
        set((state) => {
            // JavaScript metodas .some(), kuris naudojamas patikrinti, ar bent vienas elementas masyve atitinka nurodytą sąlygą
            if (state.users.some(user => user.username === newUsername)) {
                return {error: "Username is already in use."}
            }
            const newUser = {
                username: newUsername,
                password: newPassword,
                avatar: "https://fastly.picsum.photos/id/991/200/300.jpg?hmac=BdTxfK2wHhsGppraQzb5puxPKb5mPVzDaZPz8IiC44Q",
            };
            return {
                users: [...state.users, newUser],
                error: null,
                currentUser: newUser,
            }
        });
    },

    loginUser: (username, password, navigate) => {
        set((state) => {
            const loggedUser = state.users.find(user => user.username === username && user.password === password);
            if (loggedUser) {
                navigate("/profile");
                return {currentUser: loggedUser, error: null, logUser: true};
            } else {
                return {error: "Invalid username or password."};
            }
        })
    },

    logoutUser: (navigate) => {
        set(() => {
            navigate("/");
            return {logUser: false, currentUser: null};
        });
    },

    updateAvatar: (newAvatarUrl) => {
        set((state => {
            if (state.currentUser) {
                const updateUserAvatar = {...state.currentUser, avatar: newAvatarUrl};
                return {currentUser: updateUserAvatar};
            } else {
                return {};
            }
        }))
    },

    createPost: (newImageUrl, newTitle, newDescription) => {
        set((state => {
            const newPost = {
                imageUrl: newImageUrl,
                description: newDescription,
                title: newTitle,
                id: Date.now().toString(),
                comments: [],
                likes: 0,
                likedBy: [],
            };
            return {
                posts: [...state.posts, newPost],
            }
        }))
    },
    addComment: (newPostId, newUsername, newCommentText) => {
        set((state => {
            const updatePosts = state.posts.map(post => {
                if (post.id === newPostId) {
                    return {
                        ...post,
                        comments: [...post.comments, {user: newUsername, text: newCommentText}]
                    };
                }
                return {post}
            })
            return {posts: updatePosts}
        }))
    },

    likePost: (postId, username) => {
        set((state) => {
            const updatePosts = state.posts.map(post => {
                if (post.id === postId && !post.likedBy.includes(username)) {
                    return {
                        ...post,
                        likes: post.likes + 1,
                        likedBy: [...post.likedBy, username]
                    };
                }
                return {post}
            })
            return {posts: updatePosts}
        })
    },

    setError: (newError) => set({error: newError}),
}));

export default useUserStore;