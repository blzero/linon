<template>
    <div class="nwd-header-wrap">
       <div class="nwd-header-con">
           header
       </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
    .nwd-header-wrap{
        position fixed;
        left 0;
        top 0;
        right 0;
        width 100%;
        height 80px;
        z-index 888;
        // border-bottom 1px solid #eee;
        box-shadow 1px 1px #ccc;
    }
    .nwd-header-con{
        max-width 1100px;
        margin  0 auto;
    }
    
</style>
