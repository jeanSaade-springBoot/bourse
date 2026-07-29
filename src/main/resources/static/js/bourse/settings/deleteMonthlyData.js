var deleteFamilyItem = null;
var deleteGroupItem = null;

var monthlyDeleteRecordCount = 0;
var monthlyDeleteSelectionSignature = null;

var deleteScreenBinding = false;
var deleteRequestInProgress = false;

/*
 * Replace with your actual two asset IDs.
 *
 * Example:
 * var ALLOWED_DELETE_ASSET_IDS = [3, 10];
 */
var ALLOWED_DELETE_ASSET_IDS = [
  8,9,12
];

$(document).ready(function () {
	
	$("#deleteFromMonth").jqxDateTimeInput({
	    theme: "dark",
	    width: "180px",
	    height: 30,
	    formatString: "MMM yyyy",
	    showCalendarButton: true,
	    value: new Date()
	});
	
	$("#deleteToMonth").jqxDateTimeInput({
	    theme: "dark",
	    width: "180px",
	    height: 30,
	    formatString: "MMM yyyy",
	    showCalendarButton: true,
	    value: new Date()
	});
	
    initializeDeleteScreen();
    initializeDeleteButtons();
    initializeDeleteDropDowns();
    initializeDeleteMonthInputs();
    registerDeleteEvents();

    $("#content").show();
});

/* =========================================================
   INITIALIZATION
   ========================================================= */

function initializeDeleteScreen() {

    deleteFamilyItem = null;
    deleteGroupItem = null;

    monthlyDeleteRecordCount = 0;
    monthlyDeleteSelectionSignature = null;

    $("#monthlyDeleteMessage").empty();
    $("#confirmDeleteRecordCount").text("0");
    $("#monthlyDeleteConfirmationText").val("");
}

function initializeDeleteButtons() {

    $("#openDeleteConfirmationBtn").jqxButton({
        theme: "dark",
        width: 190,
        height: 35,
        template: "danger",
        disabled: true
    });

    $("#confirmMonthlyDeleteBtn").jqxButton({
        theme: "dark",
        width: 110,
        height: 35,
        template: "danger",
        disabled: true
    });

    $("#viewall").jqxButton({
        theme: "dark",
        width: 110,
        height: 35,
        template: "primary"
    });

    $("#viewall").css("display", "block");

    $("#viewall").on("click", function () {

        popupWindow(
            "/bourse/allnews",
            "Libvol - View All News",
            window,
            1300,
            600
        );
    });
}

function initializeDeleteDropDowns() {

    initializeDeleteAssetDropDown();
    initializeDeleteGroupDropDown();
}

/* =========================================================
   ASSET DROPDOWN
   ========================================================= */

function initializeDeleteAssetDropDown() {

    var familySource = {
        datatype: "json",

        datafields: [
            { name: "id" },
            { name: "description" }
        ],

        url: "/admin/getassetclass",
        async: true
    };

    var familyDataAdapter = new $.jqx.dataAdapter(
        familySource,
        {
            beforeLoadComplete: function (records) {

                if (!Array.isArray(records)) {
                    return [];
                }

                return records.filter(function (asset) {

                    return ALLOWED_DELETE_ASSET_IDS.indexOf(
                        Number(asset.id)
                    ) !== -1;
                });
            },

            loadError: function (xhr) {

                showDeleteMessage(
                    getDeleteAjaxError(
                        xhr,
                        "Unable to load asset classes."
                    ),
                    "error"
                );
            }
        }
    );

    $("#deleteFamilyDropDown").jqxDropDownList({
        source: familyDataAdapter,
        displayMember: "description",
        valueMember: "id",
        theme: "dark",
        width: "100%",
        height: 30,
        autoDropDownHeight: true,
        placeHolder: "Select Asset Class",
        selectedIndex: -1
    });
}

/* =========================================================
   GROUP DROPDOWN
   ========================================================= */

function initializeDeleteGroupDropDown() {

    $("#deleteGroupDropDown").jqxDropDownList({
        source: [],
        displayMember: "description",
        valueMember: "id",
        theme: "dark",
        width: "100%",
        height: 30,
        autoDropDownHeight: true,
        placeHolder: "Select Group",
        disabled: true,
        selectedIndex: -1
    });
}

