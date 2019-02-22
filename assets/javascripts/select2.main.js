/*
 Select To Select2 Plugin Main.
 */

EASY.schedule.require(function($){

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
        if($(event.target) && $(event.target).hasClass('toggle-multiselect')) {
            replaceAllSelect2(true);
        } else {
            replaceAllSelect2();
        }
    });

},'jQuery');

function replaceAllSelect2(force = false){
    var elements = document.getElementsByTagName("select");

    for (i = 0; i < elements.length; i++) {
        if(elements[i].id == 'issue_deals_issue_attributes_deal_id'
        || elements[i].id == 'deal_contact_id'
        || elements[i].id == 'available_c'
        || elements[i].id == 'selected_c'
	|| elements[i].id == 'available_columns'
	|| elements[i].id == 'selected_columns'
	|| elements[i].id == 'time_entry_activity_id') {
            continue;
        }

        if (force && $("#" + elements[i].id).data('select2')) {
            $("#" + elements[i].id).select2('destroy');
        }

        var minWidth = parseInt($("#" + elements[i].id).css("min-width").replace(/px/, "").replace(/%/, ""));
        if (!$("#" + elements[i].id).data('select2') && $("#" + elements[i].id).is(':visible')) {
            if(elements[i].id == 'year'
                || elements[i].id == 'month'
                || elements[i].id == 'columns'
                || elements[i].id == 'settings_issuequery_query_id'
                || elements[i].id == 'block-select') {
                $("#" + elements[i].id).select2({
                    width: "175px",
                });
            } else if ($("#" + elements[i].id).width() <= minWidth && minWidth > 0) {
                $("#" + elements[i].id).select2({
                    width: $("#" + elements[i].id).css('min-width'),
                });
            } else if ($("#" + elements[i].id).width() > 0) {
                $("#" + elements[i].id).select2({
                    width: $("#" + elements[i].id).css('width'),
                });
            } else {
                $("#" + elements[i].id).select2({width: 'resolve'});
            }
        }
    }

}

