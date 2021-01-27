$(document).ready(function () {
    var history = new Vue({
        el: '#history-component'
    });

});

Vue.component('history-component', {
    template: `
    <br> <br> <br> <br>
    <div id="history">
        <div class="textarea justify">
            <br>
            <h1 id="nine_header">History</h1>
            <hr>

            <p>
            <h2>Here you can find more information about one of the oldest games of humankind: <b>Nine mens morris.</b></h2>
            </p>

        <p>
            <br>Nine Men’s Morris is an ancient game, popular in Ancient Rome and the medieval period.
            <br>No one really knows where and when the game originated.
            <br>The oldest building that has a Nine Men’s Morris board carved into its stones is an Egyptian temple at Kurna, Egypt, which dates to roughly 1400 BCE.
            <br>However, it is not known when the game board itself was carved into the Kurna temple’s roofing slabs; was it at the time of the construction or much later in history.
            <br>There are many Nine Men’s Morris carved into various buildings’ stones through out the Roman Empire and in the seats of many medieval cathedrals.
            <br>This game is known by many names, such as Mill or Windmill, most probably, because the shape of the board looks like a windmill, and Merrels, from the Latin word merellus, which means “gaming piece”.
            <br>The name Nine Men’s Morris seems to have been originated by Shakespeare in his play, A Midsummer Night’s Dream (Act II, Scene I), in which Titania refers to such a board by saying, “The nine men’s morris is filled up with mud”.
            <br>The rules of the game are well known, mostly because the game has been played continuously in Europe since the Roman period.

        </p>
        </div>

    </div>`
});