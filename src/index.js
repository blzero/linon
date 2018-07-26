
import Alert from '@/components/alert'

const components = [Alert];

const install = function(Vue,opts={}){
  components.map((component)=>{
    Vue.component(component.name,component);
  });
}

export default {
  install,
  Alert
};