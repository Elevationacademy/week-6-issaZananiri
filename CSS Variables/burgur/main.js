const addMenu = function() {  
    $("#button-container").empty().append(
        `
        <div id="x-container" onclick="deleteMenu()"
        <div id="x">
            <div id="line-x-1" class="line-x"></div>
            <div id="line-x-2" class="line-x"></div>
        </div>
        </div>
        `
    )
    let newHTML = 
    `<div id="menu-container">
        <p class="menu-item">Home</p>
        <p class="menu-item">About</p>
        <p class="menu-item">Shop</p>
    </div>`
    
    $("body").append(newHTML)
}
const deleteMenu = function() {
    $("#menu-container").remove()
}