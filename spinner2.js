const spinner = [
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
];

let delay = 100;

for (const spin of spinner) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, delay);
  delay += 200;
}
