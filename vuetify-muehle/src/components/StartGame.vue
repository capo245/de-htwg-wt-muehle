<template>
  <div class="rules pa-16">

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
          </div>
      </div>
</template>


<style>
a.animation {
    text-decoration: none;
    color: #343a40;
}
a.animation:hover {
    text-decoration: none;
    color: #007bff;
}

.box {
    justify-content: center;
    display: flex;
}

.box .inner {
    width: 2000px;
    height: 80px;
    line-height: 80px;
    font-size: 2.5em;
    font-family: sans-serif;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
}

.box .inner:first-child {
    background-color: none;
    color: darkred;
    transform-origin: left;
    transform: perspective(100px) rotateY(0deg);
}

.box .inner:last-child {
    background-color: none;
    color: antiquewhite;
    transform-origin: right;
    transform: perspective(100px) rotateY(0deg);
}

.box .inner span {
    position: absolute;
    animation: marquee 6s linear infinite;
}

.box .inner:first-child span {
    animation-delay: 3s;
    left: -100%;
}

@keyframes marquee {
    from {
        left: 100%;
    }

    to {
        left: -100%;
    }
}
</style>