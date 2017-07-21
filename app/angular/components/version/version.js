'use strict';

angular.module('Minhacidade.version', [
  'Minhacidade.version.interpolate-filter',
  'Minhacidade.version.version-directive'
])

.value('version', '0.1');
