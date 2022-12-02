import $ from 'jquery';
//import api from '../configs/api.js';

export const globalMethods = {
    methods: {
        changeActiveHeaderOption: function () {
            setTimeout(() => {
                let menuOptions = $(".header-container .nav-item a");
                let path = window.location.pathname;
                let navbar = $("#main-navbar");
                
                menuOptions.each(function () {
                    $(this).removeClass("active");
                });

                navbar.removeClass("show");

                switch (path) {
                    case "/blog": {
                        let correctMenuItemObject = this.searchMenuItem(menuOptions, "Blog");
                        this.selectMenuItem(correctMenuItemObject);
                        break;
                    }
                    case "/blog/manage-posts": {
                        let correctMenuItemObject = this.searchMenuItem(menuOptions, "Gerenciar posts");
                        this.selectMenuItem(correctMenuItemObject);
                        break;
                    }
                    case "/blog/new-post": {
                        let correctMenuItemObject = this.searchMenuItem(menuOptions, "Gerenciar posts");
                        this.selectMenuItem(correctMenuItemObject);
                        break;
                    }
                    default: {
                        if (path.indexOf("/blog/page/") != -1) {
                            let correctMenuItemObject = this.searchMenuItem(menuOptions, "Blog");
                            this.selectMenuItem(correctMenuItemObject);
                        }
                        break;
                    }
                }
            }, 100);
        },
        searchMenuItem: function (object, string) {
            let correctObject;

            object.each(function () {
                if ($(this).html() == string) {
                    correctObject = $(this);
                }
            });

            return correctObject;
        },
        selectMenuItem: function (object) {
            object.addClass("active");
        }
    },
    data() {
        return {
        }
    },
    mounted: function () {
        this.changeActiveHeaderOption();
    }
}