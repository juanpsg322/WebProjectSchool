﻿$(document).ready(function () {

	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'listDay,listWeek,month'
		},

		// customize the button names,
		// otherwise they'd all just say "list"
		views: {
			listDay: { buttonText: 'Lista del día' },
			listWeek: { buttonText: 'Lista Semanal' },
			month: { buttonText: 'Mes'}
		},

		defaultView: 'listWeek',
		defaultDate: '2017-02-12',
		navLinks: true, // can click day/week names to navigate views
		editable: true,
		eventLimit: true, // allow "more" link when too many events
		eventAfterRender: function (event, element, view) {
			console.log("Event After Render called")
		},
		events: [
			{
				title: 'All Day Event',
				start: '2017-02-01'
			},
			{
				title: 'Long Event',
				start: '2017-02-07',
				end: '2017-02-10'
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: '2017-02-09T16:00:00'
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: '2017-02-16T16:00:00'
			},
			{
				title: 'Conference',
				start: '2017-02-11',
				end: '2017-02-13'
			},
			{
				title: 'Meeting',
				start: '2017-02-12T10:30:00',
				end: '2017-02-12T12:30:00'
			},
			{
				title: 'Lunch',
				start: '2017-02-12T12:00:00'
			},
			{
				title: 'Meeting',
				start: '2017-02-12T14:30:00'
			},
			{
				title: 'Happy Hour',
				start: '2017-02-12T17:30:00'
			},
			{
				title: 'Dinner',
				start: '2017-02-12T20:00:00'
			},
			{
				title: 'Birthday Party',
				start: '2017-02-13T07:00:00'
			},
			{
				title: 'Click for Google',
				url: 'http://google.com/',
				start: '2017-02-28'
			}
		]
	});

});