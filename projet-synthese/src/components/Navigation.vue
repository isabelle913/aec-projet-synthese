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

<style scoped>
@import "./../assets/_variable.scss";
nav {
  padding: 30px 0;
  text-align: left !important;
  width: 300px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  margin-bottom: 20px;
}
a {
  text-decoration: none;
}
a:hover {
  font-weight: bold;
}
span {
  font-size: 1.7rem;
}

.withBorder {
  border-right: 3px solid;
}

#dashboard.withBorder {
  border-right: #0c9da3 solid;
}

#demandesStage.withBorder {
  border-right: #d2a350 solid;
}

#offreStage.withBorder {
  border-right: #ba2025 solid;
}

#candidats.withBorder {
  border-right: #9b5ba2 solid;
}

#entreprises.withBorder {
  border-right: #86a8e6 solid;
}

#dashboard span {
  color: #0c9da3;
  font-weight: bold;
}

#demandesStage span {
  color: #d2a350;
}

#offreStage span {
  color: #ba2025;
}

#candidats span {
  color: #9b5ba2;
}

#entreprises span {
  color: #86a8e6;
}
</style>
