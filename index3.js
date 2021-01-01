//cari posisi middle
//cari tinggi
//cari lebar
//nested loop buat bagian atas
//nested loop buat bagian bawah

function diamond(level){
    let middle = level - 1
    let tinggi = middle * 2
    let str = ''
    let left = middle, right = middle

    for(let row = 0; row <= tinggi; row++){
        for(let col = 0; col <= tinggi; col++){
            if(col === left || col === right){
                str += '$'
            }else{
                str += ' '
            }
        }
        str += '\n'

        if(row < tinggi/2){
            left -= 1
            right += 1
        }else{
            left += 1
            right -= 1
        }
        
    }
    return str    
}


console.log(diamond(3))

console.log(diamond(4))

console.log(diamond(6))

console.log(diamond(10))