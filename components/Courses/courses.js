const temp = document.createElement('template');
temp.innerHTML = `
<link rel="stylesheet" href="./components/Courses/courses.css">
<div class="container">
        <div class="imgdiv">
            <img src="./img/1.jpg" alt="">
        </div>
        <div class="cont">
            <h3>Js Course</h3>
            <p>this ia a Full Course of javaScript</p>
            <button>Register</button>
            <button>Show details...</button>
        </div>
    </div>

`
class Course extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(temp.content.cloneNode(true))
    }
    connectedCallback() {
        console.log(this);
        const h1 = this.shadowRoot.querySelector('h3');
        h1.innerHTML = this.getAttribute('userjob');
        h1.addEventListener('click', () => {
            this.userRemove(this)
        });

    }

    userRemove(el) {
        el.remove()
    }

    disconnectedCallback() {
        console.log("Removed");
    }
    // static observedAttributes() {
    //     return ['userjob']
    // }
}



export { Course }