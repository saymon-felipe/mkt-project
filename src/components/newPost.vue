<template>
    <section class="new-post">
        <router-link to="/blog">
            <div class="back d-flex align-items-center">
                <i class="fas fa-arrow-left fa-lg"></i>
                <span class="mx-2">Voltar</span>
            </div>
        </router-link>
        <div class="new-post-container mt-4">
            <h2>Criar post</h2>
            <div class="post-edit-container mt-4">
                <div class="post-edit-header">
                    <div class="input-group">
                        <label for="post-title">Título do post</label>
                        <input type="text" name="post_title" id="post-title" class="input-primary">
                    </div>
                </div>
                <div class="post-edit-body my-4">
                    <ckeditor v-model="post_html"></ckeditor>
                </div>
                <div class="post-edit-footer mt-4">
                    <div class="footer-buttons">
                        <button type="button" class="btn secondary" v-on:click="savePost()">Salvar post</button>
                        <button type="button" class="btn primary" v-on:click="publishPost()">Publicar post</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import $ from 'jquery';
import { globalMethods } from "../js/globalMethods.js";

export default {
    name: "newPost",
    mixins: [globalMethods],
    data() {
        return {
            post_html: ""
        }
    },
    methods: {
        savePost: function () {
            let self = this;
            let data = self.getInformations();
            data["is_public"] = 0;
            console.log(data);
            self.$router.push("/blog/manage-posts");
        },
        publishPost: function () {
            let self = this;
            let data = self.getInformations();
            data["is_public"] = 1;
            console.log(data);
            self.$router.push("/blog/manage-posts");
        },
        getInformations: function () {
            let data = {
                post_name: $("#post-title").val(),
                post_html: this.post_html
            }

            return data;
        }
    }
}
</script>
<style scoped>
.new-post {
    margin-bottom: 8rem;
}

.post-edit-container {
    color: var(--secondary-color);
}

.footer-buttons {
    float: right;
}

    .footer-buttons .btn {
        margin: 0 5px;
    }
</style>