function loadDeleteGroups(assetId) {

    $("#overlay").show();

    $.ajax({
        url: "/admin/getgroupsbyfamily/" + assetId,
        type: "GET",
        dataType: "json",

        success: function (data) {

          	var groups = Array.isArray(data)
			    ? data
			    : [];
			
			// Asset 8 -> show only Group 48
			if (Number(assetId) === 9) {
			    groups = groups.filter(function (group) {
			        return Number(group.id) === 48;
			    });
			}

            if (groups.length === 0) {

                resetDeleteGroupDropDown();

                showDeleteMessage(
                    "No groups were found for the selected asset.",
                    "warning"
                );

                return;
            }

            var groupSource = {
                datatype: "json",

                datafields: [
                    { name: "id" },
                    { name: "description" },
                    { name: "assetId" }
                ],

                localdata: groups
            };

            var groupDataAdapter =
                new $.jqx.dataAdapter(groupSource);

            deleteScreenBinding = true;

            $("#deleteGroupDropDown").jqxDropDownList({
                source: groupDataAdapter,
                displayMember: "description",
                valueMember: "id",
                disabled: false,
                selectedIndex: -1
            });

            $("#deleteGroupDropDown")
                .jqxDropDownList("clearSelection");

            deleteScreenBinding = false;
        },

        error: function (xhr) {

            resetDeleteGroupDropDown();

            showDeleteMessage(
                getDeleteAjaxError(
                    xhr,
                    "Unable to load groups."
                ),
                "error"
            );
        },

        complete: function () {

            $("#overlay").fadeOut();
            updateDeleteButtonState();
        }
    });
}

function resetDeleteGroupDropDown() {

    deleteScreenBinding = true;

    $("#deleteGroupDropDown").jqxDropDownList({
        source: [],
        disabled: true,
        selectedIndex: -1
    });

    $("#deleteGroupDropDown")
        .jqxDropDownList("clearSelection");

    deleteScreenBinding = false;
    deleteGroupItem = null;
}

/* =========================================================
   EVENTS
   ========================================================= */

function registerDeleteEvents() {

    $("#deleteFamilyDropDown").on(
        "select",
        function (event) {

            if (deleteScreenBinding) {
                return;
            }

            deleteFamilyItem =
                event.args
                    ? event.args.item
                    : null;

            deleteGroupItem = null;

            resetDeleteGroupDropDown();
           
            clearDeleteMessage();

            if (deleteFamilyItem) {

                loadDeleteGroups(
                    deleteFamilyItem.value
                );
            }

            updateDeleteButtonState();
        }
    );

    $("#deleteGroupDropDown").on(
        "select",
        function (event) {

            if (deleteScreenBinding) {
                return;
            }

            deleteGroupItem =
                event.args
                    ? event.args.item
                    : null;

            
            clearDeleteMessage();
            updateDeleteButtonState();
        }
    );

    $("#deleteFromMonth, #deleteToMonth").on(
        "change input",
        function () {

        
            clearDeleteMessage();
            updateDeleteButtonState();
        }
    );

	$("#openDeleteConfirmationBtn").on("click", function () {
	
	    var validation = validateDeleteForm();
	
	    if (!validation.valid) {
	        showDeleteMessage(validation.message, "error");
	        return;
	    }
	
	    fillDeleteConfirmationModal();
	
	    $("#monthlyDeleteConfirmationModal").modal("show");
	
	});
    $("#monthlyDeleteConfirmationText").on(
        "input",
        function () {

            var validConfirmation =
                $.trim($(this).val()) === "DELETE";

            $("#confirmMonthlyDeleteBtn").jqxButton({
                disabled: !validConfirmation
            });
        }
    );

    $("#confirmMonthlyDeleteBtn").on(
        "click",
        function () {

            executeMonthlyDelete();
        }
    );

    $("#monthlyDeleteConfirmationModal").on(
        "hidden.bs.modal",
        function () {

            $("#monthlyDeleteConfirmationText").val("");

            $("#confirmMonthlyDeleteBtn").jqxButton({
                disabled: true
            });

            $("#confirmMonthlyDeleteBtn").val("DELETE");
        }
    );
}

