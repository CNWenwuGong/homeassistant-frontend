import { css, CSSResultGroup, LitElement, html, TemplateResult } from "lit";
import { customElement } from "lit/decorators";

@customElement("ha-logo-svg")
export class HaLogoSvg extends LitElement {
  protected render(): TemplateResult {
    return html`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2480.69 3463.07"><defs><style>.cls-1{fill:#040000;}.cls-2{fill:none;}.cls-3{isolation:isolate;}.cls-4{clip-path:url(#clip-path);}.cls-5{fill:#fff;}.cls-6{clip-path:url(#clip-path-2);}.cls-7{opacity:0.8;}.cls-8{opacity:0.5;}.cls-9{opacity:0.15;}.cls-10{clip-path:url(#clip-path-12);}.cls-11{mix-blend-mode:multiply;}</style><clipPath id="clip-path"><path class="cls-1" d="M169.31,1847.78c0,602.24,488.27,1090.43,1090.43,1090.43,596.42,0,1081.09-479,1090.44-1073.26v-34.42c-9.35-594.19-494-1073.27-1090.44-1073.27-602.16,0-1090.43,488.27-1090.43,1090.52"/></clipPath><clipPath id="clip-path-2"><rect class="cls-2" x="8972.31" y="4903.58" width="1207.56" height="824.88"/></clipPath><clipPath id="clip-path-12"><rect class="cls-2" x="11427.43" y="4903.58" width="1207.56" height="824.88"/></clipPath></defs><g class="cls-3"><g id="图层_1" data-name="图层 1"><path class="cls-1" d="M169.31,1847.78c0,602.24,488.27,1090.43,1090.43,1090.43,596.42,0,1081.09-479,1090.44-1073.26v-34.42c-9.35-594.19-494-1073.27-1090.44-1073.27-602.16,0-1090.43,488.27-1090.43,1090.52"/><g class="cls-4"><rect class="cls-1" x="169.3" y="757.26" width="2180.87" height="2180.95"/></g><path class="cls-5" d="M1894.93,2065.84a704.48,704.48,0,0,0-84.83-104c-1.2-1.28-2.31-2.4-3.51-3.6L1586.94,1738.6l-.09.08L1259.77,1411.6,1781.43,890a1081,1081,0,0,0-321.9-114.38l-417.81,418V779.16A1086.82,1086.82,0,0,0,605.45,975.41V2502l436.27-436.2V1629.65l436.11,436.19h.08l110.54,110.55h.08c74.69,74.68,115.74,173.88,115.74,279.4a394.74,394.74,0,0,1-28.35,147.52,384.41,384.41,0,0,1-25.65,52.16c-88.1,157.43-251,267.42-440.66,281.63,16.62.73,33.31,1.13,50.16,1.13,276.45,0,529-103,721.18-272.54a703.28,703.28,0,0,0,31.79-209.9c0-140.9-41.21-275.49-117.81-389.95"/><path class="cls-1" d="M772,295.53c22.2,57.59,44.48,115.18,66.69,173.25,67.65-16.77,135.38-30,203-28.6-53.92,40.9-107.91,91.06-161.83,144.89q29.35,90.1,58.79,182c-55.59-28.84-111.1-51.68-166.69-74.53-55.6,54.56-111.11,109.11-166.7,157.52Q634.61,747.77,664,643.38c-53.92-28-107.91-59.66-161.83-100.56,67.65-1.36,135.39-17.33,203-36.82Q738.57,401.17,772,295.53"/></g></g></svg>`;
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: var(--ha-icon-display, inline-flex);
        align-items: center;
        justify-content: center;
        position: relative;
        vertical-align: middle;
        fill: currentcolor;
        width: var(--mdc-icon-size, 24px);
        height: var(--mdc-icon-size, 24px);
      }
      svg {
        width: 100%;
        height: 100%;
        pointer-events: none;
        display: block;
      }
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    "ha-logo-svg": HaLogoSvg;
  }
}
