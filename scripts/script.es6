import $ from 'jquery';
import 'bootstrap';
import TextUpdate from './text.es6';

$(() => {
    const updateApp = (text) => {
        $('#app').text(text);
    };

    updateApp('js loaded');
    updateApp(TextUpdate("hello"));
});
