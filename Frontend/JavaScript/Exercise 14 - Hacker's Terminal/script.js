const addItem = async (item) => {
  await randomDelay();
  let div = document.createElement("div");
  div.innerHTML = item;
  document.body.appendChild(div);
};

const randomDelay = () => {
  return new Promise((resolve) => {
    let timeout = 1 + 6 * Math.random(); // random 1–7 seconds
    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
};

async function main() {
  let t = setInterval(() => {
    let last = document.body.getElementsByTagName("div");
    last = last[last.length-1];
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
    }
    else {
      last.innerHTML = last.innerHTML + ".";
    }
  }, 400);
  

  let text = [
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up",
  ];

  for (const item of text) {
    await addItem(item);
  }
  await randomDelay();
  clearInterval(t);
}

main();


