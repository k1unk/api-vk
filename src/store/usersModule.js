import fetchJsonp from "fetch-jsonp";

const BASE_URL = `https://api.vk.com/method`
let access_token = "vk1.a.2zR5mgYficCUjByL-_ZVI6rdQGMi-SgcoiAujoXG4YaJfGcxB-J0lY89DUkQgUABXJ9699qbR2XW_O_u672QWuNfsyzLgLmh9ovHu22sySSMGZ2kugpES7Kcz40vHksdICiJbhrv1-pQnDEAxyJ3p8a_Pl1K92Rjiqz1nY-B_7ua0Kw0NVp4HkEGyCx8R3ewD4IJEmyxSXxd2BcPDQaFMg"

let getAge = (date) => {
    return date
        ? Math.floor((new Date() - new Date(date).getTime()) / 3.15576e+10)
        : ""
}

export const usersModule = {
    state: () => ({
        usersFavourite: [],
        usersSearch: [],
        friends: [],
        friendInfo: {
            info: {},
            friends: [],
            posts: []
        }
    }),
    getters: {
        getUsersFavourite(state) {
            return state.usersFavourite
        },
    },
    mutations: {
        setUsersFavourite(state, usersFavourite) {
            state.usersFavourite = usersFavourite
        },
        addUserFavourite(state, {id, firstName, lastName}) {
            state.usersFavourite.push({
                id, firstName, lastName, selected: false
            })
        },
        removeUser(state, id) {
            let arr = []
            for (let i = 0; i < state.usersFavourite.length; i++) {
                if (state.usersFavourite[i].id !== id) {
                    arr.push(state.usersFavourite[i])
                }
            }
            state.usersFavourite = arr
        },
        toggleSelected(state, id) {
            for (let i = 0; i < state.usersFavourite.length; i++) {
                if (state.usersFavourite[i].id === id) {
                    state.usersFavourite[i].selected = !state.usersFavourite[i].selected
                }
            }
        },
        setUsersSearch(state, usersSearch) {
            state.usersSearch = usersSearch
        },
        setFriends(state, friends) {
            let n = friends.map(e => {
                return {
                    id: e.id,
                    counter: e.counter,
                    firstName: e.first_name,
                    lastName: e.last_name,
                    sex: e.sex === 2 ? "M" : "F",
                    age: getAge(e.bdate),
                    photo: e.photo_100
                }
            })
            state.friends = n
        },
        setFriendInfo(state, {info, friends, posts}) {
            state.friendInfo.info = info
            state.friendInfo.friends = friends
            state.friendInfo.posts = posts
        },
    },
    actions: {
        async setFriends(context, id) {
            let URL = `${BASE_URL}/friends.get?v=5.81&access_token=${access_token}&user_id=${id}&fields=sex,bdate,city,photo_100`

            let response = await fetchJsonp(URL, {
                mode: 'no-cors',
                method: 'GET',
            })
            let responseJson = await response.json()
            let friends = await responseJson.response.items
            let friendsNeed = []
            for (let i = 0; i < friends.length; i++) {
                for (let j = 0; j < context.getters.getUsersFavourite.length; j++) {
                    if (context.getters.getUsersFavourite[j].id === friends[i].id) {
                        friendsNeed.push(friends[i])
                    }
                }
            }

            URL = `${BASE_URL}/wall.get?v=5.81&access_token=${access_token}&owner_id=${id}`

            response = await fetchJsonp(URL, {
                mode: 'no-cors',
                method: 'GET',
            })
            responseJson = await response.json()
            let posts = await responseJson.response.items

            URL = `${BASE_URL}/users.get?v=5.81&access_token=${access_token}&user_ids=${id}`

            response = await fetchJsonp(URL, {
                mode: 'no-cors',
                method: 'GET',
            })
            responseJson = await response.json()
            let info = await responseJson.response[0]
            context.commit('setFriendInfo', {info, friends: friendsNeed, posts})
        },
        async searchUsers(context, query) {
            const URL = `${BASE_URL}/users.search?v=5.81&access_token=${access_token}&q=${query}&count=10&offset=0`

            let response = await fetchJsonp(URL, {
                mode: 'no-cors',
                method: 'GET',
            })
            let responseJson = await response.json()
            let items = await responseJson.response.items
            items.map(e => {
                e.selected = false
                return e
            })
            context.commit('setUsersSearch', items)
        },
        async findFriends({commit, getters}) {
            let allFriends = []
            for (const user of getters.getUsersFavourite) {
                if (user.selected) {
                    let id = user.id
                    const URL = `${BASE_URL}/friends.get?v=5.81&access_token=${access_token}&user_id=${id}&fields=sex,bdate,city,photo_100`

                    let response = await fetchJsonp(URL, {
                        mode: 'no-cors',
                        method: 'GET',
                    })
                    let responseJson = await response.json()
                    let items = await responseJson.response.items
                    for (const item of items) {
                        allFriends.push(item)
                    }
                }

            }
            allFriends.sort((a, b) => a.id - b.id);
            let sortedFriends = []
            let lastId = 0;
            for (let i = 0; i < allFriends.length; i++) {
                let newEl = allFriends[i]
                if (lastId === allFriends[i].id) {
                    sortedFriends[sortedFriends.length - 1].counter += 1
                } else {
                    newEl.counter = 1
                    sortedFriends.push(newEl)
                }
                lastId = allFriends[i].id
            }
            commit('setFriends', sortedFriends)
        }


    },
    namespaced: true
}
