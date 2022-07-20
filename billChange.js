bills = [5,5,5,20,5,10,5,5,10,20,5,50]
//bills = [5,5,5,5,10,5,5,5,5,5,5,5,5,5,5,5,5,5,5,50]
//bills = [5,10,5,20,5,10,5,5,10,50]

var changeBills = bills => {
	var bill
	var nextItem = 0
	var kassa = []
    var givenAmount = 0
    var billTypes = []
    var cBills = [...new Set(bills)]
    const aBills = [5,10,20,50]
 
    if ( !checkBills( aBills, cBills ) ) { return false }
	
	for (var i = 0; i < bills.length; i++ ) {
		bill = bills[i] // Customer shows the bill
        kassa.push(bill) // Take customer's bill
        console.log('Kassa: ' + kassa)
    
        // Start counting from scratch
        const counts = {}
        for (const num of kassa) {
			counts[num] = counts[num] ? counts[num] + 1 : 1;	
		}
    
        // We have these type of bills
        billTypes = Object.keys(counts).sort(function(a, b){return b - a})
        console.log('Bill Types: ' + billTypes)
    
        var change = bill - 5 // We sell one piece for 5€, so calculate the change to be given
   	
        if ( change ) {
    	    console.log('We have to give the change')

			// Starting from the biggest bill we have, let's see what we can give
            for (var a = 0; a < billTypes.length; a++) {
      	        thatBill = parseInt(billTypes[a])
      	        console.log('Current bill type: ' + thatBill)
        
                index = kassa.indexOf(thatBill)
       	        billCount = counts[thatBill] // We have that many bills of that type
                billNeeded = Math.floor((change - givenAmount) / thatBill) // We need that many bills of that type
                console.log('Bill count: ' + billCount + '. Needed bill: ' + billNeeded)
        
                if ( billCount <= billNeeded ) {
         	        for(var b = 0; b < billCount; b++) {
           	            if ( givenAmount + thatBill > change ) { break; } // If big bill is not enough, try smaller
           	            kassa.splice(index, 1) 
                        index = kassa.indexOf(thatBill) // Rebuild the index
          	            givenAmount += thatBill 
                    }
                } else {
                    for(var c = 0; c < billNeeded; c++) {
                        kassa.splice(index, 1)
                        givenAmount += thatBill
                    }
                }
                console.log('Given amount: ' + givenAmount + '. Kassa after change: ' + kassa)
        
        
                // Error input catching section
                if(a >= 0 && a < billTypes.length - 1) {
        	        nextItem = parseInt(billTypes[a + 1])
                } else {
        	        if ((billTypes[a + 1] === undefined) && (givenAmount !== change) ) {
            	        return false
           	        } else {
           		        nextItem = parseInt(billTypes[a])
           		        if ( !(counts[nextItem] >= Math.floor((change - givenAmount) / nextItem)) ) {
              	            console.log('givenAmount ' + change)
              	            return false
            	        }
           	        }
                }
                nextItem = 0
            }
        }   
		givenAmount = 0
	}
	return kassa
}

var checkBills = (aBills, cBills) => cBills.every(bill => aBills.includes(bill))

console.log(changeBills(bills))
