( function(){

    "use strict";

    $( function(){

        $( '.site .swiper-container' ).each(function () {
            Slider( $( this ) );
        });

        $( '.menu__btn' ).each( function() {
            MenuOpen( $( this ) );
        });

        $('.categories__menu').each(function() {
            MenuDown($(this));
        });

        $( '.show-text' ).each( function() {
            TextOpen( $( this ) );
        });

        $( '.game__comment-add-open' ).each( function() {
            MessageWrite( $( this ) );
        });

        $( '.game__comment-open' ).each( function() {
            MessageWrite( $( this ) );
        });

        $( '.game__valid-on' ).each( function() {
            MessageWrite( $( this ) );
        });

        $( '.search-filter__wrap' ).each( function() {
            filter( $( this ) );
        });

        $( '.game__expand-on' ).each( function() {
            gameExpand( $( this ) );
        });

        $( '.list-type__expand-btn' ).each( function() {
            gameExpand( $( this ) );
        });

        $( '.site__aside' ).each( function() {
            AsideOpen( $( this ) );
        });

        $('.btn-lock').each(function () {
            BtnLock($(this));
        });

        $('.btn-up').each(function () {
            SlideToTop($(this));
        });

        $.each( $('.text-label'), function(){
            new InputVal ( $(this) );
        } );

        $( '.categories__list' ).each(function () {
            Scroll( $( this ) );
        });

        $.each( $('.game_load' ), function() {
            new Game ( $( this ) );
        } );

        $.each( $('.game-list' ), function() {
            new GameList ( $( this ) );
        } );

        $.each( $('.casinos-info' ), function() {
            new CasinosInfoLoad ( $( this ) );
        } );

        $.each( $('.list-type-load' ), function() {
            new  ListTypeLoad ( $( this ) );
        } );

        if ( $( window ).width() > 768 ){

            $( '.categories__filter-reset').hover(

                function() {

                    $('.filter-reset').css({'visibility': 'visible', 'opacity': '1'});
                },
                function() {
                    $( '.filter-reset').css({'visibility':'hidden', 'opacity':'0'});
                });
        }

    } );

    var Slider = function (obj) {

        //private properties
        var _self = this,
            _obj = obj,
            _next = _obj.find( '.game__slots-next' ),
            _prev = _obj.find( '.game__slots-prev' ),
            _pagination = _obj.find( '.game__slots-pagination');

        //private methods
        var _addEvents = function () {

            },
            _init = function () {
                _addEvents();
            };

        if (_obj.hasClass( 'game__slots-wrap' )) {
            var swiper = new Swiper( _obj, {
                nextButton: _next,
                prevButton: _prev,
                pagination: _pagination,
                paginationType: 'fraction',
                paginationClickable: true,
                slidesPerView: 1
            });

        }

        //public properties

        //public methods

        _init();
    };
    var AsideOpen = function(obj) {

        //private properties
        var _obj = obj,
            _btn = $('.categories-btn'),
            _header = $('.site__header'),
            _categories = _obj.find( '.categories'),
            _siteHeight = $('.site').height();

        //private methods
        var _addEvents = function() {

                _btn.on( {
                    click: function() {

                        var curElem = _obj,
                            game = $('.game'),
                            footer = $('.site__footer'),
                            loadMore = $('.game__load-more'),
                            gameTop = game.offset().top;

                        _categories.css('margin-top',gameTop);
                        curElem.css('height',_siteHeight);

                        if (curElem.hasClass( 'active' )) {
                            curElem.removeClass( 'active' );
                            $(this).removeClass( 'active' );
                            game.removeClass( 'active' );
                            footer.removeClass( 'active' );
                            loadMore.removeClass( 'active' );
                            _header.css('z-index', '10');
                        } else {
                            curElem.addClass( 'active' );
                            $(this).addClass( 'active' );
                            game.addClass( 'active' );
                            footer.addClass( 'active' );
                            loadMore.addClass( 'active' );
                            _header.css('z-index', '3');
                        }

                        return false;
                    }
                });

            },
            _init = function() {

                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };
    var TextOpen = function(obj) {

        //private properties
        var _obj = obj,
            _btn = _obj.find('.show-text__btn'),
            _curP = _obj.find('p');

        //private methods
        var _addEvents = function() {

                _btn.on( {
                    click: function() {

                        var curElem = _obj;

                        if (curElem.hasClass( 'active' )) {
                            curElem.removeClass( 'active' );
                        } else {
                            curElem.addClass( 'active' );
                        }

                        if(_curP.is(':visible')){
                            _curP.slideUp(300);
                        }
                        else{
                            _curP.slideDown(300);
                        }


                        return false;
                    }
                });

            },
            _init = function() {

                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };
    var MessageWrite = function(obj) {

        //private properties
        var _obj = obj,
            _curElem = _obj.parent(),
            curMenu = _curElem.find('.game__comment-item'),
            curMenu1 = _curElem.find('.game__valid-item'),
            _cancel = _curElem.find('.btn_cancel');

        _curElem.addClass('present');
        curMenu1.slideUp(300);

        //private methods
        var _addEvents = function() {

                _obj.on( {
                    click: function() {

                        if (_curElem.hasClass( 'active' )) {
                            _curElem.removeClass( 'active' );
                        } else {
                            _curElem.addClass( 'active' );
                        }

                        if(curMenu.is(':visible')){
                            curMenu.slideUp(300);
                        }
                        else{
                            curMenu.slideDown(300);
                        }

                        if(curMenu1.is(':visible')){
                            curMenu1.slideUp(300);
                        }
                        else{
                            curMenu1.slideDown(300);
                        }
                        return false;
                    }
                });

                _cancel.on( {
                    click: function() {

                        if (_curElem.hasClass( 'active' )) {
                            _curElem.removeClass('active');
                        }

                        return false;
                    }
                });

            },
            _init = function() {

                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };
    var MenuOpen = function(obj) {

        //private properties
        var _obj = obj;

        //private methods
        var _addEvents = function() {

                _obj.on( {
                    click: function() {

                        var curElem = _obj.parent();

                        if (curElem.hasClass( 'active' )) {
                            curElem.removeClass( 'active' );
                        } else {
                            curElem.addClass( 'active' );
                        }
                        if (event.stopPropagation) {
                            event.stopPropagation();
                        } else {
                            event.cancelBubble = true;
                        }

                        if ( curElem.hasClass( 'menu active' ) ) {

                            $('.search').addClass( 'active' );

                        } else{

                            $('.search').removeClass( 'active' );
                        }
                    }
                });

            },
            _init = function() {

                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };
    var MenuDown = function(obj) {

        //private properties
        var _obj = $(this),
            _items=$('.categories__menu>li>span');


        //private methods
        var _addEvents = function() {


                _items.on({
                    click: function(){
                        var curElem = $(this),
                            curParent = curElem.parent(),
                            curMenu= curParent.find('ul');

                        if (curParent.hasClass( 'active' )) {
                            curParent.removeClass( 'active' );
                        } else {
                            curParent.addClass( 'active' );
                        }

                        if(curMenu.is(':visible')){
                            curMenu.slideUp(300);
                        }
                        else{
                            curMenu.slideDown(300);
                        }
                        if (event.stopPropagation) {
                            event.stopPropagation();
                        } else {
                            event.cancelBubble = true;
                        }
                    }
                });

                /*$('body').on({

                 click: function(e){

                 var elem=$(e.target);

                 var curElem = $('.categories__menu>li'),
                 curMenu= curElem.find('ul');

                 if(curMenu.is(':visible')){
                 curMenu.slideUp(300);
                 }
                 }
                 });*/

            },
            _init = function() {


                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };
    var BtnLock = function(obj)  {

        //private properties
        var _obj = obj;

        //private methods
        var _addEvents = function() {

                _obj.on({
                    'click': function() {

                        var curElem = _obj.parent(),
                            _active = 0;

                        if (!($(this).hasClass('btn-lock-close'))) {

                            if (!($(this).hasClass('btn-lock_on'))) {
                                $(this).addClass('btn-lock_on');
                                curElem.addClass( 'active' )
                            } else {
                                $(this).removeClass('btn-lock_on');
                                curElem.removeClass( 'active' );
                            }
                        }

                        $('.btn-lock').each( function() {

                            if($(this).hasClass( 'btn-lock_on' )){

                                _active = 1;
                            }

                            if(_active == 1){

                                $('.categories__filter-icon').addClass('filter-reset-on');

                            } else{

                                $('.categories__filter-icon').removeClass('filter-reset-on');
                            }

                        });
                    }
                });

                $('.categories__filter-reset').on({

                    'click': function() {

                        if($(this).hasClass( 'filter-reset-on' )){

                            $('.btn-lock').removeClass('btn-lock_on');
                            $('.categories__filter-reset').removeClass('filter-reset-on');

                            return false;
                        }
                    }

                });
            },

            _init = function() {
                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };
    var SlideToTop = function (obj) {

        //private properties
        var _obj = obj;

        //private methods
        var _addEvents = function () {

                _obj.on({
                    click: function () {

                        $('html, body').animate({scrollTop: 0}, 600);
                    }
                });

                $(window).on({
                    'scroll': function () {
                        if ($(window).scrollTop() > $(window).height()) {
                            $(_obj).fadeIn();
                        } else {
                            $(_obj).fadeOut();
                        }
                        if ($(window).scrollTop() + $(window).height() > $('.site__footer').offset().top + 16) {
                            $('.btn-up').css({bottom: $(window).scrollTop() + $(window).height() - $('.site__footer').offset().top + 30});
                        } else {
                            $('.btn-up').css({bottom: '40px'});
                        }
                    }
                });
            },
            _init = function () {

                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };
    var InputVal = function (obj) {

        var _obj = obj,
            _input = _obj.find('input'),
            _textarea = _obj.find('textarea');

        var _addEvents = function () {

                _input.on({
                    keyup: function(){

                        var curInput = $(this),
                            curLabel = curInput.next('label');

                        if (!curInput.val()==0) {
                            curLabel.css({
                                'opacity': 0
                            })
                        }else{
                            curLabel.css({
                                'opacity': 1
                            })
                        }
                    }
                });

                _input.on({
                    focusout: function(){

                        var curInput = $(this),
                            curLabel = curInput.next('label');

                        if (!curInput.val()==0) {
                            curLabel.css({
                                'opacity': 0
                            })
                        }else{
                            curLabel.css({
                                'opacity': 1
                            })
                        }
                    }
                });

                _textarea.on({
                    keyup: function(){
                        var curItem = $(this),
                            curLabel = curItem.next('label');

                        if (!curItem.val()==0) {
                            curLabel.css({
                                'opacity': 0
                            })
                        }else{
                            curLabel.css({
                                'opacity': 1
                            })
                        }
                    }
                });

                _textarea.on({
                    focusout: function(){

                        var curItem = $(this),
                            curLabel = curItem.next('label');

                        if (!curItem.val()==0) {
                            curLabel.css({
                                'opacity': 0
                            })
                        }else{
                            curLabel.css({
                                'opacity': 1
                            })
                        }
                    }
                });
            },

            _init = function () {
                _addEvents();
            };

        _init();
    };
    var Scroll = function ( obj ) {
        var _obj = obj,
            _window = $( window);

        var _onEvents = function() {

                _window.on( {
                    'load': function () {
                        _initContentScroll()
                    }
                } );

            },

            _initContentScroll = function() {
                _obj.perfectScrollbar();
            },
            init = function() {
                _onEvents();
            };

        init()
    };
    var filter = function ( obj ) {
        var _obj = obj,
            _btnShow = _obj.find( $( '.search-filter__item' )),
            _contents = $( '.popup__search > div' );

        var _onEvents = function() {

                _btnShow.on( {
                    'click': function () {

                        _show( $( this ).data( 'filter' ) );
                        _btnShow.removeClass('active');
                        $( this).addClass('active');
                    }
                } );

            },

            _show = function( className ){

                var curContent = _contents.filter( '.' + className );


                if(className == 'all'){

                    _contents.css( { display: 'block' } );

                } else{

                    _contents.css( { display: 'none' } );

                    curContent.css( { display: 'block' } );
                }

            },

            init = function() {
                _onEvents();
            };

        init()
    };
    var gameExpand = function(obj) {

        if( $(window).width() < 767 ) {

            //private properties
            var _obj = obj,
                _curElem = _obj.parent(),
                curMenu = _curElem.find('.game__expand'),
                _slider = _curElem.find('.game__item-left .swiper-container'),
                _next = _slider.find( '.game__slots-next' ),
                _prev = _slider.find( '.game__slots-prev' ),
                _pagination = _slider.find( '.game__slots-pagination');


            _curElem.addClass('present');
            curMenu.slideUp(300);

            //private methods
            var _addEvents = function () {

                    _obj.on({
                        click: function () {

                            if (_curElem.hasClass('active')) {
                                _curElem.removeClass('active');

                            } else {
                                _curElem.addClass('active');

                            }

                            if (curMenu.is(':visible')) {
                                curMenu.slideUp(300);
                            }
                            else {
                                curMenu.slideDown(300);
                            }

                            if ( ! _slider.hasClass( 'swiper-container-horizontal' )) {
                                var swiper1 = new Swiper(_slider, {
                                    nextButton: _next,
                                    prevButton: _prev,
                                    pagination: _pagination,
                                    paginationType: 'fraction',
                                    paginationClickable: true,
                                    slidesPerView: 1
                                });
                            }

                            return false;
                        }
                    });

                },
                _init = function () {

                    _addEvents();
                };

            //public properties

            //public methods

            _init();
        }
        if( $(window).width() > 767 ){

            //private properties
            var _obj = obj,
                _curElem = _obj.parents('.list-type__item'),
                curMenu = _curElem.find('.game__item'),
                _slider = _curElem.find('.game__item-left .swiper-container'),
                _next = _slider.find( '.game__slots-next' ),
                _prev = _slider.find( '.game__slots-prev' ),
                _pagination = _slider.find( '.game__slots-pagination');

            _curElem.addClass('present');
            curMenu.slideUp(300);

            //private methods
            var _addEvents = function() {

                    _obj.on( {
                        click: function() {

                            if (_curElem.hasClass( 'active' )) {
                                _curElem.removeClass( 'active' );
                            } else {
                                _curElem.addClass( 'active' );
                            }

                            if(curMenu.is(':visible')){
                                curMenu.slideUp(300);
                            }
                            else{
                                curMenu.slideDown(300);
                            }
                            if ( ! _slider.hasClass( 'swiper-container-horizontal' )) {
                                var swiper2 = new Swiper(_slider, {
                                    nextButton: _next,
                                    prevButton: _prev,
                                    pagination: _pagination,
                                    paginationType: 'fraction',
                                    paginationClickable: true,
                                    slidesPerView: 1
                                });
                            }

                            return false;
                        }
                    });

                },
                _init = function() {

                    _addEvents();
                };

            //public properties

            //public methods

            _init();

        }
    };
    var Game = function( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _btnMore = _obj.find( '.game__load-more' ),
            _btnAction = _btnMore.data( 'action' ),
            _wrapper = _obj.find( '.game' ),
            _request = new XMLHttpRequest();

        //private methods
        var _addEvents = function() {

                _btnMore.on( {

                    click: function() {
                        _ajaxRequest();
                        return false;
                    }

                } );

            },
            _addNewsContent = function( msg ){

                var hasItems = msg.has_items;

                $.each( msg.items, function() {

                    var newBlock = this.content;

                    _wrapper.append( newBlock );

                } );

                var newItems = _wrapper.find( '.hidden' );

                setTimeout( function() {
                    _heightAnimation( hasItems, newItems );
                }, 50 );

                $('.game__comment-add-open').each(function () {

                    var _curElem = $(this).parent();

                    if (!_curElem.hasClass('present')) {
                        MessageWrite( $( this ) );
                    }
                });
                $('.game__comment-open').each(function () {

                    var _curElem = $(this).parent();

                    if (!_curElem.hasClass('present')) {
                        MessageWrite( $( this ) );
                    }
                });
                $('.game__valid-on').each(function () {

                    var _curElem = $(this).parent();

                    if (!_curElem.hasClass('present')) {
                        MessageWrite( $( this ) );
                    }
                });

                $( '.site .swiper-container' ).each(function () {

                    var  _slider = $(this),
                        _next = _slider.find( '.game__slots-next' ),
                        _prev = _slider.find( '.game__slots-prev' ),
                        _pagination = _slider.find( '.game__slots-pagination');

                    if ( ! _slider.hasClass( 'swiper-container-horizontal' )) {
                        var swiper1 = new Swiper(_slider, {
                            nextButton: _next,
                            prevButton: _prev,
                            pagination: _pagination,
                            paginationType: 'fraction',
                            paginationClickable: true,
                            slidesPerView: 1
                        });
                    }

                });

            },
            _heightAnimation = function( hasItems, newItems ){

                newItems.each( function( i ){
                    _showNewItems( $( this ),i );
                } );

                if ( hasItems == 0 ){
                    _removeBtnMore();
                }

            },
            _showNewItems = function( item, index ){

                setTimeout( function() {
                    item.removeClass( 'hidden' );
                }, index * 100 );

            },
            _ajaxRequest = function() {

                var newsItem = _obj.find( '.game__item' );
                _request.abort();
                console.log(newsItem.length);
                _request = $.ajax( {
                    url: _btnAction,
                    data: {
                        loadedCount: newsItem.length
                    },
                    dataType: 'json',
                    timeout: 20000,
                    type: 'GET',
                    success: function ( msg ) {

                        _addNewsContent( msg );

                    },
                    error: function ( XMLHttpRequest ) {
                        if( XMLHttpRequest.statusText != 'abort' ) {
                            alert( 'Error!' );
                        }
                    }
                });

            },
            _removeBtnMore = function() {

                _btnMore.css( 'opacity', 0 );

                setTimeout( function() {

                    _btnMore.css( 'padding', 0 );

                    _btnMore.animate( {
                        height: 0
                    }, {
                        duration: 500,
                        complete: function() {
                            _btnMore.remove();
                        }
                    } );

                }, 300 );

            },
            _init = function() {

                _addEvents();
                _obj[ 0 ].obj = _self;

            };

        _init();
    };
    var GameList = function( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _btnMore = _obj.find( '.game__load-more' ),
            _btnAction = _btnMore.data( 'action' ),
            _wrapper = _obj.find( '.game-list__wrap' ),
            _request = new XMLHttpRequest();

        //private methods
        var _addEvents = function() {

                _btnMore.on( {

                    click: function() {
                        _ajaxRequest();
                        return false;
                    }

                } );

            },
            _addNewsContent = function( msg ){

                var hasItems = msg.has_items;

                $.each( msg.items, function() {

                    var newBlock =  this.content;

                    _wrapper.append( newBlock );

                } );

                var newItems = _wrapper.find( '.hidden' );

                setTimeout( function() {
                    _heightAnimation( hasItems, newItems );
                }, 50 );

            },
            _heightAnimation = function( hasItems, newItems ){

                newItems.each( function( i ){
                    _showNewItems( $( this ),i );
                } );

                if ( hasItems == 0 ){
                    _removeBtnMore();
                }

            },
            _showNewItems = function( item, index ){

                setTimeout( function() {
                    item.removeClass( 'hidden' );
                }, index * 100 );

            },
            _ajaxRequest = function() {

                var newsItem = _obj.find( '.game__slots-link' );
                _request.abort();
                console.log(newsItem.length);
                _request = $.ajax( {
                    url: _btnAction,
                    data: {
                        loadedCount: newsItem.length
                    },
                    dataType: 'json',
                    timeout: 20000,
                    type: 'GET',
                    success: function ( msg ) {

                        _addNewsContent( msg );

                    },
                    error: function ( XMLHttpRequest ) {
                        if( XMLHttpRequest.statusText != 'abort' ) {
                            alert( 'Error!' );
                        }
                    }
                });

            },
            _removeBtnMore = function() {

                _btnMore.css( 'opacity', 0 );

                setTimeout( function() {

                    _btnMore.css( 'padding', 0 );

                    _btnMore.animate( {
                        height: 0
                    }, {
                        duration: 500,
                        complete: function() {
                            _btnMore.remove();
                        }
                    } );

                }, 300 );

            },
            _init = function() {

                _addEvents();
                _obj[ 0 ].obj = _self;

            };

        _init();
    };
    var CasinosInfoLoad = function( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _btnMore = _obj.find( '.game__load-more' ),
            _btnAction = _btnMore.data( 'action' ),
            _wrapper = _obj.find( '.casinos-info__list' ),
            _request = new XMLHttpRequest();

        //private methods
        var _addEvents = function() {

                _btnMore.on( {

                    click: function() {
                        _ajaxRequest();
                        return false;
                    }

                } );

            },
            _addNewsContent = function( msg ){

                var hasItems = msg.has_items;

                $.each( msg.items, function() {

                    var newBlock =  this.content;

                    _wrapper.append( newBlock );

                } );

                var newItems = _wrapper.find( '.hidden' );

                setTimeout( function() {
                    _heightAnimation( hasItems, newItems );
                }, 50 );

            },
            _heightAnimation = function( hasItems, newItems ){

                newItems.each( function( i ){
                    _showNewItems( $( this ),i );
                } );

                if ( hasItems == 0 ){
                    _removeBtnMore();
                }

            },
            _showNewItems = function( item, index ){

                setTimeout( function() {
                    item.removeClass( 'hidden' );
                }, index * 100 );

            },
            _ajaxRequest = function() {

                var newsItem = _obj.find( '.game__slots-link' );
                _request.abort();
                console.log(newsItem.length);
                _request = $.ajax( {
                    url: _btnAction,
                    data: {
                        loadedCount: newsItem.length
                    },
                    dataType: 'json',
                    timeout: 20000,
                    type: 'GET',
                    success: function ( msg ) {

                        _addNewsContent( msg );

                    },
                    error: function ( XMLHttpRequest ) {
                        if( XMLHttpRequest.statusText != 'abort' ) {
                            alert( 'Error!' );
                        }
                    }
                });

            },
            _removeBtnMore = function() {

                _btnMore.css( 'opacity', 0 );

                setTimeout( function() {

                    _btnMore.css( 'padding', 0 );

                    _btnMore.animate( {
                        height: 0
                    }, {
                        duration: 500,
                        complete: function() {
                            _btnMore.remove();
                        }
                    } );

                }, 300 );

            },
            _init = function() {

                _addEvents();
                _obj[ 0 ].obj = _self;

            };

        _init();
    };
    var ListTypeLoad = function( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _btnMore = _obj.find( '.game__load-more' ),
            _btnAction = _btnMore.data( 'action' ),
            _wrapper = _obj.find( '.list-type' ),
            _request = new XMLHttpRequest();

        //private methods
        var _addEvents = function() {

                _btnMore.on( {

                    click: function() {
                        _ajaxRequest();
                        return false;
                    }

                } );

            },
            _addNewsContent = function( msg ){

                var hasItems = msg.has_items;

                $.each( msg.items, function() {

                    var newBlock =  this.content;

                    _wrapper.append( newBlock );

                } );

                var newItems = _wrapper.find( '.hidden' );

                setTimeout( function() {
                    _heightAnimation( hasItems, newItems );
                }, 50 );


                $('.game__comment-add-open').each(function () {

                    var _curElem = $(this).parent();

                    if (!_curElem.hasClass('present')) {
                        MessageWrite( $( this ) );
                    }
                });
                $('.game__comment-open').each(function () {

                    var _curElem = $(this).parent();

                    if (!_curElem.hasClass('present')) {
                        MessageWrite( $( this ) );
                    }
                });

                $('.game__valid-on').each(function () {

                    var _curElem = $(this).parent();

                    if (!_curElem.hasClass('present')) {
                        MessageWrite( $( this ) );
                    }
                });

                if( $(window).width() < 767 ) {
                    $('.game__expand-on').each(function () {

                        var _curElem = $(this).parent();

                        if (!_curElem.hasClass('present')) {
                            gameExpand($(this));
                        }
                    });
                }

                if( $(window).width() > 767 ) {
                    $('.list-type__expand-btn').each(function () {

                        var _curElem = $(this).parents('.list-type__item');

                        if (!_curElem.hasClass('present')) {

                            _curElem.addClass('new');
                            gameExpand($(this));
                        }

                    });
                }
            },
            _heightAnimation = function( hasItems, newItems ){

                newItems.each( function( i ){
                    _showNewItems( $( this ),i );
                } );

                if ( hasItems == 0 ){
                    _removeBtnMore();
                }

            },
            _showNewItems = function( item, index ){

                setTimeout( function() {
                    item.removeClass( 'hidden' );
                }, index * 100 );

            },
            _ajaxRequest = function() {

                var newsItem = _obj.find( '.list-type__item' );
                _request.abort();
                console.log(newsItem.length);
                _request = $.ajax( {
                    url: _btnAction,
                    data: {
                        loadedCount: newsItem.length
                    },
                    dataType: 'json',
                    timeout: 20000,
                    type: 'GET',
                    success: function ( msg ) {

                        _addNewsContent( msg );

                    },
                    error: function ( XMLHttpRequest ) {
                        if( XMLHttpRequest.statusText != 'abort' ) {
                            alert( 'Error!' );
                        }
                    }
                });

            },
            _removeBtnMore = function() {

                _btnMore.css( 'opacity', 0 );

                setTimeout( function() {

                    _btnMore.css( 'padding', 0 );

                    _btnMore.animate( {
                        height: 0
                    }, {
                        duration: 500,
                        complete: function() {
                            _btnMore.remove();
                        }
                    } );

                }, 300 );

            },
            _init = function() {

                _addEvents();
                _obj[ 0 ].obj = _self;

            };

        _init();
    };

} )();