document.addEventListener('DOMContentLoaded', function() {
    const insert = document.querySelector('.keys')

    document.addEventListener('keypress', function(event) {
        let key = event.key === ' ' ? 'Space' : event.key;
        let keyCode = event.keyCode;
        let code = event.code;

        insert.innerHTML = `
            <div class="Event">
                ${key} 
                <span>Event.key</span>
            </div>

            <div class="Event">
                ${keyCode} 
                <span>Event.keyCode</span>
            </div>

            <div class="Event">
                ${code} 
                <span>Event.code</span>
            </div>
        `
    })
})