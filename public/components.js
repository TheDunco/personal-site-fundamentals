// https://plainvanillaweb.com/pages/components.html

class NavComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<nav class="w-full flex flex-row gap-2 border-b border-gray-500">
      <a href="/">Home</a>
      <a href="/work">Work</a>
      <a href="/play">Play</a>
    </nav>`
    }
}
customElements.define('x-nav', NavComponent);

class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer class="text-sm text-gray-700 absolute bottom-0 w-full">
      &#169; Duncan Van Keulen ${new Date().getFullYear()}
    </footer>`
    }
}
customElements.define('x-footer', FooterComponent);

