<?php

$loadedCount = $_GET['loadedCount'];

if ( $loadedCount == 5 ){

//  "has_items" - the number of not downloaded images
//  "title" - title of news
//  "picture" - preview picture
//  "date" - date of news
//  "href" - link to main news

    $json_data = '{
        "has_items": 1,
                    "items":[

                        {
                            "id":1,
                            "content": "<li class=\"casinos-info__item hidden\"><div class=\"casinos-info__mobile\"></div><div class=\"casinos-info__flag\"><span class=\"location icons_israel_bw\"></span></div><div class=\"casinos-info__logo\"><a href=\"http://www.spinmybonus.com/r/paradise-win-casino-review\">Paradise Win Casino</a><div class=\"casinos-info__rating\"><div class=\"rating\"><div class=\"rating_9\" style=\"width: 80px\"></div></div></div></div><div class=\"casinos-info__bonus\"><span class=\"casinos-info__bonus-fs\">50&nbsp;<span class=\"casinos-info__bonus-desktop\">Free Spins</span></span><span class=\"casinos-info__bonus-fs\">300% First Deposit Bonus<span class=\"casinos-info__bonus-desktop\"></span><span class=\"casinos-info__bonus-mobile\"></span></span></div><div class=\"casinos-info__software\"><a href=\"http://www.spinmybonus.com/casinos/s/netent\">NetEnt</a><div class=\"casinos-info__popup\"><span class=\"casinos-info__popup-open\">+14</span><div class=\"casinos-info__popup-wrap\"><div><span>GamesOS</span>,&nbsp;<span>MicroGaming</span>,&nbsp;<span>Playtech</span> </div></div></div></div><div class=\"casinos-info__view\"><span><a href=\"#\" class=\"btn btn_green\" rel=\"nofollow\" target=\"_blank\"><div>Play Now</div></a></span></div></li>"
                            },
                        {
                            "id":2,
                            "content": "<li class=\"casinos-info__item hidden\"><div class=\"casinos-info__mobile\"></div><div class=\"casinos-info__flag\"><span class=\"location icons_israel_bw\"></span></div><div class=\"casinos-info__logo\"><a href=\"http://www.spinmybonus.com/r/paradise-win-casino-review\">Paradise Win Casino</a><div class=\"casinos-info__rating\"><div class=\"rating\"><div class=\"rating_9\" style=\"width: 80px\"></div></div></div></div><div class=\"casinos-info__bonus\"><span class=\"casinos-info__bonus-fs\">50&nbsp;<span class=\"casinos-info__bonus-desktop\">Free Spins</span></span><span class=\"casinos-info__bonus-fs\">300% First Deposit Bonus<span class=\"casinos-info__bonus-desktop\"></span><span class=\"casinos-info__bonus-mobile\"></span></span></div><div class=\"casinos-info__software\"><a href=\"http://www.spinmybonus.com/casinos/s/netent\">NetEnt</a><div class=\"casinos-info__popup\"><span class=\"casinos-info__popup-open\">+14</span><div class=\"casinos-info__popup-wrap\"><div><span>GamesOS</span>,&nbsp;<span>MicroGaming</span>,&nbsp;<span>Playtech</span> </div></div></div></div><div class=\"casinos-info__view\"><span><a href=\"#\" class=\"btn btn_green\" rel=\"nofollow\" target=\"_blank\"><div>Play Now</div></a></span></div></li>"

                            },
                        {
                            "id":3,
                            "content": "<li class=\"casinos-info__item hidden\"><div class=\"casinos-info__mobile\"></div><div class=\"casinos-info__flag\"><span class=\"location icons_israel_bw\"></span></div><div class=\"casinos-info__logo\"><a href=\"http://www.spinmybonus.com/r/paradise-win-casino-review\">Paradise Win Casino</a><div class=\"casinos-info__rating\"><div class=\"rating\"><div class=\"rating_9\" style=\"width: 80px\"></div></div></div></div><div class=\"casinos-info__bonus\"><span class=\"casinos-info__bonus-fs\">50&nbsp;<span class=\"casinos-info__bonus-desktop\">Free Spins</span></span><span class=\"casinos-info__bonus-fs\">300% First Deposit Bonus<span class=\"casinos-info__bonus-desktop\"></span><span class=\"casinos-info__bonus-mobile\"></span></span></div><div class=\"casinos-info__software\"><a href=\"http://www.spinmybonus.com/casinos/s/netent\">NetEnt</a><div class=\"casinos-info__popup\"><span class=\"casinos-info__popup-open\">+14</span><div class=\"casinos-info__popup-wrap\"><div><span>GamesOS</span>,&nbsp;<span>MicroGaming</span>,&nbsp;<span>Playtech</span> </div></div></div></div><div class=\"casinos-info__view\"><span><a href=\"#\" class=\"btn btn_green\" rel=\"nofollow\" target=\"_blank\"><div>Play Now</div></a></span></div></li>"

                            },
                        {
                            "id":4,
                            "content": "<li class=\"casinos-info__item hidden\"><div class=\"casinos-info__mobile\"></div><div class=\"casinos-info__flag\"><span class=\"location icons_israel_bw\"></span></div><div class=\"casinos-info__logo\"><a href=\"http://www.spinmybonus.com/r/paradise-win-casino-review\">Paradise Win Casino</a><div class=\"casinos-info__rating\"><div class=\"rating\"><div class=\"rating_9\" style=\"width: 80px\"></div></div></div></div><div class=\"casinos-info__bonus\"><span class=\"casinos-info__bonus-fs\">50&nbsp;<span class=\"casinos-info__bonus-desktop\">Free Spins</span></span><span class=\"casinos-info__bonus-fs\">300% First Deposit Bonus<span class=\"casinos-info__bonus-desktop\"></span><span class=\"casinos-info__bonus-mobile\"></span></span></div><div class=\"casinos-info__software\"><a href=\"http://www.spinmybonus.com/casinos/s/netent\">NetEnt</a><div class=\"casinos-info__popup\"><span class=\"casinos-info__popup-open\">+14</span><div class=\"casinos-info__popup-wrap\"><div><span>GamesOS</span>,&nbsp;<span>MicroGaming</span>,&nbsp;<span>Playtech</span> </div></div></div></div><div class=\"casinos-info__view\"><span><a href=\"#\" class=\"btn btn_green\" rel=\"nofollow\" target=\"_blank\"><div>Play Now</div></a></span></div></li>"

                            }
                    ]
    }';

} else {

//  "has_items" - the number of not downloaded news
//  "title" - title of news
//  "picture" - preview picture
//  "date" - date of news
//  "href" - link to main news

    $json_data = '{

        "has_items": 0,
                    "items":[

                        {
                            "id":5,
                            "content": "<li class=\"casinos-info__item hidden\"><div class=\"casinos-info__mobile\"></div><div class=\"casinos-info__flag\"><span class=\"location icons_israel_bw\"></span></div><div class=\"casinos-info__logo\"><a href=\"http://www.spinmybonus.com/r/paradise-win-casino-review\">Paradise Win Casino</a><div class=\"casinos-info__rating\"><div class=\"rating\"><div class=\"rating_9\" style=\"width: 80px\"></div></div></div></div><div class=\"casinos-info__bonus\"><span class=\"casinos-info__bonus-fs\">50&nbsp;<span class=\"casinos-info__bonus-desktop\">Free Spins</span></span><span class=\"casinos-info__bonus-fs\">300% First Deposit Bonus<span class=\"casinos-info__bonus-desktop\"></span><span class=\"casinos-info__bonus-mobile\"></span></span></div><div class=\"casinos-info__software\"><a href=\"http://www.spinmybonus.com/casinos/s/netent\">NetEnt</a><div class=\"casinos-info__popup\"><span class=\"casinos-info__popup-open\">+14</span><div class=\"casinos-info__popup-wrap\"><div><span>GamesOS</span>,&nbsp;<span>MicroGaming</span>,&nbsp;<span>Playtech</span> </div></div></div></div><div class=\"casinos-info__view\"><span><a href=\"#\" class=\"btn btn_green\" rel=\"nofollow\" target=\"_blank\"><div>Play Now</div></a></span></div></li>"
                            },
                        {
                            "id":6,
                            "content": "<li class=\"casinos-info__item hidden\"><div class=\"casinos-info__mobile\"></div><div class=\"casinos-info__flag\"><span class=\"location icons_israel_bw\"></span></div><div class=\"casinos-info__logo\"><a href=\"http://www.spinmybonus.com/r/paradise-win-casino-review\">Paradise Win Casino</a><div class=\"casinos-info__rating\"><div class=\"rating\"><div class=\"rating_9\" style=\"width: 80px\"></div></div></div></div><div class=\"casinos-info__bonus\"><span class=\"casinos-info__bonus-fs\">50&nbsp;<span class=\"casinos-info__bonus-desktop\">Free Spins</span></span><span class=\"casinos-info__bonus-fs\">300% First Deposit Bonus<span class=\"casinos-info__bonus-desktop\"></span><span class=\"casinos-info__bonus-mobile\"></span></span></div><div class=\"casinos-info__software\"><a href=\"http://www.spinmybonus.com/casinos/s/netent\">NetEnt</a><div class=\"casinos-info__popup\"><span class=\"casinos-info__popup-open\">+14</span><div class=\"casinos-info__popup-wrap\"><div><span>GamesOS</span>,&nbsp;<span>MicroGaming</span>,&nbsp;<span>Playtech</span> </div></div></div></div><div class=\"casinos-info__view\"><span><a href=\"#\" class=\"btn btn_green\" rel=\"nofollow\" target=\"_blank\"><div>Play Now</div></a></span></div></li>"

                            },
                        {
                            "id":7,
                            "content": "<li class=\"casinos-info__item hidden\"><div class=\"casinos-info__mobile\"></div><div class=\"casinos-info__flag\"><span class=\"location icons_israel_bw\"></span></div><div class=\"casinos-info__logo\"><a href=\"http://www.spinmybonus.com/r/paradise-win-casino-review\">Paradise Win Casino</a><div class=\"casinos-info__rating\"><div class=\"rating\"><div class=\"rating_9\" style=\"width: 80px\"></div></div></div></div><div class=\"casinos-info__bonus\"><span class=\"casinos-info__bonus-fs\">50&nbsp;<span class=\"casinos-info__bonus-desktop\">Free Spins</span></span><span class=\"casinos-info__bonus-fs\">300% First Deposit Bonus<span class=\"casinos-info__bonus-desktop\"></span><span class=\"casinos-info__bonus-mobile\"></span></span></div><div class=\"casinos-info__software\"><a href=\"http://www.spinmybonus.com/casinos/s/netent\">NetEnt</a><div class=\"casinos-info__popup\"><span class=\"casinos-info__popup-open\">+14</span><div class=\"casinos-info__popup-wrap\"><div><span>GamesOS</span>,&nbsp;<span>MicroGaming</span>,&nbsp;<span>Playtech</span> </div></div></div></div><div class=\"casinos-info__view\"><span><a href=\"#\" class=\"btn btn_green\" rel=\"nofollow\" target=\"_blank\"><div>Play Now</div></a></span></div></li>"

                            },
                        {
                            "id":8,
                            "content": "<li class=\"casinos-info__item hidden\"><div class=\"casinos-info__mobile\"></div><div class=\"casinos-info__flag\"><span class=\"location icons_israel_bw\"></span></div><div class=\"casinos-info__logo\"><a href=\"http://www.spinmybonus.com/r/paradise-win-casino-review\">Paradise Win Casino</a><div class=\"casinos-info__rating\"><div class=\"rating\"><div class=\"rating_9\" style=\"width: 80px\"></div></div></div></div><div class=\"casinos-info__bonus\"><span class=\"casinos-info__bonus-fs\">50&nbsp;<span class=\"casinos-info__bonus-desktop\">Free Spins</span></span><span class=\"casinos-info__bonus-fs\">300% First Deposit Bonus<span class=\"casinos-info__bonus-desktop\"></span><span class=\"casinos-info__bonus-mobile\"></span></span></div><div class=\"casinos-info__software\"><a href=\"http://www.spinmybonus.com/casinos/s/netent\">NetEnt</a><div class=\"casinos-info__popup\"><span class=\"casinos-info__popup-open\">+14</span><div class=\"casinos-info__popup-wrap\"><div><span>GamesOS</span>,&nbsp;<span>MicroGaming</span>,&nbsp;<span>Playtech</span> </div></div></div></div><div class=\"casinos-info__view\"><span><a href=\"#\" class=\"btn btn_green\" rel=\"nofollow\" target=\"_blank\"><div>Play Now</div></a></span></div></li>"

                            }

                    ]
        }';

};
echo $json_data;
exit;
?>
