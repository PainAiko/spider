$(document).on('ready', function () {
  $('.kl-select-two').select2({
    placeholder: ''
  });
  $('#id-customer-code').select2({
    placeholder: 'Code Client'
  });
  $('#id-customer-name').select2({
    placeholder: 'Nom & prénom'
  });
  $('#id-customer-email').select2({
    placeholder: 'Mail'
  });
  $('#id-customer-phone').select2({
    placeholder: 'Téléphone'
  });
  $('#id-customer-kind, #id-type-doc').select2({
    placeholder: 'Type'
  });
  $('#id-facturation-client, #id-client-name').select2({
    placeholder: 'Client'
  });
  $('#id-facturation-equal').select2({
    placeholder: 'Egal à'
  });
  $('#id-center-initial-storage, #id-center-allocated, #id-center').select2({
    placeholder: '- Séléctionner un centre -'
  });
  $('#id-allocation-product, #id-code-product-entree').select2({
    placeholder: '- Séléctionner un produit -'
  });
  $('#id-registration-status').select2({
    placeholder: 'En cours'
  });
  $('#id-maintenance-type, #id-select-rapport').select2({
    placeholder: '-Séléctionner -'
  });
  $('#id-center-product').select2({
    placeholder: 'Centre'
  });
  $('#id-provider-product').select2({
    placeholder: '- Séléctionner un fournisiseur -'
  });
  $('#id-quantity-product').select2({
    placeholder: 'Quantité égal..'
  });
  $('#id-pv-product').select2({
    placeholder: 'PV égale à'
  });
  $('#id-pr-product').select2({
    placeholder: 'PR égale à'
  });
  $('#id-category-product').select2({
    placeholder: 'Catégorie'
  });
  $('#id-purchase-type').select2({
    placeholder: 'Type d’achat'
  });
  $('#id-global').select2({
    placeholder: 'Global'
  });
  $('#id-code-product').select2({
    placeholder: '- Séléctionner le produit -'
  });
  $('#id-customer-proforma').select2({
    placeholder: '-Séléctionner client-'
  });
  $('#id-rapport-year').select2({
    placeholder: 'Année'
  });
  $('#id-personal').select2({
    placeholder: 'Personnels'
  });
  $('#id-intervention').select2({
    placeholder: 'Intervention'
  });
  $('#id-planning-date').select2({
    placeholder: 'Séléctionner une date'
  });
  if ($(".kl-input-datepicker").length > 0) {
    $(".kl-input-datepicker").daterangepicker({
      autoUpdateInput: false,
      singleDatePicker: true,
      showDropdowns: true,
      // minYear: 1901,
      minDate: moment(),
      locale: {
        // format: 'DD-MM-YYYY',
        // separator: ' - ',
        applyLabel: "Appliquer",
        cancelLabel: "Annuler",
      },
    });
  }
  $('.kl-input-datepicker').on('apply.daterangepicker', function (ev, picker) {
    $(this).val(picker.startDate.format('DD/MM/YYYY'));
  });


  $('#id-related-finished-products').select2({
    placeholder: 'Séléctionner vos produits liés'
  });

  $(window).load(function () {
    $(".kl-filter-fc-left .ts-control .items").trigger("click");
  });
  modaleFullCalendar();

  var btn_reopen = $('.kl-reopen-box'),
    btn_close = $('.kl-close-box');
  $([btn_reopen, btn_close]).each(function () {
    $('.kl-with-box-icon').click(function () {
      $('.kl-with-box-icon').removeClass('kl-btn-animation-box');
      $(this).addClass('kl-btn-animation-box');
    });
  });

  setTimeout(function () {
    $(".kl-filter-fc-left .ts-control .items.ts-input").trigger("click");
  }, 1000);
  /*$('.kl-calendar-planninng').mouseenter(function(e){
    $(".kl-filter-fc-left .ts-control .items.ts-input").trigger("click");
    e.stopPropagation();
  });*/

  let count_option = $(".kl-display-option option").length
  if ($(".kl-count-option")) {
    $(".kl-count-option").text("+" + count_option);
  }

  //focus textarea
  focusTextarea();

  $("#datatable_pagination .paginate_item .previous span").text('Préc.');
  $("#datatable_pagination .paginate_item .next span").text('Suiv.');
  $(document).on('click', '#datatable_pagination .paginate_item a', function () {
    $("#datatablePagination").hide();
  });
});

$(window).on('load', function () {
  $(".kl-tom-select-custom .ts-control .ts-input").trigger("click"); 
});
if ($(".kl-input-datepicker-calendar").length > 0){
  $(".kl-input-datepicker-calendar").daterangepicker({
    autoUpdateInput: false,
    singleDatePicker: true,
    showDropdowns: true,
    minDate: moment(),
    locale: {
      applyLabel: "Appliquer",
      cancelLabel: "Annuler",
    },
  });
}

$(function () {
  if ($("#id-calendar-datepicker").length > 0) {
    $("#id-calendar-datepicker").datepicker({
      showOn: "both",
      showOptions: {
        direction: "down",
      },

      autoSize: true,
      //buttonText: "Select date",
      changeMonth: true,
      changeYear: true,
      firstDay: 1,
      showOtherMonths: true,
      selectOtherMonths: true,

      onSelect: function (formated, dates) {
        $("#js-fullcalendar").fullCalendar("gotoDate", formated);
      },
    }).val('');
    // $("#datepicker").datepicker("option", "dateFormat", "DD, d MM, yy");
    // $("#datepicker").datepicker("setDate", "+0d");
  }
});


function modaleFullCalendar() {
  $(".kl-fc-yellow").click(function () {
    $('.kll').addClass('kl-yellow')
  });
}

function focusTextarea() {
  $(".kl-textarea").on("click", function () {
    $(".kl-label-for-placeholder").addClass("d-none");
  });
  $(".kl-textarea").on("focus", function () {
    $(".kl-label-for-placeholder").addClass("d-none");
  });
  $(".kl-textarea").on("focusout", function () {
    $(".kl-label-for-placeholder").removeClass("d-none");
  });
  $(".kl-label-for-placeholder").on("click", function () {
    $(".kl-textarea").trigger("click");
  });
}

//Datepicker
$(function () {
  $(".kl-datepicker").datepicker(
    {
      showOn: 'button',
      buttonImageOnly: true,
      buttonImage: './assets/img/icon/date-picker.svg'
    }
  );
});

$('#id-date-proforma').multiDatesPicker(
  {
    separator: ' - '
  }
);

//Input file
let fileInput = document.getElementById("id-contrat-scan");
let fileSelect = document.getElementsByClassName("kl-file-upload-select")[0];
if (fileSelect) {
  fileSelect.onclick = function () {
    fileInput.click();
  }
  fileInput.onchange = function () {
    let filename = fileInput.files[0].name;
    let selectName = document.getElementsByClassName("kl-file-select-name")[0];
    selectName.innerText = filename;
  }
}


//Empty table static version
$('#id-new-voucher, #id-grant-application, #id-voucher-invoice-list').DataTable({
  dom: 'Plfrtip',
  language: {
    emptyTable: 'Aucun enregistrement trouvé'
  }
});