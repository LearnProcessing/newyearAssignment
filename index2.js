function convertWeight(summation, unitWeight) {
    //your code here
    let obj = {ton:0, kwintal:0, kw10: 0, kg:0, ons:0, dag:0, g:0, dg:0, cg:0, mg:0}
    let res = 0
    let number = ''
    let unit = ''
    let digit = '0123456789'
    let abjad = 'abcdefghijklmnopqrstuvwxyz'
    //split summation, dan masukan ke variable obj
    for(let i = 0; i < summation.length; i++){
        // jika menemukan digit, maka concate ke variabl number
        let digitFound = false
        for(let j = 0; j < digit.length; j++){
            if(digit[j] === summation[i]){
                digitFound = true
                number += summation[i]
            }
        }
        //jika menemukan alphabet maka concate ke variable unit
        let abjadFound = false
        for(let j = 0; j < abjad.length; j++){
            if(abjad[j] === summation[i]){
                abjadFound = true
                unit += summation[i]
            }
        }
        //jika variable unit sudah selesai terisi, update data obj, kosongkan variable number & unit 
        if((!abjadFound || i === summation.length - 1) && unit !== ''){
            obj[unit] = Number(number)
            number = ''
            unit = ''
        }
    }
    //console.log(obj)
    let arr = Object.entries(obj)
    //console.log(arr)
    let reverseUnitStair = false
    //loop every unit in arr
    for(let i = 0; i < arr.length; i++){
        let stepCount = 0
        
        //telusuri lagi array untuk menemukan unit weight 


        if(!reverseUnitStair){
            //menulusuri array untuk menemukan unit weight dari tangga atas ke bawah
            for(let j = i; j < arr.length; j++){
                //hitung brapa step untuk mencapai unit yang dicari dari current unit ke weight unit, update nilai res
                //console.log(res, stepCount,arr[j][0])
                if(arr[j][0] === unitWeight){
                    res += arr[i][1] * Math.pow(10, stepCount)
                    break
                }
                stepCount++
            }
        }else{
            //menulusuri array untuk menemukan unit weight dari tangga bawah ke atas
            for(let j = i; j >= 0; j--){
                //hitung brapa step untuk mencapai unit yang dicari dari current unit ke weight unit, update nilai res
                if(arr[j][0] === unitWeight){
                    res += arr[i][1] * Math.pow(10, stepCount*-1)
                    break
                }
                stepCount++
                
            }
        }
        
        //jika pencarian unit dari atas ke bawah telah selsai, maka lakukan pencarian dari bawah ke atas
        if(arr[i][0] === unitWeight){
            reverseUnitStair = true
        }
    }
    return `${res} ${unitWeight}`
}
  
  console.log(convertWeight('1 ton +10 ons+2 kwintal', 'kg')) //1201 kg
  
  console.log(convertWeight('1 ton +10 ons+2 kwintal', 'g')) //1201000 g
  
  console.log(convertWeight('2 ton +500 kwintal+3 kg+350 ons', 'kg'))  //52038 kg

// console.log(convertWeight('1 ton', 'kg'))
  