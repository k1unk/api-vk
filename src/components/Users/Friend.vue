<template>
    <div class="friend" :style="cssProps">
        <div class="photo-and-name">
            <img :src="friend.photo">
            <div class="name">
                <p> {{ friend.firstName }} </p>
                <p> {{ friend.lastName }} </p>
            </div>
        </div>
        <div class="age">Возраст: {{ friend.age ? friend.age : "не указан" }}</div>
        <div class="sex">Пол: {{ friend.sex==="M" ? "Мужской" : "Женский" }}</div>

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
