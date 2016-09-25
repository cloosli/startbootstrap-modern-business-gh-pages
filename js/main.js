/**
 * AngularJS Bootstrap Boilderplate
 * @author Christian Loosli
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    .when("/full-width", {templateUrl: "partials/full-width.html", controller: "PageCtrl"})
    .when("/sidebar", {templateUrl: "partials/sidebar.html", controller: "PageCtrl"})

    // Blog
    .when("/blog", {templateUrl: "partials/blog-home-1.html", controller: "BlogCtrl"})
    .when("/blog/home-1", {templateUrl: "partials/blog-home-1.html", controller: "BlogCtrl"})
    .when("/blog/home-2", {templateUrl: "partials/blog-home-2.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog-post.html", controller: "BlogCtrl"})

    .when("/port", {templateUrl: "partials/portfolio-item.html", controller: "PortCtrl"})
    .when("/port/portfolio-1-col", {templateUrl: "partials/portfolio-1-col.html", controller: "PortCtrl"})
    .when("/port/portfolio-2-col", {templateUrl: "partials/portfolio-2-col.html", controller: "PortCtrl"})
    .when("/port/portfolio-3-col", {templateUrl: "partials/portfolio-3-col.html", controller: "PortCtrl"})
    .when("/port/portfolio-4-col", {templateUrl: "partials/portfolio-4-col.html", controller: "PortCtrl"})

    //.when("/carousel-example-generic", {})

    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls the Portfolio
 */
app.controller('PortCtrl', function (/* $scope, $location, $http */) {
  console.log("PortCtrl Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});
