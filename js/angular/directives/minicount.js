angular
  .module('minhacidade')
  .directive('minicount', minicount);

/* recommended */
// Controller it must have been loaded.
function minicount() {
  return {
    restrict: 'A',
    templateUrl: 'partials/minicount.html'
  };
};