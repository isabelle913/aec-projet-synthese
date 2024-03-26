export default function useLogoBank() {
  function getLogo(name) {
    switch (name) {
      case "eZmax":
        return "https://assets.ezmax.ca/Logo_VD_e_Zmax_2124845685.png";
      case "eZsign":
        return "https://fqm.ca/wp-content/uploads/2022/11/4.png";
      case "Centre Vétérinaire Rive-Sud":
        return "https://emplois.isarta.com/images-members2/2021/349/vetetnous/vetetnous_logo_rs.png?1652377738";
      default:
        return "../../public/favicon-estage.ico";
    }
  }

  return { getLogo };
}
