// Promise generated

getQuote = ()=>{
  let promiseQuote = fetch('https://api.quotable.io/random?maxLength=50') ;

  return promiseQuote.then((response)=>{
    return response.json()
  })

}

searchQuote=()=>{
  let quote = getQuote() ;
  quote.then((response)=>{
    showQuote(response)
  }).catch((error)=>{
    console.log(error)
  })
}

showQuote = (finalQuote)=>{
  document.getElementById('final-output').innerText = `" ${finalQuote.content} "`

  document.getElementById('author').innerText = `By:-  ${finalQuote.author} `

}

// document.getElementById('button-generate').addEventListener('onclick', searchQuote()) ;