{extends "page.tpl"}

{$seo1 = [
    ["1-комнатные квартиры", 450],
    ["2-комнатные квартиры", 280],
    ["3-комнатные квартиры", 175],
    ["Студии", 285],
    ["Коммерческая недвижимость", 120],
    ["Офисное помещение", 80]
]}

{$seo2 = [
    ["Квартиры с отделкой", 26],
    ["Квартиры без отделки", 227],
    ["Квартиры на стадии котлована", 565],
    ["Срок сдачи квартир 2023 год", 1024],
    ["Объявления от застройщика", 21]
]}

{block main}
    {include "views/pages/home/hero.tpl"}            {* Первый экран *}
    {include "views/pages/home/location.tpl"}        {* Расположение *}
    {include "views/common/blocks/selection.tpl"
        container="container-84"}                    {* Подбор недвижимости *}
    {include "views/pages/home/objects.tpl"}         {* Жилищные комплексы *}
    {include "views/common/blocks/seo.tpl"
        class="seo-s1"
        container="container-40"
        data=$seo1}                                  {* Элемент SEO *}
    {include "views/pages/home/map.tpl"}             {* Комплексы на карте *}
    {include "views/pages/home/about.tpl"}           {* О компании *}
    {include "views/common/blocks/seo.tpl"
        class="seo-s2"
        container="container-84"
        data=$seo2}                                  {* Элемент SEO *}
{/block}
