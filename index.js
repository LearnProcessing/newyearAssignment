function getMoneyChange(money) {
    //your code here\\
    let copyMoney = money
    let totalStocks = 0
    let arr = Object.entries(moneyStocks)
    let i = arr.length - 1
    
    while(i >= 0 ){
        let pecahan = arr[i][0]
        let lembar = arr[i][1]
        //console.log(lembar,pecahan, copyMoney, i)
        if(lembar === 0){
            i--
        }else{
            if(copyMoney > 0){
                if(pecahan * lembar <= copyMoney){
                    copyMoney -= pecahan * lembar
                    i--
                }else{
                    arr[i][1]--
                }
            }else{
                arr[i][1]--
            }
        }   
    }
    //console.log(copyMoney)

    if(copyMoney !== 0){
        console.log('Maaf uang kembalian tidak cukup')
        return {}
    }

    
    for(let i = arr.length - 1 ; i >= 0 ; i--){
        let arrIndex = arr[i]
        arrIndex[1] > 0 ? console.log(`${arrIndex[0]} ${arrIndex[1]} lembar`) : {}
        moneyStocks[arrIndex[0]] -= arrIndex[1] 
    }
    
    
  }
  
  const moneyStocks = {
    100000: 1,
    50000: 2,
    20000: 4,
    10000: 5,
    5000: 5,
    1000: 10,
    500: 5
  }
  
  getMoneyChange(75000)
  /*
    50000 1 lembar
    20000 1 lembar
    5000 1 lembar
  */
  
  getMoneyChange(190000)
  /*
    100000 1 lembar
    50000 1 lembar
    20000 2 lembar
  */
  
  getMoneyChange(190000)
  /*
    Maaf uang kembalian tidak cukup
  */
  
  getMoneyChange(100000)
  /*
    20000 1 lembar
    10000 5 lembar
    5000 4 lembar
    1000 10 lembar
  */
  
  getMoneyChange(400)
  /*
    Maaf uang kembalian tidak cukup
  */
  
  console.log(moneyStocks)
  /*
  { '500': 5,
    '1000': 0,
    '5000': 0,
    '10000': 0,
    '20000': 0,
    '50000': 0,
    '100000': 0 }
  */
  