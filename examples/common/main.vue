<template>
    <div class="nwd-main">
        <nwdSide></nwdSide>
        <slot></slot>
    </div>
</template>

<script>
import nwdSide from './side'

export default {
    components:{
        nwdSide
    }
}
</script>

<style lang="stylus" scoped>
    .nwd-main{
        display  flex;
        flex 1;
        overflow hidden;
    }
</style>
