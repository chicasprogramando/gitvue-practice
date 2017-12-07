var title = new Vue({
    el: '.title',
    data: {
        message: 'The Progressive JavaScript Framework',
    }
});

var features = new Vue({
    el: '.features',
    data: {
        items: [
            {text: 'Approachable'},
            {text: 'Versatile'},
            {text: 'Performant'},
            ]
        },
});
