<template>
    <div class="friends">
        <Friend

            v-for="f in friends"
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
    data(){
      return {
          zxc: 40
      }
    },
    computed: {
        ...mapState({
            friends: state => state.users.friends,
        })
    },
    methods: {
        openFriend(id){
            router.push(`friend/${id}`)
            this.setFriends(id)
        },
        ...mapActions({
            setFriends: 'users/setFriends'
        })
    },
}
</script>
