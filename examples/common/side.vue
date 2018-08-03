<template>
      <div class="nwd-side">
         <ul>
             <li v-for="(i,v) in data" :key="i">{{v}}</li>
         </ul>
        <slot></slot>
    </div>
</template>

<script>
export default {
    data(){
        return{
            data:100,
        }
    }
}
</script>

<style lang="stylus" scoped>
    .nwd-side{
        width 300px;
        overflow auto;
    }
</style>
