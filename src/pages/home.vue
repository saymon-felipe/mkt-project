<template>
    <div>
        <siteTemplate>
            <section class="home-page">
                <router-view path="$router.key" />
            </section>
        </siteTemplate>
    </div>
</template>
<script>
import siteTemplate from "../templates/siteTemplate.vue";

export default {
    name: "home",
    components: {
        siteTemplate
    }
}
</script>
<style scoped>
.home-page {
    background: var(--neutral-white);
    min-height: 100%;
}
</style>