const textEventually = new Promise<string>((resolve) => {
  setTimeout(() => resolve("Done!"), 1000);
}); // 1초 후에 string값을 resolve

const lengthEventually = textEventually.then((text) => text.length);
