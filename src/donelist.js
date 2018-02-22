export default Vue.component('done-list', {
    props: {
        items: {
            type: Object
        }
    },
    methods: {
        emitUndoDoneEvent: function(id){
            this.$emit('undo-done-event', id);
        },
        emitRemoveDoneEvent: function(id){
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
