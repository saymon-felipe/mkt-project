<template>
    <div class="main-post">
        <div class="background d-flex align-items-center justify-content-center">
            <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-enterprise-technology-business-internet-summit-background-board-image_165972.jpg">
            <div class="post-content">
                <div class="post-text">
                    <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam similique ipsa esse nisi delectus quis est! Expedita, illo.</p>
                </div>
                <div class="post-footer d-flex align-items-center justify-content-between">
                    <button type="button" class="btn primary" v-if="!only_view">Ler mais</button>
                    <div class="post-informations d-flex align-items-center flex-wrap my-3 justify-content-around">
                        <div class="post-date">
                            <i class="fas fa-calendar-alt mx-2"></i>
                            <span>{{ relativeTime(main_post.post_create_date) }}</span>
                        </div>
                        <div class="post-views">
                            <i class="fas fa-eye mx-2"></i>
                            <span>{{ main_post.post_views }}</span>
                        </div>
                        <div class="post-creator">
                            <div class="user">
                                <img :src="main_post.post_creator.profile_photo" class="avatar-p mx-2">
                                <span>{{ main_post.post_creator.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "mainPost",
    props: ["main_post", "only_view"],
    methods: {
        relativeTime: function (date) {
            return date;
        }
    }
}
</script>
<style scoped>
.main-post {
    margin: auto;
    height: 300px;
    position: relative;
}

.background {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
}

    .background img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .background::after {
        width: 100%;
        height: 100%;
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        background: #000;
        opacity: 0.7;
        content: "";
    }

.post-content {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 80%;
    max-width: 1000px;
    margin: auto;
    height: 100%;
    z-index: 3;
    color: var(--neutral-white);
    height: fit-content;
}

    .post-content h1 {
        margin-bottom: 1rem;
    }

.post-informations {
    width: 60%;
    position: absolute;
    right: 0;
}

.post-list .post-date i, .post-list .post-views i, .post-list .post-creator img {
    margin-right: 7px;
}

.post-list .post-date, .post-list .post-views {
    margin-right: 1rem;
}

.post-footer {
    width: 100%;
    position: relative;
}

.post-text {
    margin-bottom: 2rem;
}
</style>