/* =========================================================
   MONTH INPUTS
   ========================================================= */

function initializeDeleteMonthInputs() {

    var currentDate = new Date();

    var currentMonth =
        currentDate.getFullYear() +
        "-" +
        padDeleteNumber(
            currentDate.getMonth() + 1
        );

    $("#deleteFromMonth").val(currentMonth);
    $("#deleteToMonth").val(currentMonth);

    updateDeleteButtonState();
}
function fillDeleteConfirmationModal() {

    $("#confirmDeleteAsset").text(
        getDeleteDropDownLabel("#deleteFamilyDropDown")
    );

    $("#confirmDeleteGroup").text(
        getDeleteDropDownLabel("#deleteGroupDropDown")
    );

    var fromDate = $("#deleteFromMonth").jqxDateTimeInput("getDate");
    var toDate = $("#deleteToMonth").jqxDateTimeInput("getDate");

    $("#confirmDeletePeriod").text(
        fromDate.toLocaleDateString("en-US", {
            month: "short",
            year: "numeric"
        }) +
        " - " +
        toDate.toLocaleDateString("en-US", {
            month: "short",
            year: "numeric"
        })
    );

    $("#monthlyDeleteConfirmationText").val("");

    $("#confirmMonthlyDeleteBtn").jqxButton({
        disabled: true
    });
}
/* =========================================================
   FORM VALIDATION
   ========================================================= */

function validateDeleteForm() {

    var assetId =
        getDeleteDropDownValue(
            "#deleteFamilyDropDown"
        );

    var groupId =
        getDeleteDropDownValue(
            "#deleteGroupDropDown"
        );

  var fromMonth = $("#deleteFromMonth").jqxDateTimeInput("getDate");
  var toMonth = $("#deleteToMonth").jqxDateTimeInput("getDate");

    if (!assetId) {

        return {
            valid: false,
            message: "Please select an asset class."
        };
    }

    if (
        ALLOWED_DELETE_ASSET_IDS.indexOf(
            Number(assetId)
        ) === -1
    ) {

        return {
            valid: false,
            message:
                "The selected asset is not allowed for monthly data deletion."
        };
    }

    if (!groupId) {

        return {
            valid: false,
            message: "Please select a group."
        };
    }

    if (!fromMonth) {

        return {
            valid: false,
            message: "Please select the From Month."
        };
    }

    if (!toMonth) {

        return {
            valid: false,
            message: "Please select the To Month."
        };
    }

    if (fromMonth > toMonth) {

        return {
            valid: false,
            message:
                "From Month cannot be after To Month."
        };
    }

    return {
        valid: true,
        message: ""
    };
}

function updateDeleteButtonState() {

    var validation = validateDeleteForm();

    var disableButton =
        !validation.valid ||
        deleteRequestInProgress;

    if (
        $("#openDeleteConfirmationBtn")
            .data("jqxButton")
    ) {

        $("#openDeleteConfirmationBtn").jqxButton({
            disabled: disableButton
        });

    } else {

        $("#openDeleteConfirmationBtn").prop(
            "disabled",
            disableButton
        );
    }
}



/* =========================================================
   DELETE
   ========================================================= */

function executeMonthlyDelete() {

    if (deleteRequestInProgress) {
        return;
    }

    var confirmationText =
        $.trim(
            $("#monthlyDeleteConfirmationText").val()
        );

    if (confirmationText !== "DELETE") {
        return;
    }

    deleteRequestInProgress = true;

    $("#confirmMonthlyDeleteBtn").jqxButton({
        disabled: true
    });

    $("#confirmMonthlyDeleteBtn").val(
        "DELETING..."
    );

    $.ajax({
        /*
         * Update this URL to match your controller.
         */
        url: "/admin/monthly-data/delete",

        type: "DELETE",

        contentType: "application/json",

        dataType: "json",

        data: JSON.stringify(
            buildDeleteRequest()
        ),

          success: function (response) {

			    $("#monthlyDeleteConfirmationModal").modal("hide");
			
			    showDeleteMessage(
			        response && response.message
			            ? response.message
			            : "Monthly data deleted successfully.",
			        "success"
			    );
			
	  },
        error: function (xhr) {

            $("#monthlyDeleteConfirmationModal")
                .modal("hide");

            showDeleteMessage(
                getDeleteAjaxError(
                    xhr,
                    "Unable to delete the selected records."
                ),
                "error"
            );
        },

        complete: function () {

            deleteRequestInProgress = false;

            $("#confirmMonthlyDeleteBtn").val(
                "DELETE"
            );

            updateDeleteButtonState();
        }
    });
}



