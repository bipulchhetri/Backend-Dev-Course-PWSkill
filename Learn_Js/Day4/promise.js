/* const xpromise = new Promise((resolve, reject) => {
  let decision = false;
  if (decision) {
    resolve("ok lets start the discustion");
  } else {
    reject("Stop the discussion");
  }
});
xpromise
  .then((msg) => {
    console.log("All Good:", msg);
    console.log("lets look into it");
  })
  .catch((msg) => {
    console.log("message:", msg);
  })
  .finally(() => {
    console.log("Finaly is hare");
  });
 */

const f1promise = (resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 8) {
      resolve("Friend 1: OK I am in");
    } else {
      reject("Friend 1:NOONOOO");
    }
  }, 1000);
};
const f2promise = (resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 8.5) {
      resolve("Friend 1: OK I am in");
    } else {
      reject("Friend 1:NOONOOO I have a class");
    }
  }, 2000);
};
const f3promise = (resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 8.5) {
      resolve("Friend 1: OK I am in");
    } else {
      reject("Friend 1:NOONOOO I will to for");
    }
  }, 3000);
};

Promise.all([f1promise, f2promise, f3promise])
  .then((msg) => {
    console.log(msg);
    console.log("OK Everything is fine");
  })
  .catch((msg) => {
    console.log(msg);
    console.log("NO all cancel");
  });
