const app = "I don't do much."

function destructivelyAppendKitten(name){
kittens.push(name)
return kittens
}

function destructivelyPrependKitten(name){
kittens.unshift(name)
return kittens
}

function destructivelyRemoveLastKitten(name){
kittens.pop(name)
return kittens
}

function destructivelyRemoveFirstKitten(name){
kittens.shift(name)
return kittens

}

function appendKitten(name){
var newkittens = [...kittens,name]
return newkittens

}

function prependKitten(name){
var newestkittens = [name, ... kittens]
return newestkittens

}

function removeFirstKitten(name){
kittens.slice(1)
return kittens
}
