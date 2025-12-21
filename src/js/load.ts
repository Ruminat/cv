let delayCounter = 0;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

loadTheApp();

async function loadTheApp() {
  try {
    // return;

    await loadFont();

    await delay(100);

    const { renderContent } = await import("../components/Content");

    const loader = document.querySelector(".loader-overlay") as HTMLDivElement;
    const content = document.querySelector(".content") as HTMLDivElement;

    renderContent();

    content.style.display = "flex";

    await delay(250);

    loader.style.opacity = "0";
    loader.ontransitionend = () => {
      loader.style.display = "none";
    };

    document.title = "Влад Фурман — Senior Frontend Developer";

    await delay(500);

    content.style.opacity = "1";
  } catch (error) {
    console.log("Kavo", error);

    delayCounter += 1;
    await delay(1000 * delayCounter);

    loadTheApp();
  }
}

async function loadFont() {
  return new Promise((resolve) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap";
    link.crossOrigin = "anonymous";

    link.onload = resolve;
    link.onerror = resolve;

    document.head.appendChild(link);
  });
}
