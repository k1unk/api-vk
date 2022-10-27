<template>
    <div class="search">
        <div class="searchForm">
            <input
                type="text"
                v-model="searchQuery"
                placeholder="Поиск..."
            >
            <div
                class="button"
                @click="searchUsers_"
            >
                Найти
            </div>
        </div>
        <div class="list">
            <UsersSearchItem
                v-for="user in users"
                :key="user.id"
                :user="user"
            />
        </div>

    </div>
</template>

<style lang="scss" src="./users.scss"></style>

<script>

import {mapActions, mapState} from "vuex";
import UsersSearchItem from "@/components/Users/UsersSearchItem";

export default {
    name: 'UsersSearch',
    components: {UsersSearchItem},
    data() {

        return {
            searchQuery: ""
        }
    },
    methods: {
        ...mapActions({
            getUsers: 'users/getUsers',
            searchUsers: 'users/searchUsers',
            findFriends: 'users/findFriends'
        }),
        searchUsers_() {
            this.searchUsers(this.searchQuery)
        },
    },
    computed: {
        ...mapState({
            users: state => state.users.usersSearch,
            friends: state => state.users.friends,
        })
    }
}
</script>
