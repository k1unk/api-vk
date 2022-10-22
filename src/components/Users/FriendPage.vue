<template>
    <div class="users">
        <div class="friends">
            FRIENDS
            <div
                class="friend"
                v-for="friend in friendInfo.friends"
            >
                {{friend.id}}
                {{friend.first_name}}
                {{friend.last_name}}
            </div>
        </div>
        <div class="posts">
            POSTS
            <div v-for="post in friendInfo.posts"
                class="post"
            >
                {{post.text}}
            </div>
        </div>
        {{ this.$route.params.id }}
    </div>
</template>

<style lang="scss" src="./users.scss"></style>

<script>

import {mapState} from "vuex";

export default {
    name: 'FriendPage',
    components: {},
    computed: {
        ...mapState({
            friends: state => state.users.friends,
            friendInfo: state => state.users.friendInfo
        })
    },
    methods: {},
}
</script>
