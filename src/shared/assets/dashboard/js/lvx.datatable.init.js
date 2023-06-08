$(document).on('ready', function () {
    // INITIALIZATION OF DATATABLES
    // =======================================================
    HSCore.components.HSDatatables.init($('#datatable'), {
        select: {
            style: 'multi',
            selector: 'td:first-child input[type="checkbox"]',
            classMap: {
                checkAll: '#datatableCheckAll',
                counter: '#datatableCounter',
                counterInfo: '#datatableCounterInfo'
            }
        },
        language: {
            zeroRecords: `<div class="text-center p-4">
              <img class="mb-3" src="./assets/svg/illustrations/oc-error.svg" alt="Image Description" style="width: 10rem;" data-hs-theme-appearance="default">
              <img class="mb-3" src="./assets/svg/illustrations-light/oc-error.svg" alt="Image Description" style="width: 10rem;" data-hs-theme-appearance="dark">
            <p class="mb-0">Element non trouver</p>
            </div>`,
			"oPaginate": {
				"sFirst":    "Primero",
				"sLast":    "Último",
				"sNext":    "Siguiente",
				"sPrevious": "Anterior"
			}
        },
		drawCallback: function( settings ) {
			setTimeout(function(){
				$("#datatablePagination").show();
				$("#datatable_pagination .paginate_item .previous span").text('Préc.');
				$("#datatable_pagination .paginate_item .next span").text('Suiv.');
			}, 300);
		}
    });

    const datatable = HSCore.components.HSDatatables.getItem('datatable')

    $('.js-datatable-filter').on('change', function() {
        var $this = $(this),
            elVal = $this.val(),
            targetColumnIndex = $this.data('target-column-index');

        datatable.column(targetColumnIndex).search(elVal).draw();
    });

    $('#datatableSearch').on('mouseup', function (e) {
        var $input = $(this),
            oldValue = $input.val();

        if (oldValue == "") return;

        setTimeout(function(){
            var newValue = $input.val();

            if (newValue == ""){
                // Gotcha
                datatable.search('').draw();
            }
        }, 1);
    });
});