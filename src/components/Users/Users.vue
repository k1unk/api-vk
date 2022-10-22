<template>
    <div class="users">
        <UsersFavourite/>
        <UsersSearch/>
    </div>
</template>

<style lang="scss" src="./users.scss"></style>

<script>

import UsersFavourite from "@/components/Users/UsersFavourite";
import UsersSearch from "@/components/Users/UsersSearch";
export default {
    name: 'Users',
    components: {
        UsersSearch,
        UsersFavourite

    },
    data() {

    },
    methods: {

    },
}
</script>
