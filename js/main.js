
$(document).ready(function () {

    var date = new Date();
    var d = date.getDate(),
        m = date.getMonth(),
        y = date.getFullYear();
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: $.fullCalendar.moment(),
        editable: false,
        eventLimit: true, // allow "more" link when too many events
        eventSources: {
            url: 'events1.json'

        },
        loading: function (bool) {
            $('#loading').toggle(bool);
        },
        eventRender: function (event, element) {
            element.find(".closeon").click(function () {
                var msg = 'Se eliminara el evento seleccionado, desea continuar?';
                alert(msg);
                $('#calendar').fullCalendar('removeEvents', event.id);

            });
        },
        eventDestroy: function (event, element) {

        }
    });
});