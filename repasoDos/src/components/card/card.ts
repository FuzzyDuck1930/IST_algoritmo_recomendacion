export enum AttributeCard {
    "anime_name" = "anime_name",
    "url" = "url",
    "name" = "name",
    "image" = "image",
    "species" = "species",
    "status" = "status"
}

export default class card extends HTMLElement{
    anime_name: string = "";
    url: string = "";
    name: string = "";
    image: string = "";
    species: string = "";
    status: string = "";

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    static get observedAttributes(){
        const attrs: Record <AttributeCard, null> = {
            anime_name: null,
            url: null,
            name: null,
            image: null,
            species: null,
            status: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeCard ,
    oldValue: string,
    newValue: string){
            switch (propName) {
                default:
                    this[propName] = newValue;
                    break;
            }
            this.render();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <section>
            <h1>${this.anime_name}</h1>
            <img src="${this.url}">
            <img src="${this.image}">
            <h1>${this.name}</h1>
            <p>${this.species}</p>
            <p>${this.status}</p>
            </section>
            `
        }
    }
}

customElements.define("app-card", card);