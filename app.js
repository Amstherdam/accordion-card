const visibleItemContainer = document.querySelectorAll('.acordionItemContainer')
const rotateArrow = document.querySelectorAll('.rotateArrow')

// const openOfItem = document.querySelectorAll('.acordionBottomItem')




visibleItemContainer.forEach((item) => { 

    let openTextItem = item.childNodes[3]
    let rotateArrowItem =  item.childNodes[1].childNodes[3]



    item.addEventListener('click', () => { 
    
         openTextItem.classList.toggle('visible')
         rotateArrowItem.classList.toggle('rodtate')

         console.log(openTextItem)
    })



})


/*  item.addEventListener('click', () => { 
        let denem = item.childNodes[3]
        
        
        setTimeout(function() {
            denem.classList.toggle('visible')
        }, 1000)
        
    }) */