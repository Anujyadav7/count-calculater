const decrementBtn = document.querySelector('#decrement-btn')
const incrementBtn = document.querySelector('#increment-btn')
const resetBtn = document.querySelector('#reset-btn')
const count = document.querySelector('.counter-value')
const addedNum = document.querySelector('.addednum')

decrementBtn.addEventListener('click', ()=>{
    const countValue = parseInt(count.innerText)
    const addedNumValue = parseInt(addedNum.value)
    count.innerText = countValue -addedNumValue 
} 
)

incrementBtn.addEventListener('click', ()=>{
    const countValue = parseInt(count.innerText)
    const addedNumValue = parseInt(addedNum.value)
    count.innerText = countValue + addedNumValue  
})



resetBtn.addEventListener('click', ()=>{
    count.innerText = 0
})


