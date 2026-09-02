var allitems=["#jqxCheckBoxExcess1",
               "#jqxCheckBoxExcess2",
               "#jqxCheckBoxExcess3",
               "#jqxCheckBoxExcess4",
               "#jqxCheckBoxExcess1Excess2Excess3Excess4",
               "#jqxCheckBoxCumQe1",
               "#jqxCheckBoxCumQe2",
               "#jqxCheckBoxCumQe1Qe2"];

var allitemsLeft=["#jqxCheckBoxExcess1",
                  "#jqxCheckBoxExcess2",
                  "#jqxCheckBoxExcess3",
                  "#jqxCheckBoxExcess4",
                  "#jqxCheckBoxExcess1Excess2Excess3Excess4"];

var allitemsRight=["#jqxCheckBoxCumQe1",
                   "#jqxCheckBoxCumQe2",
                   "#jqxCheckBoxCumQe1Qe2"];

const graphName="ecbImpactLiquidity";
var graphService = "ecbImpact";
var removeEmpty = true;

// ECB Impact requested defaults.
const ECB_IMPACT_DEFAULT_LEFT = "#jqxCheckBoxExcess1Excess2Excess3Excess4"; // Excess Liquidity
const ECB_IMPACT_DEFAULT_RIGHT = "#jqxCheckBoxCumQe1Qe2";                  // ECB CUMULATIVE QE

$(window).on('load', function() {
    $('#overlay').fadeOut();
    $('#nav-tabContent').show();
    $('#grid-content').css('display', 'block');

    // IMPORTANT: the existing Show flow performs several chart resets/state updates
    // that the legacy ECB Impact rendering expects. A direct drawGraph() on initial
    // page load skips that preparation, which is why the chart only appeared after
    // the user manually clicked Show. Reuse the exact working Show flow automatically.
    // A zero-delay callback lets the current load/event stack finish first.
    setTimeout(function() {
        syncEcbImpactCheckedItems();
        $('#show').trigger('click');
    }, 0);
});

$(document).ready(function() {
    initializeNewsBanner();
    initializeNavigationButtons();

    // Keep the existing shared checkbox logic. isecbImpactSeries() depends on
    // checkedItemidLeft and checkedItemidRight being populated before drawGraph().
    initialiazeItemsLeft(allitemsLeft, 1);
    initialiazeItemsRight(allitemsRight, 1);
    initialiazeClearFilterButton();

    // Use an ECB-specific Show handler because the generic handler forces 6 months
    // and collapses the factor panel.
    initializeEcbImpactShowButton();

    // Replace the state initialization previously supplied by graph history.
    // This runs after jqxCheckBox widgets/change handlers are initialized.
    initializeEcbImpactDefaultSelection();
});

function drawGraph() {
    // Always rebuild the shared selection arrays from the ACTUAL checkbox state
    // immediately before the legacy chart function reads them.
    // isecbImpactSeries() builds checkedItemValues from these two arrays.
    syncEcbImpactCheckedItems();

    // ECB Impact requires one factor from the left and one from the right.
    // Do not call the legacy chart function with an incomplete selection because
    // it immediately dereferences itemValue[checkedItemValues[0/1]].
    if (checkedItemidLeft.length !== 1 || checkedItemidRight.length !== 1) {
        console.warn('ECB Impact chart not drawn: expected one checked factor on each side.', {
            checkedItemidLeft: checkedItemidLeft,
            checkedItemidRight: checkedItemidRight
        });
        return;
    }

    isecbImpactSeries();
}

/**
 * Synchronize the legacy shared arrays with the checkboxes currently checked
 * on screen. This is the state isecbImpactSeries() uses to build checkedItemValues.
 */
function syncEcbImpactCheckedItems() {
    checkedItemidLeft = allitemsLeft.filter(function(item) {
        return $(item).jqxCheckBox('checked') === true;
    });

    checkedItemidRight = allitemsRight.filter(function(item) {
        return $(item).jqxCheckBox('checked') === true;
    });

    checkedItemLeft = checkedItemidLeft.length;
    checkedItemRight = checkedItemidRight.length;
    checkedItem = checkedItemLeft + checkedItemRight;
}

/**
 * Initialize the two required ECB Impact series without relying on saved graph history.
 * isecbImpactSeries() requires one valid ID in checkedItemidLeft and one in
 * checkedItemidRight; otherwise it dereferences undefined itemValue entries.
 */
function initializeEcbImpactDefaultSelection() {
    // Set the visible jqx checkbox state first.
    $(ECB_IMPACT_DEFAULT_LEFT).jqxCheckBox({ checked: true });
    $(ECB_IMPACT_DEFAULT_RIGHT).jqxCheckBox({ checked: true });

    // Rebuild the legacy arrays from the actual jqx checkbox state.
    // This guarantees isecbImpactSeries() receives both checked item IDs.
    syncEcbImpactCheckedItems();

    // Preserve the existing rule: only one factor may be selected on each side.
    allitemsLeft.forEach(function(item) {
        $(item).jqxCheckBox({ disabled: item !== ECB_IMPACT_DEFAULT_LEFT });
    });
    allitemsRight.forEach(function(item) {
        $(item).jqxCheckBox({ disabled: item !== ECB_IMPACT_DEFAULT_RIGHT });
    });
}

/** Set the requested default range to five years. */
function setEcbImpactFiveYearRange() {
    monthDate = new Date();
    monthDate.setFullYear(monthDate.getFullYear() - 5);
    monthDate.setHours(0, 0, 0, 0);

    // Keep the global chart end date aligned with today.
    date = new Date();
    date.setHours(0, 0, 0, 0);
}

/**
 * ECB Impact version of the existing Show handler.
 * It keeps all factor choices visible and resets the graph to five years.
 */
function initializeEcbImpactShowButton() {
    $("#show").jqxButton({ theme: 'dark', height: 30, width: 74 });

    $("#show").click(function() {
        functionId = -1;
        setEcbImpactFiveYearRange();

        resetActiveChartType();
        resetActiveFontSize();
        resetActiveChartColor();
        resetActiveChartColorTransparency();
        resetActiveChartGrid();

        $("#button-monthBackward").prop('disabled', false);
        $("#button-yearBackward").prop('disabled', false);
        fromNavigation = false;

        if (checkedItemLeft > 0 && checkedItemRight > 0) {
            $('#grid-content').css('display', 'block');
            drawGraph();
        } else {
            $('#alertFiltter-modal').modal('show');
        }
    });
}
