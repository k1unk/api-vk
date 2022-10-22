<template>
    <div class="favourite">
        <div class="header">My Favourite Users</div>
        <div class="list">
            <UsersFavouriteItem
                v-for="user in users"
                :key="user.id"
                :user="user"
            />
        </div>
        <div @click="findFriends">построить</div>
        <Friends/>
    </div>
</template>

<style lang="scss" src="./users.scss"></style>

<script>

import {mapActions, mapState} from "vuex";
import UsersFavouriteItem from "@/components/Users/UsersFavouriteItem";
import Friends from "@/components/Users/Friends.vue";

export default {
    name: 'UsersFavourite',
    components: {UsersFavouriteItem, Friends},
    data() {

        return {
            searchQuery: ""
        }
    },
    methods: {
        ...mapActions({
            getUsers: 'users/getUsers',
            findFriends: 'users/findFriends'
        })
    },
    computed: {
        ...mapState({
            users: state => state.users.usersFavourite,
            friends: state => state.users.friends
        })
    }
}
</script>
