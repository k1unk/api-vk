<template>
    <div class="item">
        <div class="name">
            {{ firstName }}
            {{ lastName }}
        </div>
        <label>
            select
            <input
                type="checkbox"
                :checked="selected"
                @click="toggleSelected(id)"
            >
        </label>

        <div class="remove" @click="removeUser(id)">удалить</div>
    </div>
</template>

<style lang="scss" src="./users.scss"></style>

<script>

import {mapMutations} from "vuex";

export default {
    name: 'UsersFavouriteItem',
    components: {},
    props: {
        user: Object
    },
    data() {
        return {
            id: this.user.id,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            selected: this.user.selected

        }
    },
    methods: {
        ...mapMutations({
            toggleSelected: 'users/toggleSelected',
            removeUser: 'users/removeUser'
        })
    },
}
</script>
