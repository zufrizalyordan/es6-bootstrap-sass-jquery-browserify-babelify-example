import $ from 'jquery';
import 'bootstrap';

$(() => {
    const updateApp = (text) => {
        $('#app').text(text);
    };

    updateApp('js loaded');
});
