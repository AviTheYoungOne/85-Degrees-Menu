var readline = require('readline-sync')

var input = -1
var total = 0


  function printMenu(){
  console.log('#####################################')
  console.log('# 1) Iced Tea                  $2.99#')
  console.log('# 2) Garlic Bread              $1.99#')
  console.log('# 3) Puff Pastries             $2.78#')
  console.log('# 4) Bacon & Cheese Bread      $3.49#')
  console.log('# 5) Coffee Bread              $2.64#')
  console.log('# 6) Checkout                       #')
  console.log('#####################################')
}



while(input !== '6') {
  printMenu()
  input = readline.question('Enter Choice: ')
  if(input === '1') {
    total = total +2.99
    console.log('Iced Tea has been added to your order')
  } else if (input === '2') {
    console.log('Garlic Bread has been added to your order')
    total = total +1.99
  } else if (input === '3') {
    console.log('Puff Pastry has been added to your order')
    total = total +2.78
  } else if (input === '4') {
    console.log('Bacon & Cheese Bread has been added to your order')
    total = total +3.49
  } else if (input === '5') {
    console.log('Coffee Bread has been added to your order')
    total = total +2.64
  } else if (input === '6') {
    console.log('Your total is $',total)
    console.log('You order will be ready in 10 mins')
  } else {
    console.log('Wrong input')
  }
}
