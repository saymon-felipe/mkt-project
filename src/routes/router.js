import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import home from '../pages/home.vue';
import postList from '../components/postList.vue';
import postPage from '../components/postPage.vue';
import postManagePage from "../components/postManagePage.vue";
import newPost from "../components/newPost.vue";

const routes = [
    {
        path: '/blog',
        component: home,
        meta: {
            title: "Mamaeplus",
            metaTags: [
                {
                    name: "description",
                    content: "Página inicial - Mamaeplus"
                },
                {
                    name: "og:description",
                    content: "Página inicial - Mamaeplus"
                }
            ]
        },
        children: [
            {
                path: '',
                component: postList
            },
            {
                path: "page/:post_link",
                component: postPage,
                meta: {
                    title: "Post page - Mamae plus"
                }
            },
            {
                path: "manage-posts",
                component: postManagePage,
                meta: {
                    title: "Gerenciar posts - Mamae plus"
                }
            },
            {
                path: "new-post",
                component: newPost,
                meta: {
                    title: "Criar um novo post - Mamae plus"
                }
            }
        ]
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;