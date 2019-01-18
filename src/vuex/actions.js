export default{
    getParamSync (context,Object) {
       // state.START_PARMA = Object
       setTimeout(() => {
       		context.commit('getParam', Object)
       },1000)
    },

    setMenuList() {
        
    },
}