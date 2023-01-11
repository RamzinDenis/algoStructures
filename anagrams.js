function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;

  const ht = {};

  for (let char of s1) {
    ht[char] = ++ht[char] || 1;
  }
  for (let char of s2) {
    if (!ht[char]) return false;
    else {
      --ht[char];
    }
  }

  return true;
}

console.log(isAnagram("anagrams", "nagaramm"));
console.log(isAnagram("aaz", "zza"));
