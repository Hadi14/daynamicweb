const temp = document.createElement('template');
temp.innerHTML = `
<link rel="stylesheet" href="./components/Courses/courses.css">
<div class="container">
        <div class="imgdiv">
            <img  alt="">
        </div>
        <div class="cont">
            <h3></h3>
            <p class="pdet></p>
            <button class="regbtn">Register</button>
            <button class="detbtn">Show details...</button>
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
        const img = this.shadowRoot.querySelector('.imgdiv img');
        img.src = this.getAttribute('imgsrc');

        const det = this.shadowRoot.querySelector('.pdet');
        det.innerHTML = "This is a Full Course of " + this.getAttribute('title')

        const tit = this.shadowRoot.querySelector('.cont h3');
        tit.innerHTML = this.getAttribute('title')


        const regbtn = this.shadowRoot.querySelector('.regbtn');
        regbtn.addEventListener('click', () => {
            alert("Regestered .")
        })

        const detbtn = this.shadowRoot.querySelector('.detbtn');
        detbtn.addEventListener('click', () => {
            det.classList.toggle("pdet");
            // console.log("Display");
        })


    }




    // static observedAttributes() {
    //     return ['userjob']
    // }
}



export { Course }