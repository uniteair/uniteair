(function($) {
    // form-input 공통
    $('.has-clear input[type="text"]').on('input propertychange', function() {
        var $this = $(this);
        var visible = Boolean($this.val());
        $this.siblings('.form-control-clear').toggleClass('hidden', !visible);
    }).trigger('propertychange');
      
    $('.form-control-clear').click(function() {
        console.log('clear clicked');
        $(this).siblings('input[type="text"]').val('')
          .trigger('propertychange').focus();
    });
  
    // select2
    $('.select2-single').select2();

    // toggle button active
    $('.btn-group-toggle').on('click', function(e) {
        // 클릭된 버튼만 primary, 나머지는 tertiary
        $(this).find('.btn').removeClass('btn-primary').addClass('btn-tertiary');
        $(e.target).closest('.btn').removeClass('btn-tertiary').addClass('btn-primary');
    });

    // more button
    $('#btn-more').on('click', function(){
        var $row = $('.more-row');
        if($row.is(':visible')) {
            $row.hide();
            $(this).text('More');
        } else {
            $row.show();
            $(this).text('Less');
        }
    });

    // validation
    // $(".form-validate").validate({
    //   ignore: [],
    //   errorClass: "invalid-feedback animated fadeInDown",
    //   errorElement: "div",
    //   errorPlacement: function(e, a) {
    //       $(a).parents(".form-group > div").append(e)
    //   },
    //   highlight: function(e) {
    //       $(e).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")
    //   },
    //   success: function(e) {
    //       $(e).closest(".form-group").removeClass("is-invalid"), $(e).remove()
    //   },
    //   rules: {
    //       "val-username": {
    //           required: !0,
    //           minlength: 3
    //       },
    //       "val-email": {
    //           required: !0,
    //           email: !0
    //       },
    //       "val-password": {
    //           required: !0,
    //           minlength: 5
    //       },
    //       "val-confirm-password": {
    //           required: !0,
    //           equalTo: "#val-password"
    //       },
    //       "val-select2": {
    //           required: !0
    //       },
    //       "val-select2-multiple": {
    //           required: !0,
    //           minlength: 2
    //       },
    //       "val-suggestions": {
    //           required: !0,
    //           minlength: 5
    //       },
    //       "val-skill": {
    //           required: !0
    //       },
    //       "val-currency": {
    //           required: !0
    //       },
    //       "val-website": {
    //           required: !0,
    //           url: !0
    //       },
    //       "val-phoneus": {
    //           required: !0
    //       },
    //       "val-digits": {
    //           required: !0,
    //           digits: !0
    //       },
    //       "val-number": {
    //           required: !0
    //       },
    //       "val-range": {
    //           required: !0,
    //           range: [1, 5]
    //       },
    //       "val-terms": {
    //           required: !0
    //       }
    //   },
    //   messages: {
    //       "val-username": {
    //           required: "Please enter a username",
    //           minlength: "Your username must consist of at least 3 characters"
    //       },
    //       "val-email": "Please enter a valid email address",
    //       "val-password": {
    //           required: "Please provide a password",
    //           minlength: "Your password must be at least 5 characters long"
    //       },
    //       "val-confirm-password": {
    //           required: "Please provide a password",
    //           minlength: "Your password must be at least 5 characters long",
    //           equalTo: "Please enter the same password as above"
    //       },
    //       "val-select2": "Please select a value!",
    //       "val-select2-multiple": "Please select at least 2 values!",
    //       "val-suggestions": "What can we do to become better?",
    //       "val-skill": "Please select a skill!",
    //       "val-currency": "Please enter a price!",
    //       "val-website": "Please enter your website!",
    //       "val-phoneus": "Please enter a US phone!",
    //       "val-digits": "Please enter only digits!",
    //       "val-number": "Please enter a number!",
    //       "val-range": "Please enter a number between 1 and 5!",
    //       "val-terms": "You must agree to the service terms!"
    //   }
    // });   
    // window.addEventListener('load', function() {
    //   var forms = document.getElementsByClassName('needs-validation');
    //   var validation = Array.prototype.filter.call(forms, function(form) {
    //     form.addEventListener('submit', function(event) {
    //       if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //       }
    //       form.classList.add('was-validated');
    //     }, false);
    //   });
    // }, false);

    // 팝업(모달) 내용 프린트 함수 (전역)
    window.printModalContent = function(btn) {
        // btn: 클릭된 버튼
        // 모달 내에서 가장 가까운 .modal-content를 찾음
        var modalContent = btn.closest('.modal-content');
        if (!modalContent) return;
        // modal-content 내 print-wrapper만 프린트
        var printWrapper = modalContent.querySelector('.print-wrapper');
        if (!printWrapper) return;
        // 프린트용 새 창 생성
        var printWindow = window.open('', '', 'width=900,height=800');
        printWindow.document.write('<html><head><title>프린트</title>');
        // 스타일 복사 (필요시 추가)
        var styles = Array.from(document.querySelectorAll('link[rel="stylesheet"], style')).map(function(node) {
            return node.outerHTML;
        }).join('');
        printWindow.document.write(styles);
        printWindow.document.write('</head><body>');
        printWindow.document.write(printWrapper.innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        setTimeout(function() {
            printWindow.print();
            printWindow.close();
        }, 300);
    }
    // flash-popup 닫기 버튼 클릭시 감추기 (전역)
    window.closeFlashPopup = function(btn) {
        $(btn).closest('.flash-popup').hide();
    }

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
        offset: [30, 10] // [Y, X] - Y값을 늘리면 아래로 더 내려감
    });
    });

})(jQuery);