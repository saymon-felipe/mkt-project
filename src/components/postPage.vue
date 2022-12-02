<template>
    <div class="post-content-page">
        <div class="admin-post" v-if="isAdmin">
            <button type="button" class="btn primary" data-toggle="modal" data-target="#post-actions-modal">Ações do post</button>
        </div>
        <div class="modal fade" tabindex="-1" id="post-actions-modal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Ações do post</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="button-group mb-4">
                        <button type="button" class="btn btn-warning">Arquivar post</button>
                        <span>Ao arquivar o post ele deixará de ser visível para os usuários. <strong>Nenhuma exclusão ocorre.</strong></span>
                    </div>
                    <div class="button-group">
                        <button type="button" class="btn btn-danger">Excluir post</button>
                        <span>Ao excluir o post ele deixará de existir. <strong>Exclusão permanente.</strong></span>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn" data-dismiss="modal">Fechar</button>
                </div>
                </div>
            </div>
        </div>
        <mainPost :main_post="current_post" :only_view="true" />
        <div class="container px-4">
            {{ url }}
            <div class="post-html mt-4 px-4" v-html="current_post.post_content"></div>
        </div>
    </div>
</template>
<script>
import mainPost from '../components/mainPost.vue';
import { globalMethods } from "../js/globalMethods.js";

export default {
    name: "postComponent",
    mixins: [globalMethods],
    data() {
        return {
            isAdmin: false,
            url: "",
            current_post: {
                post_image: "https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-enterprise-technology-business-internet-summit-background-board-image_165972.jpg",
                post_title: "Lorem ipsum dolor sit amet, concectetur adpiscing elit.",
                post_description: "Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit.",
                post_create_date: "há 2 dias",
                post_content: `
                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ratione esse tenetur ipsa quae consequatur maiores accusamus et placeat animi eius, ut optio magni ea dolorum voluptatum dolore, ad voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, fugiat debitis. Tempora reprehenderit quod corporis distinctio ratione, accusantium nemo amet quidem quo sit modi velit ex recusandae blanditiis iure placeat.
                    </p>
                    <p>
                        <ul>
                            <li>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus sed mollitia eligendi blanditiis a cumque consequatur excepturi quo asperiores, rem velit ad dicta atque hic quia quos, amet eos incidunt.
                            </li>
                            <li>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aperiam distinctio assumenda dolorum dicta doloribus officiis id aut reiciendis ipsum corporis corrupti ex autem consectetur ut soluta, quaerat molestias culpa.
                            </li>
                        </ul>
                    </p>
                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur alias, esse odit dolor autem laborum itaque accusamus error repellat modi debitis ipsam consectetur sint, asperiores, non aliquam est iste numquam?
                    </p>
                `,
                post_views: 42876,
                post_creator: {
                    name: "Ana",
                    profile_photo: "https://cdn.eutotal.com/imagens/egirl-eutotal-0-cke.jpg"
                },
                post_tags: [
                    "Lorem",
                    "Lorem ipsum"
                ]
            }
        }
    },
    methods: {
        getPost: function () {
            let urlSplit = window.location.href.split("/");
            this.url = urlSplit[urlSplit.length - 1];

            // Chamada ajax para buscar post passando o parametro url;
            console.log(this.url)
        },
        checkPermission: function () {
            this.isAdmin = true;
        }
    },
    mounted: function () {
        this.getPost();
        this.checkPermission();
    },
    components: {
        mainPost
    }
}
</script>
<style scoped>
.post-content-page {
    position: relative;
    padding-top: 4rem;
}

.admin-post {
    position: absolute;
    right: 0;
    top: 0;
}
</style>