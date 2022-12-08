const temp = document.createElement('template');
temp.innerHTML = `
<link rel="stylesheet" href="./components/Header/header.css">
<div class="header">
<h1 class="h1tag">In the Name of God</h1>
<h3>Hello All</h3>
</div>
`
class Header extends HTMLElement {
    constructor() {
        super()
        console.log("created");
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(temp.content.cloneNode(true))
        console.log("ok");
    }
    connectedCallback() {


    }

    disconnectedCallback() {
    }
    static observedAttributes() {
        return ['userjob']
    }
}



export { Header }