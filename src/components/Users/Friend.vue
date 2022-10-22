<template>
    <div class="friend" :style="cssProps">
        {{ friend.firstName }} {{ friend.lastName }} {{ friend.counter }}
        <img :src="friend.photo">
        {{ friend.age ? friend.age : "" }}
    </div>
</template>

<style lang="scss" src="./users.scss">

</style>

<script>

export default {
    name: 'Friends',
    components: {},
    props: {
        friend: Object
    },
    computed: {
        cssProps() {
            return {
                '--color': "rgb(" + (100 + 50 * this.friend.counter) + "," + (100 + 50 * this.friend.counter) + "," + (100 + 50 * this.friend.counter) + ")"//(this.friend.counter * 2),
            }
        }
    }
}
</script>
