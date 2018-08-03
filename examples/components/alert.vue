<template>
    <div >
        <div @click="addAlert">
            add
        </div>
        <nwd-alert></nwd-alert>
        <nwd-alert type='success' des='xxxxxxxx' textAlign='1'></nwd-alert>
        <nwd-alert type='error' textAlign='2'></nwd-alert>
        <nwd-alert type='warn' textAlign='center' closeText='知道了'>
        <p>
            在向具名插槽提供内容的时候，我们可以在一个父组件的 元素上使用 slot 特性：
        </p>

        </nwd-alert>
        <div >
        <nwd-alert v-for="(v,i) in alertData" :key="i" :type='v.type'></nwd-alert>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            timer:'',
            count:0,
            alertData:[],
        }
    },
    mounted(){
        this.atuoAdd();
    },
    methods:{
    addAlert(){
    this.count++;
      let data={
          type:'success',
      }

      this.alertData.push(data);
        if(this.count>40){
            clearTimeout(this.timer);
        }else{
            this.atuoAdd();
        }

    },
    atuoAdd(){
       this.timer = setTimeout(this.addAlert,100);
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
