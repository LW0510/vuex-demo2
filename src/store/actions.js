const actions = {
  incrementAsync({commit,state}){
    //异步操作
    var p = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve();
      },3000);
    });
    
    p.then(()=>{
      commit('increment');
    }).catch(()=>{
      console.log('异步操作');
    });
  }
}