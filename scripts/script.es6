import $ from 'jquery';
import 'bootstrap';
import UpdateAppText from './update-app-text.es6';

$(() => {
    UpdateAppText('js loaded');

    $('body').on('click', '.js-btn-click', function(event) {
        event.preventDefault();
        UpdateAppText('Button click');
    });
});
