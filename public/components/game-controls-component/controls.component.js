$(document).ready(function () {
    var muehleControls = new Vue({
        el: '#muehle-app-controls'
    });
});

Vue.component('game-controls', {
    template: `
    <br> <br> <br>
    <div class="text-center">
         <div class="btn-group btn-group-justified" role="group" aria-label="...">
              <div class="text-center">
                  <div class="buttons mt-5">
                   <div class="btn-group col mb-3" role="group">
                       <a href="/"<i class="btn btn-default"></i>  Rules </a>
                       <a id="start_game" href="" <i class="btn btn-default"></i>  Start a new Game </a>
                       <a id="undo" href="" <i class="btn btn-default"></i> Undo </a>
                       <a id="redo" href="" <i class="btn btn-default"></i> Redo </a>
                       <a id="save" href="" <i class="btn btn-default"></i> Save </a>
                       <a id="load" href="" <i class="btn btn-default"></i> Load </a>
                       <a href="/" <i class="btn btn-default"></i> Quit </a>
                   </div>
                   </div>
              </div>
         </div>
    </div>`
});