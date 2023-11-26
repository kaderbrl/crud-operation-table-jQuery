// Add Inputs Classes
var inputClass = "form-control form-control-sm focus-ring focus-ring-light";
$("input").addClass(inputClass);

// Add Row Button
$("#addRowBtn").on("click", function () {
    var thCount = $("#tblCrud thead th").length;
    var tdHtml = `<td><input type="text" class="${inputClass}" value=""></td>`.repeat(thCount - 1);

    var html = `
        <tr>
            ${tdHtml}
            <td>
                <button type="button" class="editBtn btn btn-success btn-sm rounded-circle" disabled><i class="bi bi-floppy"></i></button>
                <button type="button" class="deleteBtn btn btn-danger btn-sm rounded-circle"><i class="bi bi-trash3"></i></button>
            </td>
        </tr>
    `;
    $("#tblCrud tbody").append(html);
});


// Input Change Event
$("#tblCrud").on("input", "input", function () {
    var row = $(this).closest("tr");
    var isEmpty = row.find("input").filter(function () {
        return $(this).val().trim() === "";
    }).length > 0;

    row.find(".editBtn").prop("disabled", isEmpty);
});

// Edit Button
$("#tblCrud").on("click", ".editBtn", function () {
    var row = $(this).closest("tr");
    var inputs = row.find("input");
    inputs.prop("readonly", !inputs.prop("readonly"));
    inputs.prop("readonly") ? $(this).html(`<i class="bi bi-pencil-square"></i>`) : $(this).html(`<i class="bi bi-floppy"></i>`);
});

// Delete Button
$("#tblCrud").on("click", ".deleteBtn", function () {
    $(this).closest("tr").remove();
});