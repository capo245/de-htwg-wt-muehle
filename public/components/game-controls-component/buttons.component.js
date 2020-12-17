let buttons = [
    {text: "Rules",id: "bt_rules"},
    {text: "Start a new Game", id: "bt_newgame"},
    {text: "Undo", id: "btn_undo"},
    {text: "Redo", id: "btn_redo"},
    {text: "Save", id: "btn_save"},
    {text: "Load", id: "btn_load"},
    {text: "Quit", id: "btn_quit"},
    ];

$(document).ready(function () {
    var muehleControls = new Vue({
        el: '#muehle-app-buttons'
    });
});

Vue.component('buttons', {
    template: `
            <div class="list-group list-group-horizontal">
            <button v-for="button in buttons" v-bind:id="button.id" class="btn btn-primary list-group-item flex-fill"> {{button.text }} </button>
            </div>
    `,
    data: function () {
        return {
            buttons: buttons
        }
    },

});