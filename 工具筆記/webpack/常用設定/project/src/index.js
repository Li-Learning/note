import '../node_modules/bootstrap/scss/bootstrap-grid.scss'
import '../src/all.sass';
import $ from '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import show from '../src/show.js';
import {things} from '../src/show.js';

show.test(123);
console.log(things);
$(document).ready(function () {
  $('h1').click(function(){
    console.log('我是 h1');
  })
});