export function browserInfo() {
  const userAgent = navigator.userAgent;

  return {
    browser:
      userAgent.match(
        /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
      ) || [],

    getBrowser: function getBrowser() {
      const browser = this.browser;

      if (this.browser[1] === "Trident") browser = this.isIe();

      if (this.browser[1] === "Chrome") {
        if (this.isEdge()) browser = this.isEdge();
        if (this.isOpera()) browser = this.isOpera();
      }

      return {
        complet: browser[0],
        name: browser[1].toLowerCase(),
        version: browser[2],
      };
    },

    isIe: function isIe() {
      const ie = this.browser;
      return [ie[0], "ie", ie[2]];
    },

    isEdge: function isEdge() {
      const edge = userAgent.match(/(edge(?=\/))\/?\s*(\d+)/i) || [];
      if (edge[1] === "Edge") return edge;
    },

    isOpera: function isOpera() {
      const opera = userAgent.match(/(OPR(?=\/))\/?\s*(\d+)/i) || [];
      if (opera[1] === "OPR") return opera;
    },

    addBrowserToBody: function addBrowserToBody() {
      const browser = browserInfo().getBrowser().name;
      const body = document.getElementsByTagName("body");

      if (body.length) {
        body[0].classList.add(browser);
      }
    },
  };
}
