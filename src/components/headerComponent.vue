<template>
    <header class="pt-4">
        <div class="bg-white"></div>
        
        <nav class="header-container container d-flex flex-wrap justify-content-between align-items-center py-2 mb-4 navbar navbar-expand-lg">
            <a href="/" class="d-flex align-items-center text-decoration-none navbar-brand">
                <img src="../assets/img/site-icon.png" alt="Site logo" class="site-icon">
                <span class="fs-4 site-name">Site name</span>
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Navegação">
                <i class="fas fa-bars"></i>
            </button>
            
            <div class="nav nav-pills collapse navbar-collapse" id="main-navbar">
                <div class="navbar-container d-flex w-100 justify-content-end">
                    <ul class="d-flex align-items-center">
                        <li class="nav-item">
                            <router-link to="/blog" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/blog" class="nav-link">Blog</router-link>
                        </li>
                        <li class="nav-item"><a href="#" class="nav-link">Vendas</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Contato</a></li>
                        <li class="nav-item">
                            <router-link to="/blog/manage-posts" class="nav-link">Gerenciar posts</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
import { globalMethods } from "../js/globalMethods.js";

export default {
    name: "headerComponent",
    mixins: [globalMethods]
}
</script>
<style scoped>
.bg-white {
    background: var(--neutral-white);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    z-index: 1;
}
.header-container {
    position: relative;
    background: var(--secondary-color);
    z-index: 2;
    border-radius: 10px;
}
header {
    position: relative;
}
.site-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 1rem;
}
.site-name {
    color: var(--neutral-white);
}

.nav ul {
    list-style: none;
    margin: 0;
}
</style>