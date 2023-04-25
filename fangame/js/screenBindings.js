if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.innerHTML = "<div class='not-working'><h1>You can't play this game on a phone or a tablet because phones and tablets don't have keyboards.</h1></div>";
}
  