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
                            "content": "<a href=\"#\" class=\"game__slots-link hidden\"><div class = \"game__slots-pic\" style=\"background-image: url(pic/slider01.jpg)\"></div><div class = \"game__slots-name\">StarBurst</div></a>"
                            },
                        {
                            "id":2,
                            "content": "<a href=\"#\" class=\"game__slots-link hidden\"><div class = \"game__slots-pic\" style=\"background-image: url(pic/slider01.jpg)\"></div><div class = \"game__slots-name\">StarBurst</div></a>"

                            },
                        {
                            "id":3,
                            "content": "<a href=\"#\" class=\"game__slots-link hidden\"><div class = \"game__slots-pic\" style=\"background-image: url(pic/slider01.jpg)\"></div><div class = \"game__slots-name\">StarBurst</div></a>"

                            },
                        {
                            "id":4,
                            "content": "<a href=\"#\" class=\"game__slots-link hidden\"><div class = \"game__slots-pic\" style=\"background-image: url(pic/slider01.jpg)\"></div><div class = \"game__slots-name\">StarBurst</div></a>"

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
			                "content": "<a href=\"#\" class=\"game__slots-link hidden\"><div class = \"game__slots-pic\" style=\"background-image: url(pic/slider01.jpg)\"></div><div class = \"game__slots-name\">StarBurst</div></a>"
                            },
                        {
                            "id":6,
                            "content": "<a href=\"#\" class=\"game__slots-link hidden\"><div class = \"game__slots-pic\" style=\"background-image: url(pic/slider01.jpg)\"></div><div class = \"game__slots-name\">StarBurst</div></a>"

                            },
                        {
                            "id":7,
                            "content": "<a href=\"#\" class=\"game__slots-link hidden\"><div class = \"game__slots-pic\" style=\"background-image: url(pic/slider01.jpg)\"></div><div class = \"game__slots-name\">StarBurst</div></a>"

                            },
                        {
                            "id":8,
                            "content": "<a href=\"#\" class=\"game__slots-link hidden\"><div class = \"game__slots-pic\" style=\"background-image: url(pic/slider01.jpg)\"></div><div class = \"game__slots-name\">StarBurst</div></a>"

                            }

                    ]
        }';

};
echo $json_data;
exit;
?>
