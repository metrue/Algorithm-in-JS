const {
  bruteForce,
  useHash,
  usePrime,
} = require('./index')

test("group anagram", () => {
  const input =  ["hos","boo","nay","deb","wow","bop","bob","brr","hey","rye","eve","elf","pup","bum","iva","lyx","yap","ugh","hem","rod","aha","nam","gap","yea","doc","pen","job","dis","max","oho","jed","lye","ram","pup","qua","ugh","mir","nap","deb","hog","let","gym","bye","lon","aft","eel","sol","jab"]
  const output = usePrime(input);
  console.log(JSON.stringify(output, null, 2))
})
