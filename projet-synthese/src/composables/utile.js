export default function useUtile() {
  function validateEmail(email) {
    const reg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return reg.test(email);
  }

  // ma fonction pour valider téléphone n'est pas la même que la BD ex: le 555-555-5555 n'est pas accepté par la BD
  function validatePhone(phone) {
    const reg = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
    return reg.test(phone);
  }

  function validatePostalCode(postalCode) {
    const reg = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
    return reg.test(postalCode);
  }

  return { validateEmail, validatePhone, validatePostalCode };
}
