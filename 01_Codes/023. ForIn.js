// For In Keyword

// For in based on indexes we have to written element after based in their index

const arr = [1,2,3,4,5]

for (let num in arr) {
    console.log(arr[num]);
}

const name = "Om Patil"

for (let char in name) {
    if(name[char] == " ")
        continue
    console.log(name[char]);
}