import Vue from 'vue';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

Vue.mixin({
  methods:{
    async callApi(method, url, dataObj){
      try{
        let data = await this.$axios({
          method: method,
          url: url,
          data: dataObj
        })
        return data
      }catch (e){
        return e.response
      }
    },
  }
})