/* =========================================================
   REQUEST
   ========================================================= */
function formatDateForBackend(date) {

    if (
        !date ||
        Object.prototype.toString.call(date) !== "[object Date]" ||
        isNaN(date.getTime())
    ) {
        return null;
    }

    return (
        date.getFullYear() +
        "-" +
        padDeleteNumber(date.getMonth() + 1) +
        "-" +
        padDeleteNumber(date.getDate())
    );
}
function buildDeleteRequest() {

    var fromDate =
        $("#deleteFromMonth").jqxDateTimeInput("getDate");

    var toDate =
        $("#deleteToMonth").jqxDateTimeInput("getDate");

    return {
        assetId: Number(
            getDeleteDropDownValue(
                "#deleteFamilyDropDown"
            )
        ),

        groupId: Number(
            getDeleteDropDownValue(
                "#deleteGroupDropDown"
            )
        ),

        fromDate: formatDateForBackend(fromDate),
        toDate: formatDateForBackend(toDate)
    };
}
/* =========================================================
   DROPDOWN HELPERS
   ========================================================= */

function getDeleteDropDownValue(selector) {

    try {

        var selectedItem =
            $(selector).jqxDropDownList(
                "getSelectedItem"
            );

        if (
            !selectedItem ||
            selectedItem.value === null ||
            selectedItem.value === undefined ||
            selectedItem.value === ""
        ) {
            return null;
        }

        return selectedItem.value;

    } catch (error) {

        return null;
    }
}

function getDeleteDropDownLabel(selector) {

    try {

        var selectedItem =
            $(selector).jqxDropDownList(
                "getSelectedItem"
            );

        return selectedItem
            ? selectedItem.label
            : "-";

    } catch (error) {

        return "-";
    }
}

/* =========================================================
   MESSAGES
   ========================================================= */

function showDeleteMessage(message, type) {

    $("#monthlyDeleteMessage").html(
        '<div class="delete-message ' +
        escapeDeleteHtml(type) +
        '">' +
        escapeDeleteHtml(message) +
        "</div>"
    );
}

function clearDeleteMessage() {

    $("#monthlyDeleteMessage").empty();
}

function getDeleteAjaxError(
    xhr,
    defaultMessage
) {

    if (
        xhr &&
        xhr.responseJSON
    ) {

        return (
            xhr.responseJSON.message ||
            xhr.responseJSON.error ||
            defaultMessage
        );
    }

    if (
        xhr &&
        xhr.responseText
    ) {

        try {

            var response =
                JSON.parse(xhr.responseText);

            return (
                response.message ||
                response.error ||
                defaultMessage
            );

        } catch (error) {

            return defaultMessage;
        }
    }

    return defaultMessage;
}

/* =========================================================
   DATE HELPERS
   ========================================================= */

function formatDeleteMonth(monthValue) {

    if (!monthValue) {
        return "-";
    }

    var parts = monthValue.split("-");

    var date = new Date(
        Number(parts[0]),
        Number(parts[1]) - 1,
        1
    );

    return date.toLocaleDateString(
        "en-US",
        {
            month: "short",
            year: "numeric"
        }
    );
}

function padDeleteNumber(value) {

    return String(value).padStart(
        2,
        "0"
    );
}

/* =========================================================
   HTML ESCAPING
   ========================================================= */

function escapeDeleteHtml(value) {

    if (
        value === null ||
        value === undefined
    ) {
        return "";
    }

    return $("<div>")
        .text(value)
        .html();
}

/* =========================================================
   PAGE LOAD
   ========================================================= */

$(window).on("load", function () {

    $("#overlay").fadeOut();
    $("#content").show();
});