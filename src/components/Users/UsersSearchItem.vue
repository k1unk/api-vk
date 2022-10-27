<template>
    <div class="item">
        <div class="info">
            <div class="name"> {{ firstName }}
                {{ lastName }}
            </div>
            <div class="id">id: {{ id }}</div>
        </div>
        <div
            class="button"
            @click="addUserFavourite({id, firstName, lastName})"
        >
            Добавить в избранное
        </div>
    </div>
</template>

<style lang="scss" src="./users.scss"></style>

<script>

import {mapActions, mapMutations} from "vuex";

export default {
    name: 'UsersSearchItem',
    components: {},
    props: {
        user: Object
    },
    data() {
        return {
            id: this.user.id,
            firstName: this.user.first_name,
            lastName: this.user.last_name,
        }
    },
    methods: {
        ...mapMutations({
            addUserFavourite: "users/addUserFavourite"
        })
    }
}
</script>
