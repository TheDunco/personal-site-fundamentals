// https://plainvanillaweb.com/pages/components.html

class NavComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<nav class="w-full ps-3 flex bg-white/10 backdrop-blur-md flex-row gap-2 border-b border-gray-500">
      <a href="/">Home</a>
      <a href="/work">Work</a>
      <a href="/play">Play</a>
    </nav>`
        this.classList = `${this.classList} sticky top-0`
    }
}
customElements.define('x-nav', NavComponent);

class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer class="text-sm text-gray-700 bg-white sticky bottom-0 py-2 mt-auto w-screen">
      &#169; Duncan Van Keulen ${new Date().getFullYear()}
    </footer>`
    }
}
customElements.define('x-footer', FooterComponent);

