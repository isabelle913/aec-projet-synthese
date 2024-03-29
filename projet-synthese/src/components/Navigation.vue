<template>
    <nav>
      <ul>
        <li :class="{ active: $route.path === '/tableau-bord' }" id="dashboard">
          <router-link to="/tableau-bord">
            <div class="flex items-center">
              <IconTableauBord class="h-8 w-8 mr-8"/> 
              <span>Tableau de bord</span>
            </div>
          </router-link>
        </li>
        <li :class="{ active: $route.path === '/demandestagepage1' }" id="demandesStage">
          <router-link to="/demandestagepage1">
            <div class="flex items-center">
              <IconDemandesStage class="h-8 w-8 mr-8"/> 
              <span>Demandes de stage</span>
            </div>
          </router-link>
        </li>
        <li :class="{ active: $route.path === '/offrestagepage1' }" id="offreStage">
          <router-link to="/offrestagepage1">
            <div class="flex items-center">
              <IconOffreStage class="h-8 w-8 mr-8"/> 
              <span>Offres de stage</span>
            </div>
          </router-link>
        </li>
        <li :class="{ active: $route.path === '/candidatspage1' }" id="candidats">
          <router-link to="/candidatspage1">
            <div class="flex items-center">
              <IconCandidats class="h-8 w-8 mr-8"/> 
              <span>Candidats</span>
            </div>
          </router-link>
        </li>
        <li :class="{ active: $route.path === '/entreprises' }" id="entreprises">
          <router-link to="/entreprises">
            <div class="flex items-center">
              <IconEntreprises class="h-8 w-8 mr-8"/> 
              <span>Entreprises</span>
            </div>
          </router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  import IconTableauBord from './icons/IconTableauBord.vue';
  import IconOffreStage from './icons/IconOffreStage.vue';
  import IconDemandesStage from './icons/IconDemandesStage.vue';
  import IconCandidats from './icons/IconCandidats.vue';
  import IconEntreprises from './icons/IconEntreprises.vue';
  
  export default {
    name: 'Navigation',
    components: {
      IconTableauBord,
      IconOffreStage,
      IconDemandesStage,
      IconCandidats,
      IconEntreprises
    }
  }
  </script>
  
  <style scoped>
  nav {
    /*background-color: #333;*/
    padding: 30px 0;
    text-align: left !important;
    width: 250px;
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
  
  
  #dashboard{
    border-right: #0c9da3 solid;
  }
  
  #demandesStage{
    border-right: #d2a350 solid;
  }
  
  #offreStage{
    border-right: #ba2025 solid;
  }
  
  #candidats{
    border-right: #9b5ba2 solid;
  }
  
  #entreprises{
    border-right: #86a8e6 solid;
  }
  
  #dashboard span{
  color: #0c9da3;
  font-weight: bold;
  }
  
  #demandesStage span{
  color: #d2a350;
  }
  
  #offreStage span{
  color: #ba2025;
  }
  
  #candidats span{
  color: #9b5ba2;
  }
  
  #entreprises span{
  color: #86a8e6;
  }
  
  </style>
  