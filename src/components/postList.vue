<template>
    <div class="main-posts">
        <mainPost :main_post="main_post" :only_view="false" v-if="!notShow" />
        <div class="post-list mt-4 px-4">
            <div class="post px-2 my-4 d-flex align-items-center" v-for="(post, index) in post_list" :key="index">
                <router-link :to="'/blog/page/' + post.post_link">
                    <postComponent :post="post" />
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import mainPost from "../components/mainPost.vue";
import postComponent from "../components/postComponent.vue";
import { globalMethods } from "../js/globalMethods.js";

export default {
    name: "postList",
    props: ["notShow"],
    mixins: [globalMethods],
    data() {
        return {
            main_post: {
                post_image: "https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-enterprise-technology-business-internet-summit-background-board-image_165972.jpg",
                post_title: "Lorem ipsum dolor sit amet, concectetur adpiscing elit.",
                post_description: "Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit.",
                post_create_date: "há 2 dias",
                post_views: 42876,
                post_creator: {
                    name: "Ana",
                    profile_photo: "https://cdn.eutotal.com/imagens/egirl-eutotal-0-cke.jpg"
                },
                post_tags: [
                    "Lorem",
                    "Lorem ipsum"
                ]
            },
            post_list: [
                {
                    post_image: "https://www.animesxis.com.br/wp-content/uploads/2017/07/akko-little-witch-academia.jpg",
                    post_title: "Lorem ipsum dolor sit amet, concectetur adpiscing elit.",
                    post_description: "Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit.",
                    post_create_date: "há 2 dias",
                    post_views: 42876,
                    post_creator: {
                        name: "Ana",
                        profile_photo: "https://cdn.eutotal.com/imagens/egirl-eutotal-0-cke.jpg"
                    },
                    post_tags: [
                        "Lorem",
                        "Lorem ipsum"
                    ],
                    post_link: "caminho-post-1"
                },
                {
                    post_image: "https://www.animesxis.com.br/wp-content/uploads/2017/07/akko-little-witch-academia.jpg",
                    post_title: "Lorem ipsum dolor sit amet, concectetur adpiscing elit.",
                    post_description: "Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit.",
                    post_create_date: "há 2 dias",
                    post_views: 42876,
                    post_creator: {
                        name: "Ana",
                        profile_photo: "https://cdn.eutotal.com/imagens/egirl-eutotal-0-cke.jpg"
                    },
                    post_tags: [
                        "Lorem",
                        "Lorem ipsum"
                    ],
                    post_link: "caminho-post-2"
                },
                {
                    post_image: "https://www.animesxis.com.br/wp-content/uploads/2017/07/akko-little-witch-academia.jpg",
                    post_title: "Lorem ipsum dolor sit amet, concectetur adpiscing elit.",
                    post_description: "Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit.",
                    post_create_date: "há 2 dias",
                    post_views: 42876,
                    post_creator: {
                        name: "Ana",
                        profile_photo: "https://cdn.eutotal.com/imagens/egirl-eutotal-0-cke.jpg"
                    },
                    post_tags: [
                        "Lorem",
                        "Lorem ipsum"
                    ],
                    post_link: "caminho-post-3"
                }
            ]
        }
    },
    components: {
        mainPost,
        postComponent
    },
    methods: {
        relativeTime: function (date) {
            return date;
        }
    }
}
</script>
<style scoped>
.post a {
    text-decoration: none !important;
    color: #000 !important;
}
</style>