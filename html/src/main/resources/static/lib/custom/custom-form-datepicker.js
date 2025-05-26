/*
---------------------------------------
    : Custom - Form Datepicker js :
---------------------------------------
*/
"use strict";
$(document).ready(function() {
    /* --- Form - Datepicker -- */
    $('#default-date').datepicker({
	    language: 'ko',
	    dateFormat: 'yyyy-mm-dd',
	});
    $('#autoclose-date').datepicker({
	    language: 'ko',
	    autoClose: true,
	    dateFormat: 'yyyy-mm-dd',
	});
	$('#year-view-date').datepicker({
		language: 'ko',
	    minView: 'years',
	    view: 'years',	    
	    dateFormat: 'yyyy',
	});
    $('#month-view-date').datepicker({
	    language: 'ko',
	    minView: 'months',
	    view: 'months',	    
	    dateFormat: 'yyyy-mm',
	});
    $('#time-format').datepicker({
    	language: 'ko',	    
		dateFormat: 'yyyy-mm-dd',
	    timeFormat: 'hh:ii aa',
	    timepicker: true,
	    dateTimeSeparator: ' - ',
	});
    $('#multi-date').datepicker({
	    language: 'ko',
	    dateFormat: 'yyyy-mm-dd',
	    multipleDates: 3,  
	});
    $('#range-date').datepicker({
	    language: 'ko',
	    dateFormat: 'yyyy-mm-dd',
	    range: true,
	    multipleDatesSeparator: ' - ',
	});
    $('#min-max-date').datepicker({
	    language: 'ko',
	    dateFormat: 'yyyy-mm-dd',
	    minDate: new Date(),
	    position: 'top left',
	});
    var disabledDays = [0, 6];
	$('#disable-day-date').datepicker({
	    language: 'ko',
	    dateFormat: 'yyyy-mm-dd',
	    position: 'top left',
	    onRenderCell: function (date, cellType) {
	        if (cellType == 'day') {
	            var day = date.getDay(),
	                isDisabled = disabledDays.indexOf(day) != -1;

	            return {
	                disabled: isDisabled
	            }
	        }
	    }
	});	
	$('.form-datepicker').datepicker({
	    language: 'ko',
		autoClose: true,
	    dateFormat: 'yyyy-mm-dd',
		firstDay: 0,
	});
	$('.year-date').datepicker({
	    language: 'ko',
	    minView: 'years',
	    view: 'years',	    
	    dateFormat: 'yyyy',
	});
	
	// 오늘 날짜를 YYYY-MM-DD 형식으로 반환하는 함수
	// function getToday() {
	// 	var today = new Date();
	// 	var dd = String(today.getDate()).padStart(2, '0');
	// 	var mm = String(today.getMonth() + 1).padStart(2, '0');
	// 	var yyyy = today.getFullYear();
	// 	return yyyy + '-' + mm + '-' + dd;
	// }

	// // 특정 개월 수만큼 날짜를 더하는 함수
	// function addMonths(date, months) {
	// 	var result = new Date(date);
	// 	result.setMonth(result.getMonth() + months);
	// 	var dd = String(result.getDate()).padStart(2, '0');
	// 	var mm = String(result.getMonth() + 1).padStart(2, '0');
	// 	var yyyy = result.getFullYear();
	// 	return yyyy + '-' + mm + '-' + dd;
	// }

	// // 버튼 클릭 이벤트 핸들러를 함수로 묶음
	// function setupMonthButtonHandlers() {
	// 	$('#btn-3rm').on('click', function() {
	// 		var today = getToday();
	// 		var startDate = addMonths(new Date(), -3);
	// 		var rangeStr = startDate + ' - ' + today;
	// 		$('.range-datepicker .datepicker-here').eq(0).val(rangeStr);
	// 		$('.range-datepicker .datepicker-here').eq(1).val('');
	// 	});
	// 	$('#btn-6rm').on('click', function() {
	// 		var today = getToday();
	// 		var startDate = addMonths(new Date(), -6);
	// 		var rangeStr = startDate + ' - ' + today;
	// 		$('.range-datepicker .datepicker-here').eq(0).val(rangeStr);
	// 		$('.range-datepicker .datepicker-here').eq(1).val('');
	// 	});
	// 	$('#btn-9rm').on('click', function() {
	// 		var today = getToday();
	// 		var startDate = addMonths(new Date(), -9);
	// 		var rangeStr = startDate + ' - ' + today;
	// 		$('.range-datepicker .datepicker-here').eq(0).val(rangeStr);
	// 		$('.range-datepicker .datepicker-here').eq(1).val('');
	// 	});
	// 	$('#btn-12rm').on('click', function() {
	// 		var today = getToday();
	// 		var startDate = addMonths(new Date(), -12);
	// 		var rangeStr = startDate + ' - ' + today;
	// 		$('.range-datepicker .datepicker-here').eq(0).val(rangeStr);
	// 		$('.range-datepicker .datepicker-here').eq(1).val('');
	// 	});
	// }

	// 함수 호출
	// setupMonthButtonHandlers();

	// 개월 버튼 클릭 시 첫번째 datepicker-here에는 (오늘-개월), 두번째에는 오늘 날짜 입력
    function pad(n) { return n < 10 ? '0' + n : n; }
    function formatDate(date) {
        return date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate());
    }
    function setMonthRange(months) {
        var today = new Date();
        var start = new Date(today);
        start.setMonth(start.getMonth() - months);
        var $pickers = $('.datepicker-here');
        $pickers.eq(0).val(formatDate(start));
        $pickers.eq(1).val(formatDate(today));
    }
    $(function() {
        $('#btn-3m').on('click', function() { setMonthRange(3); });
        $('#btn-6m').on('click', function() { setMonthRange(6); });
        $('#btn-9m').on('click', function() { setMonthRange(9); });
        $('#btn-12m').on('click', function() { setMonthRange(12); });
    });
});