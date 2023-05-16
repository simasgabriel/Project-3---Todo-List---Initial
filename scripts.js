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
            localStorage.setItem('todos', JSON.stringify(this.todos));

    } else {
        alert('Por favor, preencha todos os campos');
    }

},
storeTodos(){
    localStorage.setItem("todos",JSON.stringify(this.todos));
}

},
created(){
    this.todos=localStorage.getItem('todos') ? JSON.parse(localStorage.getItem("todos")):this.todos;

},
updated(){
    
}
}


Vue.createApp(todosApp).mount('#app');



