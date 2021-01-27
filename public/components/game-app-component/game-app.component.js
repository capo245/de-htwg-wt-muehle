$(document).ready(function () {
    var muehle = new Vue({
        el: '#muehle-app'
    });
});

Vue.component('game', {
    template: `

    <div id="start-page" class="container text-center">
      <div class="row title"><h1 class="blink-title">MILL GAME</h1></div>
      <div class="player-names-input">
        <h4>Enter Player Names:</h4>
        <div class="name-input">
          Player 1: <input type="text" name="player-1-name"><br>
        </div>
        <div class="name-input">
          Player 2: <input type="text" name="player-2-name"><br>
        </div>
      </div>
      <button class="button" id="new-game" >Start Game</button>
    </div>

    <div id="game-page" class="container text-center" hidden>

        <div class="container text-center">
        <!-- messages -->
        <div class="row messages"></div>
        </div>

      <!-- game -->
      <div class="row game">

        <!-- Player 1 Stats -->
        <div class="col-xs-3 player-stats-1">
          <div class="row">
            <div class="col-xs-12 player-name">Player 1</div>
          </div>
          <div class="row pieces">
            <div class="col-xs-6 captured-pieces">Captured Pieces</div>
            <div class="col-xs-6 own-pieces">Own Pieces</div>
          </div>
        </div>

        <!-- Board -->
        <div class="col-xs-6">
          <div class="game-container">
            <div class="quarter-box-top-left bottom-border">
            </div>
            <div class="quarter-box-bottom-left"></div>
            <div class="quarter-box-right"></div>
            <div class="outer-box">
              <div id="node-1" class="node"></div>
              <div id="node-2" class="node"></div>
              <div id="node-3" class="node"></div>
              <div id="node-10" class="node"></div>
              <div id="node-15" class="node"></div>
              <div id="node-22" class="node"></div>
              <div id="node-23" class="node"></div>
              <div id="node-24" class="node"></div>
              <div class="middle-box">
                <div id="node-4" class="node"></div>
                <div id="node-5" class="node"></div>
                <div id="node-6" class="node"></div>
                <div id="node-11" class="node"></div>
                <div id="node-14" class="node"></div>
                <div id="node-19" class="node"></div>
                <div id="node-20" class="node"></div>
                <div id="node-21" class="node"></div>
                <div class="inner-box">
                  <div id="node-7" class="node"></div>
                  <div id="node-8" class="node"></div>
                  <div id="node-9" class="node"></div>
                  <div id="node-12" class="node"></div>
                  <div id="node-13" class="node"></div>
                  <div id="node-16" class="node"></div>
                  <div id="node-17" class="node"></div>
                  <div id="node-18" class="node"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Player 2 Stats -->
        <div class="col-xs-3 player-stats-2" style="opacity:0.25;">
          <div class="row">
            <div class="col-xs-12 player-name">Player 2</div>
          </div>
          <div class="row pieces">
            <div class="col-xs-6 own-pieces">Own Pieces</div>
            <div class="col-xs-6 captured-pieces">Captured Pieces</div>
          </div>
        </div>

      </div><!-- game row -->

      <!-- buttons -->
      <div class="row buttons">
        <div class="col-xs-12">
          <button class="btn" type="button" name="cancel" id="cancel">Cancel Selection</button>
        </div>
      </div>

    <div class="container text-center winner-page" hidden="true">
      <div class="row title"><h1>MILL GAME</h1></div>
      <div class="winner-message"></div>
      <button class="btn play-again">Play Again</button>
    </div>

    `
});
