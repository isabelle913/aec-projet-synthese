<template>
  <div class="flex gap-5 text-white">
    <!-- Demandes -->
    <div class="flex-1">
      <div class="flex">
        <!-- Partie pale -->
        <div class="basis-10/12 rounded-l-lg bg-demandes p-6">
          <div class="flex gap-6 items-center">
            <div>
              <span class="material-symbols-outlined text-4xl md:text-6xl align-middle"> app_registration </span>
            </div>
            <div>
              <div class="hidden lg:block 2xl:hidden text-2xl">Stages</div>
              <div class="hidden 2xl:block text-3xl">Demandes de stage</div>
              <div class="text-4xl">{{ countInternshipRequests }}</div>
            </div>
          </div>
        </div>
        <!-- partie foncé -->
        <div class="hidden 2xl:block basis-2/12 rounded-r-lg bg-demandes__darker"></div>
      </div>
    </div>

    <!-- Offres -->
    <div class="flex-1">
      <div class="flex">
        <!-- Partie pale -->
        <div class="basis-10/12 rounded-l-lg bg-offres p-6">
          <div class="flex gap-6 items-center">
            <div>
              <span class="material-symbols-outlined text-4xl md:text-6xl align-middle">rocket_launch</span>
            </div>
            <div>
              <div class="hidden lg:block 2xl:hidden text-2xl">Offres</div>
              <div class="hidden 2xl:block text-3xl">Offres de stage</div>
              <div class="text-4xl">{{ countInternshipOffers }}</div>
            </div>
          </div>
        </div>
        <!-- partie foncé -->
        <div class="hidden 2xl:block basis-2/12 rounded-r-lg bg-offres__darker"></div>
      </div>
    </div>

    <!-- Candidats -->
    <div class="flex-1">
      <div class="flex">
        <!-- Partie pale -->
        <div class="basis-10/12 rounded-l-lg bg-candidats p-6">
          <div class="flex gap-6 items-center">
            <div>
              <span class="material-symbols-outlined text-4xl md:text-6xl align-middle"> person </span>
            </div>
            <div>
              <div class="hidden lg:block text-3xl">Candidats</div>
              <div class="text-4xl">{{ countCandidats }}</div>
            </div>
          </div>
        </div>
        <!-- partie foncé -->
        <div class="hidden 2xl:block basis-2/12 rounded-r-lg bg-candidats__darker"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  countInternshipRequests: {
    type: Number,
    default: 0,
  },
  countInternshipOffers: {
    type: Number,
    default: 0,
  },
  countCandidats: {
    type: Number,
    default: 0,
  },
});
</script>

<style scoped></style>
