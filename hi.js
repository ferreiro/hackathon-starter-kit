const greeting = `
   _____ _       _     _______ _             
  / ____(_)     | |   |__   __| |            
 | (___  _ _ __ | |_     | |  | |__   ___  __
  \___ \| | '_ \| __|    | |  | '_ \ / _ \/ /
  ____) | | | | | |_     | |  | | | |  __/| |
 |_____/|_|_| |_|\__|    |_|  |_| |_|\___||_|
`;

function animateASCII(text, speed) {
  const lines = text.split('\n');
  let index = 0;

  setInterval(() => {
    console.clear();
    console.log(lines[index]);

    index++;
    if (index === lines.length) {
      index = 0;
    }
  }, speed);
}

animateASCII(greeting, 200);

