import { AttributeCard } from "../components/card/card";
import { getDataNeko, getDataRick } from "../services/getDataNeko";
import "../components/export"
import { typeNeko } from "../types/typeNeko";

class dashboard extends HTMLElement{

constructor(){
    super();
    this.attachShadow({mode: "open"});
}

async connectedCallback(){
    const allData = await getDataNeko();
    //const allDataRick = await getDataRick();
    this.mount(allData);
}

mount(allData?:any){
    this.render(allData);
    const myButton = this.shadowRoot?.querySelector('button');
        myButton?.addEventListener('click', async () => {
        const allDataRick = await getDataRick();
        this.render(allDataRick);
    })
}

render(allData?: any, allDataRick?:any){
    if(this.shadowRoot){
        this.shadowRoot.innerHTML = ``;

        allData.forEach((element: typeNeko) => {
            const card = this.ownerDocument.createElement("app-card");
            card.setAttribute(AttributeCard.anime_name, element.anime_name);
            card.setAttribute(AttributeCard.url, element.url);
            this.shadowRoot?.appendChild(card);
        });

        const bringRick = this.ownerDocument.createElement("button")
        bringRick.innerText = "Dame info de Rick & Morty";
        this.shadowRoot?.appendChild(bringRick)

        allDataRick.forEach((elements: typeNeko) => {
            const card = this.ownerDocument.createElement("app-card");
            card.setAttribute(AttributeCard.image, elements.image);
            card.setAttribute(AttributeCard.name, elements.name);
            card.setAttribute(AttributeCard.species, elements.species);
            card.setAttribute(AttributeCard.status, elements.status);
            this.shadowRoot?.appendChild(card);
        });
    }
}
}

customElements.define("app-dashboard", dashboard);