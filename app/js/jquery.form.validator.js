( function(){

    $( function(){

        $( '.game__comment-add' ).each(function(){

            new FormValidation($(this));

        });
    });

    var FormValidation = function (obj) {
        var _obj = obj,
            _action = _obj.find( 'form' ).attr( 'action' ),
            _inputs = _obj.find($("[required]")),
            _select = _obj.find( $("select[required]") );

        var _addEvents = function () {

                _obj.on({
                    'submit': function(){

                        $.each( _inputs, function(){

                            var curItem = $(this),
                                curAttr = curItem.attr("type");

                            if ( curAttr == "checkbox" ){
                                var curCheck = this.checked;
                                if ( !curCheck ){
                                    curItem.addClass("site__required-error");
                                    curItem.closest("fieldset").addClass('error');
                                }

                            }
                            else if ( curItem.is("select") ){

                                if ( !curItem.parents(".site__connection-hide_true").length ){
                                    if ( curItem.val() == "0" ){
                                        curItem.closest("fieldset").addClass('error');
                                    }
                                }

                            }
                            else if ( curItem.val() == '' ) {

                                if($(window).width()<768){
                                    _obj.addClass('error');
                                }

                                if ( !curItem.parents(".site__connection-hide_true").length ){
                                    curItem.addClass("site__required-error");
                                    curItem.closest("fieldset").addClass('error');

                                }
                            }
                            else if ( curAttr == "email" ){
                                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                                if ( pattern.test(curItem.val()) == false ){
                                    curItem.addClass("site__required-error");
                                    curItem.closest("fieldset").addClass('error');
                                    if($(window).width()<768){
                                        _obj.addClass('error');
                                    }
                                }
                            }

                        } );

                        if(!(_obj.find('.error').length) ){

                            if (_obj.hasClass('game__comment-add')) {

                                $.ajax({
                                    url: 'php/form.php',
                                    dataType: 'html',
                                    timeout: 20000,
                                    type: "GET",
                                    data: {
                                        name: $('#name').val(),
                                        email: $('#email').val(),
                                        massage: $('#massage').val()
                                    },
                                    success: function (data) {

                                    },
                                    error: function (XMLHttpRequest) {
                                        if (XMLHttpRequest.statusText != "abort") {
                                            alert(XMLHttpRequest.statusText);
                                        }
                                    }
                                });
                                return false;
                            }

                        } else {

                            return false;

                        }
                    }
                });

                _inputs.on({

                    'focus': function(){

                        var curItem = $(this),
                            closest = curItem.closest("fieldset"),
                            innerInputs = closest.find("input");

                        if(closest.hasClass('error')){
                            curItem.removeClass("site__required-error");

                            if($(window).width()<768){
                                _obj.removeClass('error');
                            }

                            if ( innerInputs.length > 1 ){
                                if ( !closest.find(".site__required-error").length ){
                                    closest.removeClass('error');
                                }
                            } else {
                                closest.removeClass('error');
                            }
                        }

                    }

                });

                _select.on({
                    change: function(){
                        var curItem = $(this);
                        curItem.closest("fieldset").removeClass('error');
                    }
                });

            },
            _init = function () {
                _addEvents();
            };

        _init();
    };
} )();