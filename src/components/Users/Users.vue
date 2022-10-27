<template>
    <div class="users">
        <div class="wrapper">
            <UsersFavourite/>
            <UsersSearch/>
            <Friends/>
        </div>
    </div>
</template>

<style lang="scss" src="./users.scss"></style>

<script>

import UsersFavourite from "@/components/Users/UsersFavourite";
import UsersSearch from "@/components/Users/UsersSearch";
import Friends from "@/components/Users/Friends";
export default {
    name: 'Users',
    components: {
        UsersSearch,
        UsersFavourite,
        Friends

    },
    data() {

    },
    methods: {

    },
}
</script>
