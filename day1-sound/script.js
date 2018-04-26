const app = {
    init: function init() {
        window.addEventListener('keydown', app.handleKeyPress);
        const keys = document.querySelectorAll('.keys-single');
        keys.forEach((k) =>{
            k.addEventListener("transitionend", () => {
                k.className = k.className.replace(" is-active", "");
            });
        })
       
    },
    handleKeyPress(e){
        const keyCode = e.keyCode;
        const effect = document.querySelector(`.sounds-single[data-keycode="${keyCode}"]`);
        if(!effect){
            return;
        }
        effect.currentTime = 0;
        effect.play();
        
        const target = document.querySelector(`.keys-single[data-keycode="${keyCode}"]`);
        target.className += " is-active";
    }
}


window.addEventListener('load', app.init());
