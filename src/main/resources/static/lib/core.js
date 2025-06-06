/*
--------------------------------------------------------------
  File: Core JS File
--------------------------------------------------------------
 */
"use strict";
$(document).ready(function() {
    /* -- Menu js -- */
    $.sidebarMenu($('.vertical-menu'));
    $(function() {
        for (var a = window.location, abc = $(".vertical-menu a").filter(function() {
            return this.href == a;
        }).addClass("active").parent().addClass("active"); ;) {
            if (!abc.is("li")) break;
            abc = abc.parent().addClass("in").parent().addClass("active");
        }
    });
    /* -- Infobar Setting Sidebar -- */
    $("#infobar-settings-open").on("click", function(e) {
        e.preventDefault();
        $(".infobar-settings-sidebar-overlay").css({"background": "rgba(0,0,0,0.4)", "position": "fixed"});
        $("#infobar-settings-sidebar").addClass("sidebarshow");
    }); 
    $("#infobar-settings-close").on("click", function(e) {
        e.preventDefault();
        $(".infobar-settings-sidebar-overlay").css({"background": "transparent", "position": "initial"});
        $("#infobar-settings-sidebar").removeClass("sidebarshow");
    });
    /* -- Menu Hamburger -- */
    $(".menu-hamburger").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("toggle-menu");
        $(".menu-hamburger img").toggle();
    });
    /* -- Menu Topbar Hamburger -- */    
    $(".topbar-toggle-hamburger").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("topbar-toggle-menu");
        $(".topbar-toggle-hamburger img").toggle();    
    });
    /* -- Media Size -- */
    function mediaSize() { 
        if (window.matchMedia('(max-width: 767px)').matches) {
            $("body").removeClass("toggle-menu");
            $(".menu-hamburger img.menu-hamburger-close").hide();
            $(".menu-hamburger img.menu-hamburger-collapse").show();         
        }
    };
    mediaSize();
    window.addEventListener('resize', mediaSize, false);
    /* -- Switchery -- */
    // var setting_first = document.querySelector('.js-switch-setting-first');
    // var switchery = new Switchery(setting_first, { color: '#506fe4', size: 'small' });
    // var setting_second = document.querySelector('.js-switch-setting-second');
    // var switchery = new Switchery(setting_second, { color: '#506fe4', size: 'small' });
    // var setting_third = document.querySelector('.js-switch-setting-third');
    // var switchery = new Switchery(setting_third, { color: '#506fe4', size: 'small' });
    // var setting_fourth = document.querySelector('.js-switch-setting-fourth');
    // var switchery = new Switchery(setting_fourth, { color: '#506fe4', size: 'small' });
    // var setting_fifth = document.querySelector('.js-switch-setting-fifth');
    // var switchery = new Switchery(setting_fifth, { color: '#506fe4', size: 'small' });
    // var setting_sixth = document.querySelector('.js-switch-setting-sixth');
    // var switchery = new Switchery(setting_sixth, { color: '#506fe4', size: 'small' });
    // var setting_seventh = document.querySelector('.js-switch-setting-seventh');
    // var switchery = new Switchery(setting_seventh, { color: '#506fe4', size: 'small' });
    // var setting_eightth = document.querySelector('.js-switch-setting-eightth');
    // var switchery = new Switchery(setting_eightth, { color: '#506fe4', size: 'small' });
    
    // 메뉴 클릭 시 iframe에 페이지 로드
    $('.vertical-menu a').on('click', function (e) {
        var href = $(this).attr('href');
        if (!href || href.startsWith('javascript') || href === '#') return;
        e.preventDefault();

        // iframe에 페이지 로드
        $('#contentFrame').attr('src', href);

        // 활성 메뉴 표시
        $('.vertical-menu a').removeClass('active');
        $(this).addClass('active');
    });

    document.getElementById('contentFrame').addEventListener('load', function() {
        const iframe = this;
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        
        // Add prism.css to iframe head
        const prismCss = document.createElement('link');
        prismCss.rel = 'stylesheet';
        prismCss.href = '/src/main/resources/static/css/prism.css';
        iframeDoc.head.appendChild(prismCss);
        
        // Add prism.js to iframe body
        const prismJs = document.createElement('script');
        prismJs.src = '/src/main/resources/static/lib/prism.js';
        iframeDoc.body.appendChild(prismJs);
    });
});