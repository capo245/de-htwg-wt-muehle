$(document).ready(function () {
    var start = new Vue({
        el: '#startgame'
    });
});

Vue.component('start-game', {
    template: `
    <br> <br> <br> <br>
    <div class="textarea center">
        <p>
            <strong>
                <br>Welcome to Nine Men's Morris in the lecture Webtechnologies at HTWG Konstanz. Enjoy!
            </strong>
        </p>
    </div>

    <div class="box align-content-center">
        <div class="inner">
                <span>
                    <a class="animation" href="/game">
                        Click here, its free!
                    </a>
                </span>
        </div>
        <div class="inner">
                <span>
                    <a class="animation" href="/game">
                        Start a new Game!
                    </a>
                </span>
        </div>
    </div>`
});