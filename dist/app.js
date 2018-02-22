(function () {
'use strict';

Vue.component('due-list', {
    props: {
        items: {
            type: Object
        }
    },
    methods: {
        emitDoneEvent: function (id) {
            this.$emit('done-event', id);
        },
        emitRemoveDueEvent: function (id) {
            this.$emit('remove-due-event', id);
        }
    },
    template: `<div class="list due" v-if='Object.keys(items).length'>
        <h2>Due ({{ Object.keys(items).length }})</h2>
        <div class="item" v-for='(item, id) in items'>
            <button class='btn btn-danger remove' v-on:click='emitRemoveDueEvent(id)'>x</button>
            <button class='btn btn-success second' v-on:click='emitDoneEvent(id)'>Done</button>
            {{ item.name }}
        </div>
    </div>`
});

Vue.component('done-list', {
    props: {
        items: {
            type: Object
        }
    },
    methods: {
        emitUndoDoneEvent: function (id) {
            this.$emit('undo-done-event', id);
        },
        emitRemoveDoneEvent: function (id) {
            this.$emit('remove-done-event', id);
        }
    },
    template: `<div class="list done" v-if='Object.keys(items).length'>
        <h2>Done ({{ Object.keys(items).length }})</h2>
        <div class="item" v-for='(item, id) in items'>
            <button class="btn btn-danger remove" v-on:click='emitRemoveDoneEvent(id)'>x</button>
            <button class="btn btn-info second" v-on:click='emitUndoDoneEvent(id)'>Undo</button>
            {{ item.name }}
        </div>
    </div>`
});

Vue.component('add-input', {
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    methods: {
        emitAddEvent: function () {
            if (this.value.length) {
                this.$emit('add-event', this.value);
                this.value = '';
            }
        },
        submit: function () {}
    },
    template: `<div class="row justify-content-center add-input">
        <div class='input-group'>
            <input class='form-control' type='text' maxlength='256'
                placeholder='Add new items here'
                v-on:keyup.enter='emitAddEvent'
                v-model='value'
                ref='input' />
            <span class='input-group-btn'>
                <button class='btn btn-info' v-on:click='emitAddEvent'>+</button>
            </span>
        </div>
    </div>`
});

var app = new Vue({
    el: '#app',
    data: function () {
        return {
            nextId: 0,
            items: {
                due: {},
                done: {}
            }
        };
    },
    methods: {
        add: function (value) {
            Vue.set(this.items.due, this.nextId++, {
                name: value
            });
        },
        done: function (id) {
            Vue.set(this.items.done, id, this.items.due[id]);
            Vue.delete(this.items.due, id);
        },
        undoDone: function (id) {
            Vue.set(this.items.due, id, this.items.done[id]);
            Vue.delete(this.items.done, id);
        },
        removeDue: function (id) {
            Vue.delete(this.items.due, id);
        },
        removeDone: function (id) {
            Vue.delete(this.items.done, id);
        }
    }
});

}());

//# sourceMappingURL=app.js.map
