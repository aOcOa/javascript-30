const app = {
    init(){
        const customInputs = document.getElementsByClassName('js-customInput');
        Array.prototype.map.call(customInputs, (input, i) => {
          input.addEventListener("change", this.handleInputChange);
          input.addEventListener("mousemove", this.handleInputChange);
        });
    },
    handleInputChange(e){
        window.requestAnimationFrame(()=>{
            const suffix = e.target.getAttribute("data-suffix") || "";
            const name = e.target.getAttribute("name") || "";
            document.documentElement.style.setProperty(
            `--${name}`,
            `${e.target.value}${suffix}`
            );
        });
    }
}


window.addEventListener('load', app.init());
