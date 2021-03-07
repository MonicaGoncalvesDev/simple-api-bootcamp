
/*

https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=API-KEY

1. get url for api
2. create a fetch
3. console log the data to see the properties of the data

*/
document.querySelector('#search').addEventListener('click', findSub)

function findSub(){
  var inputVal = document.querySelector('input').value
  const listArea = document.querySelector('#subList')
  const nameItem = document.querySelector('#subingItem')

  url = `https://api.spoonacular.com/food/ingredients/substitutes?ingredientName=${inputVal}&apiKey=8cf937264fe74ff69934c3fca3042163`


  fetch(url)
  .then(res => res.json())
  .then(data => {
    listArea.innerHTML = ''
    nameItem.innerText = inputVal
    console.log(data)
    if(data.status === 'success'){
      console.log(data)
      console.log(data.substitutes)
      data.substitutes.forEach(subElement => {
        let node = document.createElement('li')
        node.innerText = subElement
        listArea.appendChild(node)
      })
    }else{
      listArea.innerText = data.message
    }
  })
  .catch(err => {
    console.log(`error ${err}`)
  })


}
