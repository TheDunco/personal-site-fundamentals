// https://plainvanillaweb.com/pages/components.html

class NavComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav class="w-full flex bg-white flex-row gap-2 border-b border-gray-500">
      <a href="/">Home</a>
      <a href="/work">Work</a>
      <a href="/blog">Blog</a>
    </nav>`
    this.classList = `${this.classList} sticky top-0`
  }
}
customElements.define('x-nav', NavComponent);

class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="text-sm text-gray-700 bg-amber-50 py-2 w-full">
      &#169; Duncan Van Keulen ${new Date().getFullYear()}
    </footer>`
    this.classList = `${this.classList} sticky bottom-0`
  }
}
customElements.define('x-footer', FooterComponent);

class SectionDividerComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<hr class="my-5" />`
  }
}
customElements.define('x-section-divider', SectionDividerComponent);

