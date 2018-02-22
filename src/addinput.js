export default Vue.component('add-input', {
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    methods: {
        emitAddEvent: function(){
            if(this.value.length){
                this.$emit('add-event', this.value);
                this.value = '';
            }
        },
        submit: function(){

        }
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
