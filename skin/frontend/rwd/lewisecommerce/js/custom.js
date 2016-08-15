jQuery( document ).ready(function() {
    jQuery(".reveal-button").click(function(){
        jQuery(this).toggleClass("is-active");
        jQuery('.col-main .category-products .toolbar .block-layered-nav .block-content').toggle("show");
    });
    
    jQuery("#narrow-by-list dt").click(function(){
        jQuery('#narrow-by-list dd.current').toggle("show");
    });
    
    jQuery(".limiter-button .valueOfButton").click(function(){
        jQuery('.limiter-button .dropdown-menu').toggle("show");
    });
    
    jQuery(".sort-by .btn-group").click(function(){
        jQuery('.btn-group .dropdown-menu').toggle("show");
    });
    
    jQuery(".limiter-button .limiter-toggle").click(function(){
        jQuery('.limiter-button  .dropdown-menu').toggle("show");
    });
    
    jQuery("#narrow-by-list dt").click(function(){
        jQuery('#narrow-by-list dt.current>i').toggleClass("fa-angle-down");
        jQuery('#narrow-by-list dt.current i').toggleClass("fa-angle-up");
    });
    
    jQuery("#header-search .input-box .search-button").click(function(){
        jQuery('#header-search .input-box input').toggle("show");
    });
    
});
jQuery.noConflict();
