var todos = [
{
    text:"Aprender HTML, CSS e Javascript",
    done:true
},
{
    text:"Completar o desafio de Vue JS com excelência",
    done:false
},


];




const todosApp={
    data(){
        return{
            todos:window.todos,
            newTodo:{
                text:'',
                done:false
            }
        }   
    },
    methods:{
        
        
        addTodo: function(){

            if(this.newTodo.text){
            this.todos.push(this.newTodo);
            this.newTodo={
                done:false
            };

    } else {
        alert('Por favor, preencha todos os campos');
    }

}


}
}


Vue.createApp(todosApp).mount('#app');