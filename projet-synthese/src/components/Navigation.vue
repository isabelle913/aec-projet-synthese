<template>
  <nav>
    <ul>
      <li :class="{ active: $route.path === '/tableau-bord', withBorder: $route.path === '/tableau-bord' }" id="dashboard">
        <router-link to="/tableau-bord">
          <div class="flex items-center">
            <IconTableauBord class="h-8 w-8 mr-8" />
            <span>Tableau de bord</span>
          </div>
        </router-link>
      </li>
      <li :class="{ active: $route.path === '/demandes', withBorder: $route.path === '/demandes' }" id="demandesStage">
        <router-link to="/demandes">
          <div class="flex items-center">
            <IconDemandesStage class="h-8 w-8 mr-8" />
            <span>Demandes de stage</span>
          </div>
        </router-link>
      </li>
      <li :class="{ active: $route.path === '/offres', withBorder: $route.path === '/offres' }" id="offreStage">
        <router-link to="/offres">
          <div class="flex items-center">
            <IconOffreStage class="h-8 w-8 mr-8" />
            <span>Offres de stage</span>
          </div>
        </router-link>
      </li>
      <li :class="{ active: $route.path === '/candidats', withBorder: $route.path === '/candidats' }" id="candidats">
        <router-link to="/candidats">
          <div class="flex items-center">
            <IconCandidats class="h-8 w-8 mr-8" />
            <span>Candidats</span>
          </div>
        </router-link>
      </li>
      <li :class="{ active: $route.path === '/entreprises', withBorder: $route.path === '/entreprises' }" id="entreprises">
        <router-link to="/entreprises">
          <div class="flex items-center">
            <IconEntreprises class="h-8 w-8 mr-8" />
            <span>Entreprises</span>
          </div>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import IconTableauBord from "./icons/IconTableauBord.vue";
import IconOffreStage from "./icons/IconOffreStage.vue";
import IconDemandesStage from "./icons/IconDemandesStage.vue";
import IconCandidats from "./icons/IconCandidats.vue";
import IconEntreprises from "./icons/IconEntreprises.vue";

export default {
  name: "Navigation",
  components: {
    IconTableauBord,
    IconOffreStage,
    IconDemandesStage,
    IconCandidats,
    IconEntreprises,
  },
};
</script>

