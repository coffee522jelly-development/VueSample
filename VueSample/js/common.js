/*チェックボックス要素*/
const app = new Vue({
    el:'#app',
    data:{
        isChecked: false
    }
})

/*セレクトボックス要素*/
var app2 = new Vue({
    el: '#app2',
    data: {
      selectValue: ''
    }
})

/*インプット要素*/
const URL_API = "https://api.zipaddress.net/";
const vm = new Vue ({
  el: '#app3',
  data: {
    inputZip:'',
    defaultZip:'1000000',
    results:''
  },
  computed: {
    computedZip: function(){
      return !isNaN(this.inputZip) && this.inputZip.length == 7 ? this.inputZip : this.defaultZip
    }
  },
  methods: {
    getAddress: function(z){
      let params = {params:{zipcode: z}};
      axios.get(URL_API, params)
           .then(res => {
        this.results = res.data.code == 200 ? res.data.data.fullAddress : res.data.message;
      });
    }
  },
    filters: {
    filterZip: function(d){
      let buf = ('0000000'+d).slice(-7);
      return isNaN(buf) ? '1000000' : buf
      }
  }
})

/*範囲選択要素*/
var app4 = new Vue({
    el: '#app4',
    data() {
      return {
        rangeValue: 50,
      }
    }
})

/*ラジオボタン要素*/
var app5 = new Vue({
  el: '#app5',
  data: {
    value: '???円'
  }
})