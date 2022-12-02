<template>
    <footer class="w-100 p-4">
        <div class="container d-flex align-items-center justify-content-between">
            <div class="footer-options d-flex">
                <div class="footer-menu">
                    <p>Navegue</p>
                    <ul>
                        <li><a href="#" class="nav-link">Home</a></li>
                        <li><a href="#" class="nav-link">Blog</a></li>
                        <li><a href="#" class="nav-link">Vendas</a></li>
                        <li><a href="#" class="nav-link">Contato</a></li>
                    </ul>
                </div>
                <div class="footer-menu">
                    <p>Descubra</p>
                    <ul>
                        <li><a href="#" class="nav-link">Benefícios</a></li>
                        <li><a href="#" class="nav-link">Depoimentos</a></li>
                        <li><a href="#" class="nav-link">Segurança</a></li>
                        <li><a href="#" class="nav-link">Política de privacidade</a></li>
                    </ul>
                </div>
                <div class="footer-menu">
                    <p>Links úteis</p>
                    <ul>
                        <li><a href="#" class="nav-link">Contato</a></li>
                        <li><a href="#" class="nav-link">Login (admins)</a></li>
                    </ul>
                </div>
            </div>
            <div class="site-labels">
                <img src="../assets/img/site-seguro-white.png">
                <img src="../assets/img/ssl-white.png">
            </div>
            <div class="site-signature">
                <p class="copyright">Copyright © 2022 - Mamae plus</p>
                <p class="creator">Desenvolvido por Rabsystems</p>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: "footerComponent"
}
</script>
<style scoped>
footer {
    background: var(--secondary-color);
    border-radius: 10px 10px 0 0;
    color: var(--neutral-white);
    position: relative;
    padding-bottom: 4rem !important;
}

.site-labels img:first-child {
    width: 150px;
    margin-right: 2rem;
}

.site-labels img:last-child {
    width: 180px;
}

.footer-options .footer-menu {
    width: 130px;
    margin-right: 2rem;
}

.footer-menu {
    position: relative;
}

    .footer-menu p  {
        font-size: 20px;
        font-weight: 600;
    }

    .footer-menu::after {
        content: "";
        width: 40px;
        height: 3px;
        background: var(--neutral-white);
        position: absolute;
        top: 33px;
    }

    .footer-menu ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

        .footer-menu ul li {
            margin: 15px 0;
            cursor: pointer;
        }

        .footer-menu ul li a {
            padding: 0 !important;
            line-height: 1;
        }

.site-signature {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    margin: auto;
    width: fit-content;
    text-align: center;
}

.site-signature p {
    margin: 0;
    font-size: 12px;
}
</style>