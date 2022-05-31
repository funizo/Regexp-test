let str = `
010-1234-5678
thek4160621@naver.com
abbcccddddfox
The quick brown fox jumps over the lazy dog.
abbcccdddd
동해물과_백두산이 마르고 닳도록
d`



console.log(
  str.match(/(?<=@).{1,}/g)
  );