<template>
    <div class="demo-index">
        <nwdHeader></nwdHeader>
       
        <nwdMian>
           <div class="nwd-com">
                <router-view>

                </router-view>
           </div>
        </nwdMian>
    </div>

</template>

<script>
import nwdHeader from '../common/header'
import nwdMian from '../common/main'
export default {
    data(){
        return{
            
        }
    },
    components:{
        nwdHeader,
        nwdMian
    }
}
</script>

<style lang="stylus" scoped>
    .demo-index{
        display flex;
        flex-direction column;
        max-width 1100px;
        margin 0 auto;
        height 100%;
        overflow hidden;
        padding-top  80px;
    }
    .nwd-com{
        flex 1;
        height 100%;
        overflow auto;
    }
</style>
