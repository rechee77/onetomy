import"./sharer.523281e4.js";import"./navigation.f82cf4d1.js";import"./popup.4f9d3eac.js";import"./topics.0384721b.js";import"./resource-progress.77080f5b.js";import"./jwt.2bcbdb7f.js";import"./http.1ee0e3a2.js";document.querySelectorAll("[faq-question]").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll("[faq-answer]").forEach(i=>{i.classList.add("hidden")});const t=e.nextElementSibling;t&&t.classList.remove("hidden")})});