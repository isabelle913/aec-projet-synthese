<template>
  <div class="bg-slate-100 page-padding flex flex-col gap-y-12">
    <ApercuRapide />
    <ListeBase v-if="internshipRequests.length > 0" is-demande :liste-items="internshipRequests" />
    allo
  </div>
</template>
<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { useRouter } from "vue-router";
import InternshipRequestsServices from "@/services/internshipRequests/internshipRequestsServices";

import ApercuRapide from "@/components/ApercuRapide.vue";
import ListeBase from "@/components/ListeBase.vue";

// const router = useRouter();

const { listeRequest, allInternshipRequests } = InternshipRequestsServices();
const internshipRequests = ref([]);

onMounted(() => {
  allInternshipRequests();
});

watchEffect(() => {
  if (Array.isArray(listeRequest.value)) {
    internshipRequests.value = [...listeRequest.value];
    console.log(internshipRequests.value);
  }
});

// function onEnterpriseDetails() {
//   router.push({ name: "enterprise", params: { id: "0" } });
// }
</script>
<style scoped>
.page-padding {
  padding: 3rem;
}
</style>
