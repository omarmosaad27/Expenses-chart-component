

let bars = document.querySelector(".bars")

window.addEventListener("load",  async function () {
    const response = await fetch("../data.js")
    const data = await response.json()
    const items = data.map((item) => {
        console.log(Math.max(...data.map(e => e.amount)));
        const bar = `
            <div class="bar"  >
                
                <span class="amount" 
                
                data-amount='$${item.amount}'
                data-color=${ Math.max(...data.map(e => e.amount)) ===
                item.amount ?"hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"  }
        
                style="height:${item.amount}%; 
                background-color:${
                Math.max(...data.map(e => e.amount)) === item.amount ?
                "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"  
                } ">
                </span>
                <span class="day">${item.day}</span>
            </div>
        `
        
        return bar
    }).join("")
    bars.innerHTML = items
})


