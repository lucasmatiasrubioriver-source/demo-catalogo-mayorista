// Solo demo: ningun enlace de WhatsApp sale de verdad.
document.addEventListener("click", function (e) {
  var a = e.target.closest && e.target.closest('a[href*="wa.me"]');
  if (!a) return;
  e.preventDefault();
  var texto = "";
  try { texto = decodeURIComponent((a.href.split("text=")[1] || "").replace(/\+/g, " ")); } catch (err) {}
  alert("DEMO — esto es lo que le llegaría al vendedor por WhatsApp:\n\n" + (texto || "(mensaje vacío)"));
}, true);
