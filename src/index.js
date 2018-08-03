
import Alert from './components/alert'

const components = [Alert];

const install = function(Vue,opts={}){
  components.map((component)=>{
    Vue.component(component.name,component);
  });
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  Alert
};