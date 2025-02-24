<template>
    <h1>{{ name }}</h1>
    <p>Counter : {{ counter }}</p>
    <p>Full name : {{ getFullName(firstName,lastName) }}</p>
    <p>UpperFirst result : {{ UpperFirst(text) }}</p>
</template>

<script>
export default {
    name: 'Home',
    props:{
        
    },
    data(){
        return{
            name: 'Bob Cat',
            firstName: 'Bob',
            lastName: 'Cat',
            counter: 0,
            value1: 'hello world',
            value2: 'HELLO WORLD'
        }
    },
    mounted(){
        setInterval(() => {
            this.counter++
        }, 1000);
    },
    methods: {
        // getFullName(){
        //     return this.firstName + ' ' + this.lastName
        // }
        getFullName: function(first,last) {
            return {
                name : first + ' ' + last
            }
        },
        // UpperFirst: function(value){
        //     //value = 'hello world' => 'Hello World'
        //     //value = 'HELLO WORLD' => 'Hello World'
        //     var word = value.toLowerCase()
        //     word = value.split(' ')
        //     for(var i=0; i<word.length; i--){
        //         word[i].chatAt(0).toUpperCase()
        //     }
        //     return word
        // }
    }
}
</script>