<script>
  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const anchor = document.getElementById("anchor");
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;
    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)
    const eyes = document.querySelectorAll(".eye")
    eyes.forEach(eye => {
      eye.style.transform = `rotate(${90+angleDeg}deg)`
    })
  });

  const angle = (cx, cy, ex, ey) => {
    const dy = ey-cy
    const dx = ex-cx
    const rad = Math.atan2(dy,dx)
    const deg = rad*180/Math.PI
    return deg
  };

</script>

<div class="main">
    <img id="anchor" src="/image/look-morty.png" />
    <div id="eyes">
        <img class="eye eye-morty" src="/image/eyeball.png"style="top: 61px; bottom: 0px; left: -130px"/>
        <img class="eye eye-morty" src="/image/eyeball.png" style="top: 46px; left: -52px;"  />
        <img class="eye eye-rick" src="/image/eyeball.png" style="top: -100px;left: 34px" />
        <img class="eye eye-rick" src="/image/eyeball.png" style="top: -105px;left: 99px" />
    </div>
</div>

<style>
    .main {
        display: grid;
        place-items: center;
        min-height: 20vh;
        position: relative;
    }
    #eyes,
    #eyes img {
        position: absolute;
    }
    .eye-morty{
        width:60px
    }
    .eye-rick{
        width:70px
    }
</style>
