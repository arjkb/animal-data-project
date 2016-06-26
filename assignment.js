// put your javascript code here
/*
 Contains javascript code to handle all the image-switching logic
 */

var cat_list_template;

function showTemplate(template, data) {
    var html = template(data);
    $("#content").html(html);
}

$(document).ready(function () {
    console.log("assignment.js is ready!")

    var source = $("#cat-list-template").html();
    cat_list_template = Handlebars.compile(source);


    $("#categories-tab").click(function () {
        console.log("Categories tab clicked!");
        showTemplate(cat_list_template, animals_data);
    })
});
