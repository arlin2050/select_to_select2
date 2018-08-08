/*
 Select To Select2 Plugin Main.
 */

(function($){

    // For Page Load
    replaceAllSelect2();

    // For Ajax
    $(document).ajaxComplete(function(event){
        replaceAllSelect2();
    });

    // For GET,POST Request
    $(window).load(function() {
        replaceAllSelect2();
    });

    // for all elements
    $(document).change(function(event){
        replaceAllSelect2();
    });

    // for all elements
    $(document).click(function(event){
        if($(event.target) && (
            $(event.target).hasClass('toggle-multiselect')
            || $(event.target).hasClass('icon-edit')
        )) {
            replaceAllSelect2();
        }
    });

}(jQuery));

function replaceAllSelect2(){

    var elements = document.getElementsByTagName("select");

    for (i = 0; i < elements.length; i++) {

        if(elements[i].id == 'issue_deals_issue_attributes_deal_id'
        || elements[i].id == 'deal_contact_id') {
            continue;
        }

        if ($("#" + elements[i].id).data('select2')) {
            $("#" + elements[i].id).select2('destroy');
        }

        if(elements[i].id == 'year'
        || elements[i].id == 'month'
        || elements[i].id == 'columns'
        || elements[i].id == 'settings_issuequery_query_id'
        || elements[i].id == 'block-select'){
            $("#" + elements[i].id).select2({
                width:"175px",
            });
        }
        else {
            $("#" + elements[i].id).select2({
                width:"resolve"
            });
        }
    }

}
