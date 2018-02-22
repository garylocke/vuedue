export default Vue.component('due-list', {
    props: {
        items: {
            type: Object
        }
    },
    methods: {
        emitDoneEvent: function(id){
            this.$emit('done-event', id);
        },
        emitRemoveDueEvent: function(id){
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
