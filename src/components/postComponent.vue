<template>
    <div class="post-inner d-flex align-items-center">
        <div class="post-image">
            <img :src="post.post_image" class="img-fluid">
        </div>
        <div class="post-contents">
            <div class="post-informations d-flex align-items-center">
                <div class="post-date">
                    <i class="fas fa-calendar-alt"></i>
                    <span>{{ relativeTime(post.post_create_date) }}</span>
                </div>
                <div class="post-views">
                    <i class="fas fa-eye"></i>
                    <span>{{ post.post_views }}</span>
                </div>
            </div>
            <div class="post-text">
                <h2>{{ post.post_title }}</h2>
                <p>{{ post.post_description }}</p>
            </div>
            <div class="post-tags d-flex align-items-center mb-2">
                <div class="post-tag" v-for="(tag, index2) in post.post_tags" :key="index2">
                    {{ tag }}
                </div>
            </div>
            <div class="post-creator">
                <div class="user">
                    <img :src="post.post_creator.profile_photo" class="avatar-pp">
                    <span>{{ post.post_creator.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "postComponent",
    props: ["post"],
    methods: {
        relativeTime: function (date) {
            return date;
        }
    }
}
</script>
<style scoped>
.post-image {
    width: 600px;
    height: 200px;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
}

    .post-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

.post {
    color: #000 !important;
}

.post-image {
    margin-right: 2rem;
}

.post-list .post-date i, .post-list .post-views i, .post-list .post-creator img {
    margin-right: 7px;
}

.post-list .post-date, .post-list .post-views {
    margin-right: 1rem;
}

.post-tag {
    background: var(--secondary-color);
    color: var(--neutral-white);
    border-radius: 10px;
    padding: 1px 8px;
    margin-right: 10px;
}

@media (max-width: 991px) {
    .post-inner {
        flex-direction: column;
        margin-bottom: 3rem !important;
    }

    .post-image {
        width: 100%;
        margin-right: 0;
        height: 300px;
        display: flex;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 1rem;
    }
}
</style>