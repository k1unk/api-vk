<template>
    <div class="friends">
        <p>Построить единый список друзей </p>
        <p>избранных пользователей</p>
        <div class="button" @click="findFriends">ПОСТРОИТЬ</div>
        <div class="select">
            Сортировать по:
            <select v-model="option">
                <option>Имя А-Я</option>
                <option>Имя Я-А</option>
                <option>Фамилия А-Я</option>
                <option>Фамилия Я-А</option>
            </select>
        </div>
        <Friend

            v-for="f in friends.sort((a,b)=>{
                if (option==='Имя А-Я') return (a.firstName+a.lastName).localeCompare((b.firstName+b.lastName))
                if (option==='Имя Я-А') return (b.firstName+b.lastName).localeCompare((a.firstName+a.lastName))
                if (option==='Фамилия А-Я') return (a.lastName+a.firstName).localeCompare((b.lastName+b.firstName))
                if (option==='Фамилия Я-А') return (b.lastName+b.firstName).localeCompare((a.lastName+a.firstName))
            })"
            @click="openFriend(f.id)"
            :friend="f"
        >
        </Friend>
    </div>
</template>

<style lang="scss" src="./users.scss">

</style>

<script>

import {mapActions, mapState} from "vuex";
import router from "@/main";
import Friend from "@/components/Users/Friend.vue";

export default {
    name: 'Friends',
    components: {Friend},
    data() {
        return {
            option: 'Имя А-Я'
        }
    },
    computed: {
        ...mapState({
            friends: state => state.users.friends,
        })
    },
    methods: {
        openFriend(id) {
            router.push(`friend/${id}`)
            this.setFriends(id)
        },
        ...mapActions({
            setFriends: 'users/setFriends',
            findFriends: 'users/findFriends'
        })
    },
}
</script>
