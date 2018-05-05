const app = {
  init() {
    const panels = document.querySelectorAll(".js-panel");
    panels.forEach(p => {
			p.addEventListener("click", this.handleClick.bind(this, p));
      p.addEventListener("transitionend", this.handleTransitionend.bind(this, p));
    });
  },
  handleClick(p) {
		if(p.className.indexOf(' is-open') === -1){
			p.className += " is-open";
		}
		else{
			p.className = p.className.replace(" is-open", "");
		}
  },
  handleTransitionend(p, e){
		if(e.propertyName === 'flex-grow'){
			if (p.className.indexOf(" is-active") === -1) {
				p.className += " is-active";
			} else {
				p.className = p.className.replace(" is-active", "");
			}
		}
	}
};


window.addEventListener('load', app.init());
