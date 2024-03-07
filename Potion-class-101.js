/*
This is your first potion class in Hogwarts and the professor gave you a homework assignment 
to figure out what the color and volume of a mixed potion is after mixing two potions.

All potions have some color written down as RGB color from [0, 0, 0] to [255, 255, 255].  
Besides color, you also need to figure out what volume the potion will have after the final mix.

Task:
  You managed to figure out that after mixing two potions, the colors will mix (RGB colors). 
  For example, if you'll mix a potion that has the color [255, 255, 0] and has 10 volume with one that has the
  color [0, 254, 0] and has 5 volume, you'll get a new potion that has the color [170, 255, 0] and has 15 volume. 

So you decided to create a class Potion that will have two properties: 
color (a list with 3 integers) and volume (a number), 
and one method named mix that will accept another potion and return a mixed potion.

Example:
  felix_felicis       =  Potion([255, 255, 255],  7)
  shrinking_solution  =  Potion([ 51, 102,  51], 12)
  new_potion          =  felix_felicis.mix(shrinking_solution)

  new_potion.color   ==  [127, 159, 127]
  new_potion.volume  ==  19

Note: Use ceiling when calculating the resulting potion's color.
*/


// Solution

class Potion {
  constructor(color, volume) {
    this.color = color
    this.volume = volume
  }
  
  mix(other) {
    let [r1, g1, b1] = this.color
    let [r2, g2, b2] = other.color
    
    let totalVolume = this.volume + other.volume
    
    const addColor = (fst, snd) => Math.ceil(fst * this.volume / totalVolume + snd * other.volume / totalVolume)
    
    return new Potion(
      [
        addColor(r1, r2),
        addColor(g1, g2),
        addColor(b1, b2)
      ],
      totalVolume
    )
  }
}

// or