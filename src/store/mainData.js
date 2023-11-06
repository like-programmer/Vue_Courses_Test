import {courses} from "@/config/courses";

const state = () => ({
    username: '',
    courses: null,
    progress: {},
});

const actions = {
    getUserData({commit, state}) {
        if(!localStorage.getItem('userName')) {
            localStorage.setItem('userName', JSON.stringify(state.username))
        }

        let users = JSON.parse(localStorage.getItem('users'))

        if(!users) {
            const initUsers = [{
                username: state.username,
                courses: courses,
                progress: state.progress
            }];
            localStorage.setItem('users', JSON.stringify(initUsers))
            users = initUsers
        }

        commit('setUser', users)
    },

    saveNewTry({commit, state}, tryData) {
        const users = JSON.parse(localStorage.getItem('users'))

        users.map(user => {
            if(user.username === state.username) {
                const courseProgress = user.progress[tryData.courseId] || {}
                const lessonProgress = courseProgress[tryData.lessonId] || []
                lessonProgress.push(tryData.dateTme)

                user.progress = {
                    ...user.progress,
                    [tryData.courseId]: {
                        ...user.progress[tryData.courseId],
                        [tryData.lessonId]: lessonProgress
                    }
                }
            }
        })

        localStorage.setItem('users', JSON.stringify(users));

        commit('updateTries', users.find(user => user.username === state.username).progress);
    },

    logout({commit}) {
        localStorage.removeItem('userName')
        // localStorage.removeItem('users')
        //TODO: Заради пункту про безпеку, я б видалила дані по юзерам, але оскільки я не маю беку для збереження та отримання даних при повторному вході - я використовувала localStorage
        commit('removeUser')
    }
};

const getters = {
    courses: (state) => state.courses,
    username: (state) => state.username,
    progress: (state) => state.progress,
};

const mutations = {
    setUser(state, users) {
        const userIndex = users.findIndex((user) => user.username === state.username)

        if(userIndex >= 0) {
            state.courses =  users[userIndex].courses
            state.progress =  users[userIndex].progress
        }

        if(userIndex < 0) {
            localStorage.setItem('users', JSON.stringify(
                [
                    ...users,
                    {
                        username: state.username,
                        courses: courses,
                        progress: {}
                    }
                ]
            ))
            state.courses =  courses
        }
    },

    setUsername(state, username) {
        state.username = username;
    },

    updateTries(state, data) {
        state.progress = data;
    },

    removeUser(state) {
        state.username = '';
        state.courses = null;
        state.progress = {};
    }
};

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
};
