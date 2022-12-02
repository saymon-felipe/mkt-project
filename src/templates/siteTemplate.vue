<template>
    <div class="main-content">
        <headerComponent />
        <div class="content">
            <div class="container p-4">
                <slot />
            </div>
            <footerComponent />
        </div>
    </div>
</template>
<script>
import headerComponent from "../components/headerComponent.vue";
import footerComponent from  "../components/footerComponent.vue";

export default {
    name: "siteTemplate",
    components: {
        headerComponent,
        footerComponent
    }
}
</script>
<style scoped>
.main-content {
    min-height: 100vh;
    position: relative;
}
.content {
    min-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1;
}
.container {
    padding-top: 120px !important;
    min-height: calc(100vh - 6.1rem);
    background: var(--neutral-white);
}
</style>