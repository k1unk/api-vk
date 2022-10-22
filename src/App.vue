<template>
    <div>
        <router-view/>
    </div>
</template>

<style lang="scss" src="./app.scss"></style>
<script>
import Users from "@/components/Users/Users";
export default {
    name: 'App',
    components: {Users}
}
</script>
