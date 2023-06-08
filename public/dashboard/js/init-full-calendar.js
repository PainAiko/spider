(function () {
    window.onload = function () {



        // INITIALIZATION OF FORM SEARCH
        // =======================================================
        new HSFormSearch('.js-form-search')


        // INITIALIZATION OF BOOTSTRAP DROPDOWN
        // =======================================================
        HSBsDropdown.init()


        // INITIALIZATION OF SELECT
        // =======================================================
        HSCore.components.HSTomSelect.init('.js-select', {
            hideSearch: true
        })


        // INITIALIZATION OF FULLCALENDAR
        // =======================================================
        let $popover,
            filterSearchExample,
            editableEvent = {}

        const popoverContent = function (data) {
            return `
              <h3 class="mb-4">${data.event.title}</h3>

              <div class="d-flex mb-4">
                  <i class="bi bi-clock nav-icon"></i>
                  <div class="flex-grow-1">
                      <span class="d-block text-dark mb-2">${moment(data.event.start).format('dddd, MMMM DD')} - ${moment(data.event.end).format('dddd, MMMM DD')}</span>
                      <span class="d-block">Repeat: <span class="text-dark text-capitalize">${data.event.extendedProps.repeatField}</span></span>
                  </div>
              </div>

              <div class="d-flex mb-4">
                  <i class="bi bi-people nav-icon"></i>
                  <div class="flex-grow-1">
                      <span class="d-block text-dark">${getAvatars(data.event.extendedProps.guestsField) || 'Empty'}</span>
                  </div>
              </div>

              <div class="d-flex mb-4">
                  <i class="bi bi-pin-map nav-icon"></i>
                  <div class="flex-grow-1">
                      <span class="d-block text-dark">${data.event.extendedProps.eventLocationLabel || 'Empty'}</span>
                  </div>
              </div>

              <div class="d-flex mb-4">
                  <i class="bi bi-text-left nav-icon"></i>
                  <div class="flex-grow-1">
                      <span class="d-block text-dark">${data.event.extendedProps.eventDescriptionLabel || 'Empty'}</span>
                  </div>
              </div>

              <div class="d-flex align-items-center mb-4">
                  <div class="avatar avatar-xs avatar-circle me-2">
                      <img class="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description">
                  </div>
                  <div class="flex-grow-1">
                      <span class="d-block text-dark">Mark Williams</span>
                  </div>
              </div>

              <div class="d-flex justify-content-end">
                  <a id="closePopover" href="javascript:;" class="btn btn-sm btn-white me-2">Close</a>
                  <a id="modal-invoker-${data.event.id}" href="javascript:;" class="btn btn-sm btn-primary">
                      <i class="bi bi-pencil"></i>
                      Edit
                  </a>
              </div>
        `;
        },
            eventContent = function (data) {
                return `
              <div>
                  <div class="fc-event-time">${$gridViewSelect.value === 'timeGridWeek' && !data.allDay ? moment(data.start).format('HH:mm') + '-' + moment(data.end).format('HH:mm') : ''}</div>
                  <div class="d-flex">
                      ${data.extendedProps.image
                        ? `<img class="avatar avatar-xs me-2" src="${data.extendedProps.image}" alt="Image Description">`
                        : ''
                    }
                      <span class="fc-event-title fc-sticky">${data.title}</span>
                  </div>
              </div>
          `;
            }

        // Fullcalendar controls
        const $prevMonthBtn = document.querySelector('[data-fc-prev-month]'),
            $nextMonthBtn = document.querySelector('[data-fc-next-month]'),
            $todayBtn = document.querySelector('[data-fc-today]'),
            $dateTitle = document.querySelector('[data-fc-title]'),
            $gridViewSelect = document.querySelector('[data-fc-grid-view]')

        // Filter controls
        const $filterByTitle = document.querySelector('#filter-by-title'),
            $filters = document.querySelectorAll('[data-filter]')

        // Edit popup fields
        const $addEventToCalendarModal = document.querySelector("#addEventToCalendarModal"),
            $titleField = document.querySelector('#eventTitleLabel'),
            $repeatLabel = document.querySelector('#eventRepeatLabel'),
            $eventDescriptionLabel = document.querySelector('#eventDescriptionLabel'),
            $eventLocationLabel = document.querySelector('#eventLocationLabel'),
            $eventColorLabel = document.querySelector('#eventColorLabel'),
            $eventGuestsLabel = document.querySelector('#eventGuestsLabel'),
            $processEvent = document.querySelector('#processEvent'),
            allMembers = [
                {
                    "value": "Amanda Harvey",
                    "src": null
                }, {
                    "value": "Clarice Boone",
                    "src": null
                }, {
                    "value": "Sam Kart",
                    "src": null
                }, {
                    "value": "Mark Williams",
                    "src": null
                }, {
                    "value": "Linda Bates",
                    "src": null
                }, {
                    "value": "Rachel Doe",
                    "src": null
                }, {
                    "value": "David Harrison",
                    "src": "./assets/img/160x160/img3.jpg"
                }, {
                    "value": "Finch Hoot",
                    "src": "./assets/img/160x160/img5.jpg"
                }, {
                    "value": "Ella Lauda",
                    "src": "./assets/img/160x160/img9.jpg"
                }
            ]

        let guestsField,
            repeatField,
            eventColorField,
            fullcalendarEditable

        // Init popup
        const addEventToCalendarModal = new bootstrap.Modal($addEventToCalendarModal);

        HSCore.components.HSFlatpickr.init('#eventDateRangeLabel');
        const eventDateRange = HSCore.components.HSFlatpickr.getItem('eventDateRangeLabel');

        HSCore.components.HSTomSelect.init($eventGuestsLabel, {
            options: allMembers,
            render: {
                option: function (data, escape) {
                    return data.src ? `<div><img class="avatar avatar-xs avatar-circle me-2" src="${data.src}">${data.value}</div>` : `
              <div>
                <div class="avatar avatar-xs avatar-soft-primary avatar-circle me-2">
                  <span class="avatar-initials">${data.value.charAt(0)}</span>
                </div>

                ${data.value}
              </div>
            `
                },
                item: function (item, escape) {
                    return item.src ? `<div><img class="avatar avatar-xs avatar-circle me-2" src="${item.src}">${item.value}</div>` : `
              <div>
                <div class="avatar avatar-xs avatar-soft-primary avatar-circle me-2">
                  <span class="avatar-initials">${item.value.charAt(0)}</span>
                </div>

                ${item.value}
              </div>
            `
                }
            }
        })

        guestsField = HSCore.components.HSTomSelect.getItem("eventGuestsLabel")
        repeatField = HSCore.components.HSTomSelect.getItem("eventRepeatLabel")
        eventColorField = HSCore.components.HSTomSelect.getItem("eventColorLabel")

        HSCore.components.HSFullCalendar.init('#js-fullcalendar', {
            events: [
                {
                    id: 1,
                    title: "Curatives",
                    start: "2022-06-22",
                    end: "2022-06-22",
                    className: "fullcalendar-custom-event-hs-team kl-bg-blue",
                    eventDescriptionLabel: "",
                    eventLocationLabel: "",
                    repeatField: "weekdays",
                    allDay: true,
                    guestsField: ["David Harrison"]
                },
                {
                    id: 2,
                    title: "Curatives",
                    start: "2022-06-22",
                    end: "2022-06-22",
                    className: "fullcalendar-custom-event-hs-team kl-bg-blue",
                    eventDescriptionLabel: "",
                    eventLocationLabel: "",
                    repeatField: "weekdays",
                    allDay: true,
                    guestsField: ["David Harrison"]
                },
                {
                    id: 3,
                    title: "Préventives",
                    start: "2022-07-01 04:00",
                    end: "2022-07-01 05:00",
                    className: "fullcalendar-custom-event-reminders kl-bg-green-fifth",
                    eventDescriptionLabel: "",
                    eventLocationLabel: "Online",
                    repeatField: "everyday",
                    guestsField: [],
                    //image: './assets/svg/brands/pdf-icon.svg'
                },
                {
                    id: 4,
                    title: "Curatives",
                    start: "2022-07-05 14:00",
                    end: "2022-07-05 15:00",
                    className: "fullcalendar-custom-event-hs-team kl-bg-blue",
                    eventDescriptionLabel: "Learn Figma like a Professional! Start from the basics and go all the way to creating your own design!",
                    eventLocationLabel: "Online",
                    repeatField: "never",
                    guestsField: ["Bob Dean", "Ella Lauda", "Lori Hunter", "Costa Quinn"],
                    //image: './assets/svg/brands/figma-icon.svg'
                },
                {
                    id: 5,
                    title: "Curatives",
                    start: "2022-07-12 10:00",
                    end: "2022-07-12 11:00",
                    className: "fullcalendar-custom-event-holidays kl-bg-blue",
                    eventDescriptionLabel: "",
                    eventLocationLabel: "",
                    repeatField: "never",
                    guestsField: [],
                    image: ''
                },
                {
                    id: 6,
                    title: "Préventives",
                    start: "2022-07-18",
                    end: "2022-07-18",
                    className: "fullcalendar-custom-event-holidays kl-bg-green-fifth",
                    eventDescriptionLabel: "",
                    eventLocationLabel: "",
                    repeatField: "never",
                    guestsField: [],
                    image: ''
                },
                {
                    id: 7,
                    title: "Send weekly invoice to John",
                    start: "2020-12-10",
                    end: "2020-12-11",
                    className: "fullcalendar-custom-event-hs-team",
                    eventDescriptionLabel: "",
                    eventLocationLabel: "",
                    repeatField: "everyday",
                    allDay: true,
                    guestsField: ["Linda Bates", "Rachel Doe"],
                    image: './assets/svg/brands/excel-icon.svg'
                },
                {
                    id: 8,
                    title: "Shoot a message to Christina on Slack",
                    start: "2020-12-18",
                    end: "2020-12-20",
                    className: "fullcalendar-custom-event-tasks",
                    eventDescriptionLabel: "",
                    eventLocationLabel: "",
                    repeatField: "everyday",
                    guestsField: ["Brian Halligan"],
                    image: './assets/svg/brands/slack-icon.svg'
                },
                {
                    id: 9,
                    title: "Open a calendar task on Jira",
                    start: "2020-12-03 00:00",
                    end: "2020-12-03 04:00",
                    className: "fullcalendar-custom-event-hs-team",
                    eventDescriptionLabel: "",
                    eventLocationLabel: "",
                    repeatField: "never",
                    guestsField: ["Clarice Boone", "Sam Kart", "Mark Williams"],
                    image: './assets/svg/brands/jira-icon.svg'
                },
                {
                    id: 10,
                    title: "Weekly presentation (in PDF)",
                    start: "2020-12-14",
                    end: "2020-12-17",
                    className: "fullcalendar-custom-event-reminders",
                    eventDescriptionLabel: "",
                    eventLocationLabel: "Online",
                    repeatField: "everyday",
                    guestsField: [],
                    image: './assets/svg/brands/pdf-icon.svg'
                },
                {
                    id: 11,
                    title: "Launch",
                    start: "2020-12-03 01:00",
                    end: "2020-12-03 02:00",
                    className: "fullcalendar-custom-event-hs-team",
                    eventDescriptionLabel: "",
                    eventLocationLabel: "",
                    repeatField: "everyday",
                    guestsField: []
                },
                {
                    id: 12,
                    title: "Make monthly payments via MasterCard",
                    start: "2020-12-11",
                    end: "2020-12-12",
                    className: "fullcalendar-custom-event-tasks",
                    eventDescriptionLabel: "",
                    eventLocationLabel: "Online",
                    repeatField: "everyday",
                    guestsField: [],
                    image: './assets/svg/brands/mastercard.svg'
                }
            ],
            initialDate: "2022-07-22",
            headerToolbar: false,
            editable: true,
            defaultAllDay: false,
            locale: 'fr',
            firstDay: 1,
            datesSet(dateSet) {
                $dateTitle.textContent = dateSet.view.title
            },
            eventClick: function (event) {
                // Popover Content
                const _popoverContent = popoverContent(event);

                if ($popover && $popover._element) {
                    $popover.dispose();
                }

                // Open Popover
                $popover = new bootstrap.Popover(event.el, {
                    html: true,
                    content: _popoverContent,
                    template: `
                      <div class="popover fullcalendar-event-popover" role="tooltip">
                          <div class="arrow"></div>
                          <h3 class="popover-header"></h3>
                          <div class="popover-body"></div>
                      </div>
                  `,
                });
                $popover.show();

                // Open Popover For Editing
                event.el.addEventListener('shown.bs.popover', function () {
                    const $invoker = document.querySelector(`#modal-invoker-${event.event.id}`);

                    $invoker.addEventListener('click', function () {
                        if ($popover && $popover._element) {
                            $popover.dispose();
                        }

                        prepareData(
                            event.event.title,
                            event.event.start,
                            event.event.end,
                            event.event
                        );
                    });
                });
            },
            eventContent({ event }) {
                return {
                    html: eventContent(event),
                };
            },
            drop({ draggedEl }) {
                draggedEl.remove();
            },
        });

        fullcalendarEditable = HSCore.components.HSFullCalendar.getItem('js-fullcalendar');

        // Events
        document.addEventListener('click', function (e) {
            if (
                (e.target && e.target.id === 'closePopover' && $popover && $popover._element)
                || (e.target && !e.target.closest('.fc-event') && !e.target.closest('.popover') && $popover && $popover._element)
            ) {
                $popover.dispose();
            }
        });

        document.addEventListener('scroll', function () {
            if ($popover && $popover._element) {
                $popover.dispose();
            }
        });

        $prevMonthBtn.addEventListener('click', function () {
            fullcalendarEditable.prev();

            HSCore.hideTooltips();
        });

        $nextMonthBtn.addEventListener('click', function () {
            fullcalendarEditable.next();

            HSCore.hideTooltips();
        });

        $gridViewSelect.addEventListener('change', function (event) {
            fullcalendarEditable.changeView(event.target.value);
        });

        $todayBtn.addEventListener('click', function () {
            fullcalendarEditable.today();
        });
        $todayBtn.title = new Date().toDateString();

        $addEventToCalendarModal.addEventListener('hide.bs.modal', function () {
            $titleField.style.height = 'auto';
        });
        $addEventToCalendarModal.addEventListener('show.bs.modal', function () {
            clearForm();
        });
        $addEventToCalendarModal.addEventListener('shown.bs.modal', function () {
            $titleField.style.height = `${$titleField.scrollHeight}px`;

            $titleField.focus();
        });

        $titleField.addEventListener('input', function () {
            $titleField.style.height = `${$titleField.scrollHeight}px`;
        });

        $processEvent.addEventListener('click', function () {
            const date = eventDateRange.selectedDates

            if (!Object.keys(editableEvent).length) {
                fullcalendarEditable.addEvent({
                    id: new Date().getTime(),
                    title: $titleField.value || '(No title)',
                    repeatField: repeatField.getValue(),
                    guestsField: JSON.parse(JSON.stringify(guestsField.getValue())),
                    eventDescriptionLabel: $eventDescriptionLabel.value,
                    eventLocationLabel: $eventLocationLabel.value,
                    start: moment(date[0]).format('YYYY-MM-DD'),
                    end: date.length > 1 ? moment(date[1]).format('YYYY-MM-DD') : moment(date[0]).format('YYYY-MM-DD'),
                    classNames: eventColorField.getValue(),
                });
            } else {
                editableEvent.setProp('title', $titleField.value)
                editableEvent.setExtendedProp('repeatField', repeatField.getValue())
                editableEvent.setExtendedProp('guestsField', JSON.parse(JSON.stringify(guestsField.getValue())))
                editableEvent.setExtendedProp('eventDescriptionLabel', $eventDescriptionLabel.value)
                editableEvent.setExtendedProp('eventLocationLabel', $eventLocationLabel.value)
                editableEvent.setProp('classNames', [eventColorField.getValue()])
                editableEvent.setStart(moment(date[0]).format('YYYY-MM-DD'))
                editableEvent.setEnd(date.length > 1 ? moment(date[1]).format('YYYY-MM-DD') : moment(date[0]).format('YYYY-MM-DD'))
            }

            addEventToCalendarModal.hide();

            filterSearchExample.filter();
        });

        function triggerEvent(el, evt) {
            const newEvt = document.createEvent('HTMLEvents');

            newEvt.initEvent(evt, false, true);

            el.dispatchEvent(newEvt);
        }

        // Set Form
        function prepareData(title, start, end, event = {}) {
            addEventToCalendarModal.show();

            $processEvent.textContent = 'Save';

            $titleField.value = title;

            eventDateRange.setDate([moment(start).format('MM/DD/YYYY'), moment(end).format('MM/DD/YYYY')])

            if (Object.keys(event).length) {
                let newTags = [];

                for (let i = 0; i < event.extendedProps.guestsField.length; i += 1) {
                    newTags.push(event.extendedProps.guestsField[i]);
                }

                guestsField.setValue(newTags);

                repeatField.setValue(event.extendedProps.repeatField)
                $eventDescriptionLabel.value = event.extendedProps.eventDescriptionLabel
                $eventLocationLabel.value = event.extendedProps.eventLocationLabel
                eventColorField.setValue(event.classNames[0])

                triggerEvent($repeatLabel, 'change');
                triggerEvent($eventColorLabel, 'change');

                editableEvent = event;
            }
        }

        // Get Avatar
        function getAvatar(data) {
            let member = allMembers.filter(m => m.value === data)
            if (member.length) {
                member = member[0]
            } else {
                member = {
                    value: data,
                    src: null
                }
            }

            return member.src ? `<img class="avatar avatar-xs avatar-circle me-2" src="${member.src}">` : `
                <div class="avatar avatar-xs avatar-soft-primary avatar-circle me-2">
                  <span class="avatar-initials">${member.value.charAt(0)}</span>
                </div>
            `
        }

        // Get Avatars HTML
        function getAvatars(members) {
            const $ul = document.createElement('ul');
            $ul.classList.add(
                'list-unstyled',
                'mb-0'
            );

            for (let i = 0; i < members.length; i += 1) {
                const $li = document.createElement('li');
                $li.classList.add(
                    'd-flex',
                    'align-items-center',
                    'mb-2'
                );
                $li.innerHTML = `
                  ${getAvatar(members[i])}
                  <span>${members[i]}</span>
              `;

                $ul.appendChild($li);
            }

            return members.length > 0 ? $ul.outerHTML : false
        }

        // Clear Form
        function clearForm() {
            $titleField.value = '';
            $eventDescriptionLabel.value = '';
            $eventLocationLabel.value = '';
            repeatField.setValue('everyday')
            eventColorField.setValue('hs-team');
            eventDateRange.clear()

            editableEvent = {};

            triggerEvent($repeatLabel, 'change');
            triggerEvent($eventColorLabel, 'change');

            if (guestsField) {
                guestsField.clear();
            }

            $processEvent.text = 'Create Event';
        }

        // Filter
        filterSearchExample = new HSFullcalendarFilter(fullcalendarEditable);

        filterSearchExample.addFilter('byTitle', function (event) {
            return event.title.toLowerCase().indexOf($filterByTitle.value.toLowerCase()) !== -1;
        })

        filterSearchExample.addFilter('byCategory', function (event) {
            const selectedCategories = document.querySelectorAll('[data-filter] input:checked');
            let values = [];
            let show;

            for (let i = 0; i < selectedCategories.length; i += 1) {
                values.push(selectedCategories[i].value);
            }

            if (!selectedCategories.length) {
                return false;
            }

            show = false

            for (let i = 0; i < selectedCategories.length; i += 1) {
                show = values.includes(event.classNames[0]);
            }

            return show;
        });

        $filterByTitle.addEventListener('input', function () {
            filterSearchExample.filter();
        });

        for (let i = 0; i < $filters.length; i += 1) {
            $filters[i].addEventListener('change', function () {
                filterSearchExample.filter();
            });
        }

        filterSearchExample.filter();


        // ADD DRAGGABLE CLASS FOR CALENDAR
        // =======================================================
        const Draggable = FullCalendar.Draggable;

        new Draggable(document.querySelector('#external-events'), {
            itemSelector: '.fc-event'
        });


        // INITIALIZATION OF NAVBAR VERTICAL ASIDE
        // =======================================================
        new HSSideNav('.js-navbar-vertical-aside', {
            onMini: function () {
                setTimeout(function () {
                    fullcalendarEditable.updateSize()
                }, 200)
            },
            onFull: function () {
                setTimeout(function () {
                    fullcalendarEditable.updateSize()
                }, 200)
            },
        }).init()

        setTimeout(() => {
            fullcalendarEditable.updateSize()
        }, 100)
    }
})()