<template>
    <section class="manage-posts">
        <div class="container">
            <router-link to="/blog">
                <div class="back d-flex align-items-center">
                    <i class="fas fa-arrow-left fa-lg"></i>
                    <span class="mx-2">Voltar</span>
                </div>
            </router-link>
            <div class="manage-container mt-4">
                <h2>Gerenciar posts</h2>
                <div class="manage-actions d-flex justify-content-end">
                    <button type="button" class="btn mx-2" v-on:click="showFilterContainer = !showFilterContainer">
                        <i class="fas fa-filter"></i>
                        <span class="mx-2">Filtrar posts</span>
                    </button>
                    <div class="filter-container" v-if="showFilterContainer" v-on:click="showFilterContainer = true">
                        <p><strong>Filtrar por</strong></p>
                        <div class="input-group">
                            <label for="initial-date">Data Início</label>
                            <input type="date" name="initial_date" id="initial-date">
                        </div>
                        <div class="input-group">
                            <label for="final-date">Data Fim</label>
                            <input type="date" name="final_date" id="final-date">
                        </div>
                        <div class="input-group">
                            <label for="creator">Criador</label>
                            <input type="text" inputmode="numeric" placeholder="Insira o nome do usuário" name="usuario_criador" id="creator-id" v-model="searchParam" />
                            <span class="selected-member" v-if="selected_member.id_usuario != null">
                                <img :src="selected_member.imagem_usuario">
                                <div class="member-informations">
                                    <p>{{ selected_member.nome_usuario }}</p>
                                    <i class="fas fa-times" v-on:click="removeSelectedUser()"></i>
                                </div>
                            </span>
                            <autoComplete :search="searchParam" v-if="searchParam != ''" @selectUser="select_user($event)"></autoComplete>
                        </div>
                        <button type="button" v-on:click="filterPosts()" class="btn primary submit-filter">Filtrar</button>
                    </div>
                    <button type="button" class="btn primary mx-2">
                        <router-link to="/blog/new-post">
                            <i class="fas fa-plus"></i>
                            <span class="mx-2">Criar post</span>
                        </router-link>
                    </button>
                </div>
                <postList :notShow="true" />
            </div>
        </div>
    </section>
</template>
<script>
import postList from "../components/postList.vue";
import autoComplete from "../components/autoComplete.vue";
import { globalMethods } from "../js/globalMethods.js";
import $ from 'jquery';

export default {
    name: "postManagePage",
    mixins: [globalMethods],
    components: {
        postList,
        autoComplete
    },
    data() {
        return {
            showFilterContainer: false,
            searchParam: "",
            selected_member: {
                id_usuario: null,
                imagem_usuario: "",
                nome_usuario: ""
            }
        }
    },
    methods: {
        filterPosts: function () {
            let initialDate = $("#initial-date").val();
            let finalDate = $("#final-date").val();
            let creatorId = this.selected_member.id_usuario;

            let data = {
                initial_date: initialDate,
                final_date: finalDate,
                creator_id: creatorId
            }

            console.log(data);

            this.showFilterContainer = false;
        },
        select_user: function (event) {
            let self = this;
            self.selected_member = event;
            self.searchParam = "";
            $("#creator-id").attr("placeholder", "");
        },
        removeSelectedUser: function () {
            let self = this;
            self.selected_member = {
                id_usuario: null,
                imagem_usuario: "",
                nome_usuario: ""
            }
            $("#creator-id").attr("placeholder", "Insira o nome do usuário");
        }
    }
}
</script>
<style scoped>
.manage-actions {
    width: 100%;
    position: relative;
}

.filter-container {
    position: absolute;
    right: 5.2rem;
    top: calc(100% + 10px);
    background: var(--neutral-gray);
    border-radius: 10px;
    padding: 10px;
    border: 2px solid var(--neutral-gray-low);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

.selected-member {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.4s;
    padding: 2px .5rem;
    width: 170px;
    position: absolute;
    bottom: 4px;
    left: 3px;
    border-radius: 10px !important;
    background: var(--secondary-color);
    color: var(--neutral-white);
}

    .selected-member img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin-right: 10px;
    }

    .member-informations {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

        .member-informations p {
            margin: 0 !important;
        }

.submit-filter {
    float: right;
}

@media (max-width: 415px) {
    .filter-container {
        right: 0;
    }
}
</style>