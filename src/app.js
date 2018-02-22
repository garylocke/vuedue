import DueList from './duelist'
import DoneList from './donelist'
import AddInput from './addinput';

var app = new Vue({
    el: '#app',
    data: function(){
        return {
            nextId: 0,
            items: {
                due: {},
                done: {}
            }
        };
    },
    methods: {
        add: function(value){
            Vue.set(this.items.due, this.nextId++, {
                name: value
            });
        },
        done: function(id){
            Vue.set(this.items.done, id, this.items.due[id]);
            Vue.delete(this.items.due, id);
        },
        undoDone: function(id){
            Vue.set(this.items.due, id, this.items.done[id]);
            Vue.delete(this.items.done, id);
        },
        removeDue: function(id){
            Vue.delete(this.items.due, id);
        },
        removeDone: function(id){
            Vue.delete(this.items.done, id);
        }
    }
});