<template>
    <transition name="slide-fade">
       
       <div v-show="isShow" :class="[alertContent]">
            <p :class="[alertTitle,]">
                {{title}}
            </p>
            <div :class="[alertDes]">
                <slot>
                    <p>
                        {{des}}
                    </p>
                </slot>
            </div>
           <div v-if="closeAble" :class="[closeContent,]" @click="close">
               {{closeText}}
           </div>
       </div>
    </transition>
</template>

<script>
import cg from '@/utils/config'

const alertType = {
    success:'-alert-success',
    warn:'-alert-warn',
    error:'-alert-error',
    default:'-alert-default'
}
const textAl = {
    'left':'left',
    'center':'center',
    'right':'right',
    0:'left',
    1:'center',
    2:'right',
}
export default {
    name: cg.NS + 'Alert',
    data(){
        return{
            isShow:true,
        }
    },
  
    props:{
        title:{
            type:String,
            default:'一条消息',
        },
        type:{
            type:String,
            default:'default'
        },
        des:{
            type:String,
            default:''
        },
        textAlign:{
            type:String|Number,
            default:'left'|0,
        },
        closeAble:{
            type:Boolean,
            default:true,
        },
        closeText:{
            type:String,
            default:'X',
        },
        showIcon:{
            type:Boolean,
            default:false,
        }

    },
    computed:{
        alertContent(){
            let al = textAl[this.textAlign];
            let tal = '';
            if(al && (al=='left'||al==0)){
                
            }else{
                tal = cg.NS + `-text-${al} `;
            }
            let type = alertType[this.type];
            return tal + cg.NS + type;
        },
        alertTitle(){
            let bold = '';
            if(this.des || this.$slots.default){
                bold = cg.NS + '-font-bold';
            }
            return cg.NS + '-alert-title ' + bold;
        },
        alertDes(){
            return cg.NS + '-alert-des';
        },
        closeContent(){
            return cg.NS + '-alert-close';
        }
    },
    methods:{
        close(){
            this.isShow = false;
            this.$emit('close');
        }
    }
}
</script>

