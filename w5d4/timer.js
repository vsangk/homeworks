window.setTimeout(() => alert(`HAMMERTIME`), 5000);

function hammerTime(time) {
  // callback is also a closure this case since it closes on time
  window.setTimeout(() => alert(`HAMMERTIME`), time);
}
