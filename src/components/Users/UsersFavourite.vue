<template>
    <div class="favourite">
        <div class="header">Избранные пользователи</div>
        <div class="list" v-if="users.length>0">
            <UsersFavouriteItem
                v-for="user in users"
                :key="user.id"
                :user="user"
            />
        </div>
        <div class="no-users" v-else>У вас пока что нет избранных пользователей</div>
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
            friends: state => state.users.friends,
            s:state => state
        })
    }
}
</script>
