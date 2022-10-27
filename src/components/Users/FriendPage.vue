<template>
    <div class="friend-page">
        <div class="wrapper">
            <div class="info">
                {{ friendInfo.info.first_name }}
                {{ friendInfo.info.last_name }}
            </div>
            <div class="friends">
                Друзья, выбранные в избранном:
                <div
                    class="friend-item"
                    v-for="friend in friendInfo.friends"
                >
                    {{ friend.first_name }}
                    {{ friend.last_name }}
                </div>
            </div>
            <div class="posts">
                <p>Посты</p>
                <div v-for="post in friendInfo.posts"
                     class="post"
                >
                    <div class="date">Дата: {{ (new Date(post.date * 1000)).toLocaleDateString() }}</div>
                    <div class="text">Текст: {{ post.text ? post.text : 'отсутствует' }}</div>
                </div>
            </div>
        </div>

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
