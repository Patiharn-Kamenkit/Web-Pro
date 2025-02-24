<template>
    <h1>{{ name }}</h1>
    <p>Counter : {{ counter }}</p>
    <p>Full name : {{ getFullName(firstName, lastName) }}</p>
    <p>UpperFirst result : {{ UpperFirst(value1) }}</p>
    <p>UpperFirst result : {{ UpperFirst(value2) }}</p>
    <a v-bind:href=" url ">Visit vue page</a>
    <span v-bind:title="url">test message</span><br><br><br>
    <div>
        <p>Title: {{this.title}}</p>
        <p>Released: {{this.release}}</p>
        <p>Movie is: {{movie()}}</p>
    </div>
    <div v-bind:title="this.title">
        Hover your mouse here
    </div>
    <br><br>

    <div>
        <input type="text" v-on:keyup="$event => onKeyupHander($event)">
        <p> Output:{{ names }}</p>

    </div>


    <!-- <button v-on:click.once="clickHandler('hello')">Click here</button>
    <input type="text" v-on:keyup.space="clickHandler('hello')">
    <input type="text" v-model="value">
    <p>{{ value }}</p>
    <div v-html="html"></div>

    <p v-if="itemsInStock>10">{{ itemsInStock }} is in stock</p>
    <p v-else-if="itemsInStock>0">hurry up there are just few items left!</p>
    <p v-else>we are all out</p>

    <p v-show="isShow">you can see this data</p>
    <p v-show="!isShow">hidden</p>
    <button @click="clickHandler('hello')">Click here</button>
    <p v-if="release"></p>
    <ul>
        <li v-for="title in titles" :key="title">{{ title }}</li>
    </ul> -->
  </template>
  
  <script>
  export default {
    name: 'Home',
    data() {
      return {
        titles: ['Vue Js','React Js', 'Angular Js'],
        name: 'Bob Cat',
        firstName: 'Bob',
        lastName: 'Cat',
        counter: 0,
        value: "hello",
        value1: 'hello world',
        value2: 'HELLO WORLD',
        //url = 'www.vuejs.com',
        itemsInStock: 15,
        isShow: false,
        title: "Star War",
        release: "1980",
        names: ''
      };
    },
    mounted() {
      setInterval(() => {
        this.counter++;
      }, 1000);
    },
    methods: {
      getFullName(first, last) {
        return first + ' ' + last;
      },

      UpperFirst(value) {
        return value.split(' ').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join(' '); 
      },

      clickHandler: function(message){
        alert(message)
      },
      movie: function(){
        if(this.release < 2000){
            return "old"
        }
        else return "new"
      },
      onKeyupHander: function(event){
        this.names = event.target.value
      }
    }
  }
  </script>
  